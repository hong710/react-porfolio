import React from 'react'
import {useParams} from 'react-router-dom'
import { projects } from '../utils/data';
import {Link} from 'react-router-dom';
import {HiArrowCircleRight, HiArrowNarrowLeft} from 'react-icons/hi'
function Detail() {


    let params = useParams();

    const [project]= projects?.filter((p) => p.id ===params.id);    
    

    return (
        <div className='w-full h-screen '>
            <div className='my-container h-screen pt-40 px-4'>
                <div className='w-full flex justify-end pr-1 md:pr-8 lg:pr-32'>
                    <Link to='/'>
                        <h2 className='text-lg border-2 px-4 py-1'>
                            <HiArrowNarrowLeft className='inline mr-2'/>
                            Back</h2>
                    </Link>
                </div>
                <h1 className='py-4 uppercase dark:gradientText'>{project&&project.name}</h1>
                
                <div className='grid md:grid-cols-4 gap-5 '>
                    <div className='flex col-span-3 dark:shadow-xl dark:shadow-stone-700 p-1 bg-stone-500 items-center'>
                        <img src={project.img} alt={project.name}  />
                        
                    </div>

                    
                    <div className=' p-4 pt-0'>
                        <h2 className='text-2xl tracking-wider'>Technology</h2>
                        <ul>
                            {project&&project.description.map((item,i) => 
                                <li key={i}>
                                   
                                    <p className='text-lg py-4'> <HiArrowCircleRight className='inline text-2xl text-darkGradient2 mr-4'/> {item}</p>
                                </li>)}
                        </ul>
                        
                    </div>
                </div>
                
                <div className='grid md:grid-cols-4 gap-5 '>
                <div className='col-span-3'>
                    <h1 className=' tracking-tight my-8 dark:text-slate-500'>Overview</h1>
                    <p className='tracking-wide'>
                    {project.details}
                    </p>

                    <div className='my-8'>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <buton className='button p-4 my-4 capitalize mr-8'>
                                Visit the website
                            </buton>
                        </a>
                        <a href={project.github} target="_blank" rel="noreferrer">
                            <buton className='button p-4 my-4 capitalize'>
                            GitHub
                        </buton>
                        </a>
                    </div>
                </div>
                </div>
            </div>
            

        </div>
    )
}

export default Detail