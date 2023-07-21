/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import BordersButton from './BordersButton'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const CountryDetails = (props) => {
    const navigate = useNavigate();
    

    
  return (
        <div className='flex flex-col w-full sm:flex-row'>
            <div className='w-full sm:w-6/12'>
                <img src={props.flag} className='w-80 max-h-96 rounded-lg sm:w-11/12'/>
            </div>
            <div>
                <h1 className='pt-10 pb-10 text-3xl font-nunito font-extrabold dark:text-slate-300'>{props.name}</h1>
                <div className='flex flex-col pb-10 gap-14 sm:flex-row'>
                    <div className='flex flex-col gap-3 sm:gap-2 font-nunito font-light dark:text-slate-300'>
                        <p><span className='font-nunito font-semibold text-base'>Native Name: </span>{props.name}</p>
                        <p><span className='font-nunito font-semibold text-base'>Population: </span>{props.population}</p>
                        <p><span className='font-nunito font-semibold text-base'>Region: </span>{props.region}</p>
                        <p><span className='font-nunito font-semibold text-base'>Sub Region: </span>{props.subregion}</p>
                        <p><span className='font-nunito font-semibold text-base'>Capital: </span>{props.capital}</p>
                    </div>
                    <div className='flex flex-col gap-3 font-light dark:text-slate-300'>
                        <p><span className='text-base font-nunito font-semibold'>Top Level Domain: </span>{props.domain}</p>
                        <p><span className='text-base font-nunito font-semibold'>Currencies: </span>{props.currency}</p>
                        <p><span className='text-base font-nunito font-semibold'>Languages: </span>{props.lang}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 sm:flex-row'>
        <div>
            <p className='font-nunito font-semibold dark:text-slate-300'>Border Countries:</p>
        </div>
        <div className='grid grid-cols-3 sm:grid sm:grid-cols-4 gap-3'>
            {props.borders ? (props.borders?.map((b,index)=> <BordersButton key={index} item={b} borderNav={navigate(`/details/${b}`)}/>)) : <p className='dark:text-slate-300'>No borders</p>}
        </div>
    </div>
            </div>
        </div>
    
  )
}

export default CountryDetails