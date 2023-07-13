// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState} from 'react'

const useCountryAPI = () => {
    //loading state
    const [isloading, setIsloading] = useState(false);

    //countryData
    const [countryData, setCountryData] = useState([]);

    //Error
    const [isError, setIsError] = useState(null);

    const fetchCountries = async ()=>{
        setIsloading(true)
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const data = response.data
            setCountryData(data)
        } catch (error) {
          setIsError('No result', error)
        
        
        }
    }
    fetchCountries()
    console.log(countryData)

  return {isloading, countryData, isError, fetchCountries}
}


export default useCountryAPI