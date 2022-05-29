import React, {useState} from 'react'

import {Footer} from './components/Footer'
import {Navbar} from './components/Navbar'
import {Routing} from './components/Routing'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 black min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
