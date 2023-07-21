/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const BordersButton = (props) => {
  return (
    <div>
        <button onClick={props.borderNav} className='shadow-md w-24 p-2 rounded-sm bg-white dark:bg-slate-800 dark:text-slate-300 text-sm font-nunito '>{props.item}</button>
        {/*<button className='shadow-md w-24 rounded-sm bg-white text-sm font-nunito'>Italy</button>
        <button className='shadow-md w-24 rounded-sm bg-white text-sm font-nunito'>Netherlands</button>*/}
    </div>
  )
}

export default BordersButton