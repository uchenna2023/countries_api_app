// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const CountryDetails = ({flag, name, population, region, subregion, capital, domain, currency}) => {
  return (
    <div className='flex flex-col w-full sm:flex-row'>
            <div className='w-full sm:w-6/12'>
                <img src={flag} className='w-80 max-h-96 rounded-lg sm:w-11/12'/>
            </div>
            <div>
                <h1 className='pt-10 pb-10 text-3xl font-nunito font-extrabold'>{name}</h1>
                <div className='flex flex-col pb-10 gap-14 sm:flex-row'>
                    <div className='flex flex-col gap-3 sm:gap-2 font-nunito font-light'>
                        <p><span className='font-nunito font-semibold text-base'>Native Name:</span>{name}</p>
                        <p><span className='font-nunito font-semibold text-base'>Population:</span>{population}</p>
                        <p><span className='font-nunito font-semibold text-base'>Region:</span>{region}</p>
                        <p><span className='font-nunito font-semibold text-base'>Sub Region:</span>{subregion}</p>
                        <p><span className='font-nunito font-semibold text-base'>Capital:</span>{capital}</p>
                    </div>
                    <div className='flex flex-col gap-3 font-light'>
                        <p><span className='text-base font-nunito font-semibold'>Top Level Domain:</span>{domain}</p>
                        <p><span className='text-base font-nunito font-semibold'>Currencies:</span>{currency}</p>
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
  )
}

export default CountryDetails