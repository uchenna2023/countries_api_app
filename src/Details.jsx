// eslint-disable-next-line no-unused-vars
import React from 'react'
import Garmany from './assets/Garmany.png'
import {BiArrowBack} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate();
  return (
    <div className='pl-10 pb-72 pr-10 flex flex-col w-full bg-slate-100 sm:pl-20 sm:pr-20'>
        <button className='flex flex-row font-nunito font-light gap-2 rounded-lg shadow-md w-36 p-2 items-center justify-center mt-12 mb-20 sm:mt-20 sm:mb-20 bg-white' onClick={()=>navigate('/')}>
            <BiArrowBack/>
            <p className='text-base'>Back</p>
        </button>
        <div className='flex flex-col w-full sm:flex-row'>
            <div className='w-full sm:w-6/12'>
                <img src={Garmany} className='w-80 max-h-96 rounded-lg sm:w-11/12'/>
            </div>
            <div>
                <h1 className='pt-10 pb-10 text-3xl font-nunito font-extrabold'>Germany</h1>
                <div className='flex flex-col pb-10 gap-14 sm:flex-row'>
                    <div className='flex flex-col gap-3 sm:gap-2 font-nunito font-light'>
                        <p><span className='font-nunito font-semibold text-base'>Native Name:</span> Germany</p>
                        <p><span className='font-nunito font-semibold text-base'>Population:</span>11,000,000</p>
                        <p><span className='font-nunito font-semibold text-base'>Region:</span>Europe</p>
                        <p><span className='font-nunito font-semibold text-base'>Sub Region:</span> Western Europe</p>
                        <p><span className='font-nunito font-semibold text-base'>Capital:</span> Brussel</p>
                    </div>
                    <div className='flex flex-col gap-3 font-light'>
                        <p><span className='text-base font-nunito font-semibold'>Top Level Domain:</span>.be</p>
                        <p><span className='text-base font-nunito font-semibold'>Currencies:</span>Euro</p>
                        <p><span className='text-base font-nunito font-semibold'>Languages:</span>German</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 sm:flex-row'>
                    <div>
                        <p className='font-nunito font-semibold'>Border Countries:</p>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <button className='shadow-md w-24 p-2 rounded-sm bg-white text-sm font-nunito'>France</button>
                        <button className='shadow-md w-24 rounded-sm bg-white text-sm font-nunito'>Italy</button>
                        <button className='shadow-md w-24 rounded-sm bg-white text-sm font-nunito'>Netherlands</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details