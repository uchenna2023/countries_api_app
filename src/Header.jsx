// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BsMoon} from 'react-icons/bs'


const Header = () => {
  return (
        <div className="bg-white">
        <div className="flex flex-row justify-between pt-6 pb-6 font-bold bg-white pl-5 pr-5 bg sm:pl-20 sm:pr-20">
          <h1 className='text-lg font-nunito font-extrabold'>Where in the world?</h1>
          <div className='flex flex-row items-center gap-2'>
            <BsMoon className='text-sm'/>
            <p className='font-semibold font-nunito'>Dark mode</p>
          </div>
        </div>
    </div>
  )
}

export default Header