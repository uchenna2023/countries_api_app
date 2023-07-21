/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BsMoon, BsMoonFill} from 'react-icons/bs'


// eslint-disable-next-line react/prop-types
const Header = (props) => {
  console.log(props)
  return (
    <div className={props.darkMode ? 'dark' : ''}>
      <div className="bg-white">
        <div className="flex flex-row dark:bg-slate-800 justify-between pt-6 pb-6 font-bold bg-white pl-5 pr-5 bg sm:pl-20 sm:pr-20">
          <h1 className='text-lg font-nunito font-extrabold dark:text-neutral-300'>Where in the world?</h1>
          <div className='flex flex-row items-center gap-2 dark:text-neutral-300'>
            {props.darkMode ? <BsMoonFill onClick={props.handleToggle} className='focus:cursor-pointer'/> : <BsMoon className='text-sm focus:cursor-pointer' onClick={props.handleToggle}/>}
            <p className='font-semibold font-nunito dark:text-neutral-300'>Dark mode</p>
          </div>
        </div>
    </div>

    </div>
        
  )
}

export default Header