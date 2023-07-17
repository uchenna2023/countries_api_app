
import Header from './Header'
import MainPage from './MainPage'
import Details from './Details'
import { Route, Routes } from "react-router-dom"
import { useState } from 'react'


function App() {
  const [darkMode, setDarkMode] = useState(true)

  const handleToggle = ()=>{
    setDarkMode(!darkMode)
  }

  return (
    <>
      <Header handleToggle={handleToggle} darkMode={darkMode}/>
      <Routes>
        <Route path="/" element={<MainPage darkMode={darkMode}/>}/>
        <Route path="/details/:capital" element={<Details darkMode={darkMode} />}/>
      </Routes>
    </>
  );
}

export default App;
