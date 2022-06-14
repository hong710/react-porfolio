import React from 'react';
import Image from 'next/image';
import avatar from '../../public/assets/avatar.png';
function Avatar() {
  return (
    <div className='flex items-center ' >
        <div> 
            <Image src={avatar} alt='avatar' width='100' height='100'  className='rounded-full z-1'/>
        </div>
       
    </div>
  )
}

export default Avatar