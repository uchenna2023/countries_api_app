// eslint-disable-next-line no-unused-vars
import React from 'react'
import {HiSearch} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import CountryCard from './CountryCard'
import { useState, useEffect } from 'react'
import axios from 'axios'



const MainPage = () => {

  const [country, setCountry] = useState([]);

  useEffect(()=>{
    const fetchedData = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountry(response.data);
    };

    fetchedData()
  },[])

    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
  return (
    <div>
        <div className="bg-slate-100 pl-1 pt-8 sm:pt-14 sm:pl-20">
          <div className="flex flex-col justify-between pt-15 pr-2 pl-2 sm:pr-20 sm:flex-row items-start sm:items-center gap-10">
            <div className='w-full bg-white flex flex-row rounded-md sm:w-2/6 items-center justify-center'>
              <div className='font-bold p-2 pl-7 w-2/12'><HiSearch/></div>
              <input type="search " className='w-10/12 h-14 rounded-r-md font-nunito' placeholder='Search for a country...'/>
            </div>
            <select className='w-56 border-slate-50 h-14 rounded-md font-nunito'>
              <option>Africa</option>
              <option>America</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </select>
          </div>
          <div className="flex flex-col pr-1 gap-5 pb-5 pt-10 sm:pr-0 sm:pt-20 w-full items-center sm:grid-cols-4 sm:grid sm:gap-y-7">
            {country?.map((c)=>(<CountryCard key={c?.name?.common} flags={c?.flags?.png} name={c?.name?.common} population={c?.population} capital={c?.capital} region={c?.region}/>))}
          </div>
        </div>
    </div>
  )
}

export default MainPage