import React from 'react';


import logoDark from '../../assets/logo.png';
function Logo() {
  return (
    
    <div className='flex items-center'>
        <img src={logoDark} alt='[A.H]' width='155' height='40' className='rounded-md'/>
        {/* <p className='mx-2 font-logo text-2xl py-2 text-gray-900 dark:gradientText'>Anthony</p> */}
    </div>    
    
   
    
  )
}

export default Logo