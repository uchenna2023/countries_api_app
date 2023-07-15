// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types, no-unused-vars
const CountryCard = ({flags, name, population, region, capital, navigate}) => {
  
  return (
    <div className="w-9/12 bg-white rounded-md sm:w-9/12 sm:h-72" onClick={navigate}>
              <img src={flags} alt="" className="w-full max-h-36 rounded-t-md"/>
              <div className='p-5 font-nunito'>
                <h3 className='pb-5 font-extrabold'>{name}</h3>
                <p >Population:{population}</p>
                <p>Region:{region}</p>
                <p>Capital:{capital}</p>
              </div>
            </div>
  )
}

export default CountryCard