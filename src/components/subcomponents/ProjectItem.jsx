import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineLink} from 'react-icons/ai'



function ProjectItem({project}) {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl bg-slate-300
            shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-primary to-my-gradient 
            dark:shadow-stone-800 dark:bg-neutral-700
            '>
            <img
                src={project.img} alt='project1'
                className='group-hover:opacity-10 rounded-xl'
            />
            <div className='hidden group-hover:block absolute'>
                <h3 className='text-center text-slate-200 text-2xl tracking-wider'>{project.name}</h3>
                <p className='text-center text-slate-200 my-6'>{project.description}</p>
                <Link to={`/project/${project.id}`}>
                    <p className='text-center text-slate-700 bg-slate-200 p-3
                        text-lg cursor-pointer rounded-xl
                        
                        '><AiOutlineLink className='inline'/> More Info
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem