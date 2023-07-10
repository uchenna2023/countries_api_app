// eslint-disable-next-line no-unused-vars
import React from 'react'
import Garmany from './assets/Garmany.png'
import {HiSearch} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

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
          <div className="flex flex-col pr-1 gap-14 pb-5 pt-10 sm:pr-20 sm:pt-20 w-full sm:flex-row items-center">
            <div className="w-9/12 bg-white rounded-md sm:w-9/12">
              <img src={Garmany} alt="" className="w-full max-h-48 rounded-t-md"/>
              <div className='p-5 font-nunito'>
                <h3 className='pb-5 font-extrabold'>Germany</h3>
                <p >Population:</p>
                <p>Region:</p>
                <p>Capital:</p>
              </div>
            </div>
            <div className="w-9/12 bg-white rounded-md" onClick={() => navigate('details')}>
              <img src={Garmany} alt="" className="w-full max-h-48 rounded-t-md"/>
              <div className='p-5'>
                <h3 className='pb-5 font-bold'>Germany</h3>
                <p >Population:</p>
                <p>Region:</p>
                <p>Capital:</p>
              </div>
            </div>
            <div className="w-9/12 bg-white rounded-md">
              <img src={Garmany} alt="" className="w-full max-h-48 rounded-t-md"/>
              <div className='p-5'>
                <h3 className='pb-5 font-bold'>Germany</h3>
                <p >Population:</p>
                <p>Region:</p>
                <p>Capital:</p>
              </div>
            </div>
            <div className="w-9/12 bg-white rounded-md">
              <img src={Garmany} alt="" className="w-full max-h-48 rounded-t-md"/>
              <div className='p-5'>
                <h3 className='pb-5 font-bold'>Germany</h3>
                <p >Population:</p>
                <p>Region:</p>
                <p>Capital:</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainPage