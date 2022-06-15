import React from 'react';
import profile from '../assets/profile.png';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion';


import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

function Hero() {
	return (
		<div id= '/' className='w-full h-screen text-center md:text-left pt-20 hero '
		>
			<div className='flex my-container w-full h-full items-center '>
				<div className='grid grid-cols-1 px-4 md:grid-cols-3'>	 
					<motion.div className='md:col-span-2 md:self-center'
						animate={{
							scale:[0,1]
						}}
						transition={{ duration: 1 }}
					>
						<p className='uppercase text-sm tracking-widest text-gray-600 py-4 dark:text-darkFont'>
							Let&apos;s build something together
						</p>			
						<h1 className=' text-gray-700 dark:text-darkFont lg:text-4xl lg:tracking-widest'>
							Hi, I&apos;m <span className='text-primary dark:gradientText lg:text-5xl'>Anthony</span>
						</h1>
						

						<h2 className=' py-2 text-gray-700 dark:text-darkFont tracking-wider text-3xl lg:text-5xl'>
							I&apos;m a Full Stack Developer.
						</h2>
						<p className='py-2 text-gray-600 sm:max-w-[80%] md:max-w-[90%] lg:max-w-[70%] mx-auto md:mx-0 					text-sm md:text-base dark:text-darkFont lg:text-lg 2xl:text-xl'
						>
							I&apos;m a full-stack developer specializing in building efficient web applications using React.js, Node.js, and Ruby on Rails that work across all platforms and browsers.
						</p>

						<div className='flex items-center justify-between py-4 
						'>
							{/* <SocialMedia custom={'p-4'}/> */}

							<Link to='projects'  activeClass="active" spy={true} smooth={true} offset={-40} duration={500}>
							<div className='
							mx-auto md:mx-0 border py-2 px-4 cursor-pointer tracking-wide
							dark:border-darkGradient2 
							dark:hover:gradientBgReverse
							dark:hover:border-darkMode
							'>
								View Work 
								<HiOutlineArrowNarrowRight
									className='inline ml-2'
								/>
								
							</div>
							</Link>
						</div>
					</motion.div>
					<motion.div className="w-48 md:w-auto  mx-auto pt-4 md:pt-0 "
						
						animate={{
							scale:[0,1]
						}}
						transition={{ duration: 1 }}

					>	
						<img src={profile} className='rounded-full' alt='programming'  />
					</motion.div>
				</div>				
			</div>
		</div>
	)
}

export default Hero