import React, {useState} from 'react'
import Logo from './subcomponents/Logo';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from "react-scroll";
import SocialMedia from './subcomponents/SocialMedia';
import {motion} from 'framer-motion'


const Navbar = () => {

    const [open, setOpen] = useState(false);
    const navItems=[
        {name: 'Home',link:'/'},
        {name: 'About',link:'about'},
        {name: 'Skill',link:'skill'},
        {name: 'Projects',link:'projects'},
        {name: 'Contact',link:'contact'},
       ]
  return (
    <nav className={`fixed w-full shadow-md z-10  py-2 sm:py-4
     px-4  2xl:px-16 hero bg-slate-900 `}
    >
        <div className='flex justify-between items-center w-full h-full my-container'>
            <motion.div
                animate={{rotate:360}}
                transition={{ duration: 2 }}
            >
                <Logo/>
            </motion.div>
            <div>
                <ul className='hidden sm:flex '>
                    {
                        navItems.map((item) =>{
                            return(
                                <Link to={item.link} key={item.name}
                                activeClass="active"
                                spy={true} smooth={true} offset={-40} duration={500}
                                >
                                    <li className='ml-10 text-sm font-medium uppercase border-b-4 border-[transparent] hover: hover:gradientText'

                                    >{item.name}
                                    </li>
                                </Link>
                            )
                        })
                    }          

                </ul>

                {/* Mobile Nav Icon */}
                <div>
                    <AiOutlineMenu size={30} onClick={()=> setOpen(true)} 
                        className=' sm:hidden m-4'/>
                </div>
            </div>
        </div>

        {/* Mobile nav */}
        <div className={`left-0 top-0 w-full h-screen bg-black/70 ${open? 'fixed': 'hidden'} sm:hidden`}>
            <div className='fixed right-0 top-0 w-[100%] h-screen bg-[#ecf0f3] dark:bg-darkMode ease-in-out transition duration-1000'
            >
                <div>
                    <div className='flex w-full justify-between items-center'>
                        {/* mobile logo */}
                        <div className='m-4'><Logo /></div>

                        {/* close Nav Icon */}
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:bg-neutral-700 dark:shadow-stone-900 p-3 cursor-pointer mx-4'
                            onClick={()=>setOpen(false)}
                        >
                            <AiOutlineClose size={20} />
                        </div>
                    </div>

                    <div className='m-4 border-b border-gray-300 pb-2'>
                        <p className='text-sm'>Let&apos;s build something legendary together!</p>
                    </div>

                    <div className='m-4 flex flex-col uppercase tracking-widest items-center'>
                        <ul>
                        {
                            navItems.map((item) =>{
                                return(
                                    <Link to={item.link}  key={item.name} >
                                        <li className='py-4 text-sm text-center' onClick={()=>setOpen(false)}>{item.name}</li>
                                    </Link>
                                )
                            })
                        }
                        </ul>                        
                    </div>
                    <div className='m-4 fixed bottom-0 py-16'>
                        <p className='tracking-widest text-[#5651e5] mb-4'>Let&apos;s connect</p>

                        {/* mobile social media bar*/}
                        <div className='flex '>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </nav>
  )
}

export default Navbar
