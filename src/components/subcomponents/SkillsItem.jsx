import React from 'react'
function SkillsItem({item, name}) {
    return (
        <div className=' p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 
            dark:shadow-stone-900 dark:bg-neutral-800'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <img src={item} width='64px' height='64px' alt={name}/>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-xs lg:text-sm' >{name}</p>
                </div>

            </div>

        </div>
    )
}

export default SkillsItem