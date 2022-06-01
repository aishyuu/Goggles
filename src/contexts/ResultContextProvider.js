import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Javascript');

    // /videos, /search, /images
    const getResults = async (type) => {
        setIsLoading(true);
        console.log(type);
        
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '7a6e2e347dmsh25bf216a98d4a6dp1de0eejsn47fb165c59a0'
            }
        });

        const data = await response.json();

        console.log({type, data})
        if(type.includes('/news')) {
            setResults(data.entries);
        } else if(type.includes('/images')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }
        
        setIsLoading(false);
    }

    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);