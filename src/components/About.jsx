import React from 'react';
import banner from '../assets/programming.png';
import {Link} from 'react-scroll';
import {FaAnchor} from 'react-icons/fa';
import TitleSection from './subcomponents/TitleSection';


function About() {
  return (
    <div name='about' className='w-full px-4 flex  pt-20 bg-slate-200 dark:bg-darkMode'>
        
        <div className='my-container lg:grid grid-cols-3 gap-8 '>

            <div className='col-span-2 text-sm md:text-base dark:text-darkFont lg:text-lg 2xl:text-xl'>
                <TitleSection title={'About'} text={'Who I am'}/>
                <p className='text-gray-600 py-2 dark:text-gray-50 '>
                    I am a Software engineer and <FaAnchor className='inline text-blue-700'/> U.S Navy veteran.
                </p> 
                <p className='text-gray-600 py-2 dark:text-gray-50'>
					While serving in the Navy as a Medical Technician, I always had a passion for coding and made a plan for myself to be a Software Engineer. After separation, I went to the Coding Bootcamp and recently graduated from   
                    <Link to='https://flatironschool.com/'>
                        <span className='cursor-pointer bg-black text-sky-500 px-1 font-bold text-sm mx-1'>{'//'}</span>
                    </Link>FlatIron school.
                </p> 
                <p className='text-gray-600 py-2 dark:text-gray-50'>
                    Before joining the Navy, I worked in I.T field as a System/ Network administrator. I earned my Bachelor &apos; s degree in Computer Science in 2015 from the City University of New York.
                    
                </p>  
                <p className='text-gray-600 py-2 dark:text-gray-50' >
                    Now, I am excited to combine my I.T experience and customer service with my problem-solving skill for a software development role.
                    I am looking for opportunities to learn, contribute to the team, take on more challenges and responsibilities.
                </p> 
                
            </div>

            <div className='max-w-[100%] md:max-w-[80%] lg:max-w-[100%] py-16 flex mx-auto lg:block lg:py-24'>
                <img src={banner} alt="computer" className='rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default About