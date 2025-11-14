import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import axios from 'axios'

const Mycontext = createContext();

const App = () => {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const values = { countryList, selectedCountry, setSelectedCountry };

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries")
  }, [])

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
      console.log(response);
      
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  }
  
  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Mycontext.Provider>
    </BrowserRouter>
  )
}

export { Mycontext };
export default App
