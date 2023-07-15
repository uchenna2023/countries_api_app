// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react'
//import Garmany from './assets/Garmany.png'
import {BiArrowBack} from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import CountryDetails from './CountryDetails'

const Details = () => {
    let {capital} = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/capital/${capital}`)
          .then((res) => res.json())
          .then((data) => setDetails(data))
          .catch((err) => console.log("Error:", err.message));
      }, [capital]);
      
  return (
    <div className='pl-10 pb-72 pr-10 flex flex-col w-full bg-slate-100 sm:pl-20 sm:pr-20'>
        <button className='flex flex-row font-nunito font-light gap-2 rounded-lg shadow-md w-36 p-2 items-center justify-center mt-12 mb-20 sm:mt-20 sm:mb-20 bg-white' onClick={()=>navigate('/')}>
            <BiArrowBack/>
            <p className='text-base'>Back</p>
        </button>
        {details.map((x)=><CountryDetails key={x?.name?.common} flag={x?.flags?.png} name={x?.name?.common} population={x?.population} region={x?.region} subregion={x?.subregion} capital={x?.capital} domain={x?.tld[0]} currency={x?.currencies[Object?.keys(x?.currencies)[0]]?.name} lang={x?.languages?.ara}/>)}
    </div>
  )
}

export default Details