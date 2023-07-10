
import Header from './Header'
import MainPage from './MainPage'
import Details from './Details'
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/details" element={<Details />}/>
      </Routes>
    </>
  );
}

export default App;
