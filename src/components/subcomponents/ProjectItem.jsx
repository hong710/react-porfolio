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
                {project.description.map((item)=>
                    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-primary text-white rounded-full mr-2">{item}</span>
                )}
                <Link to={`/project/${project.id}`}>
                    <p className='text-center text-slate-700 bg-slate-200 p-3
                        text-lg cursor-pointer rounded-xl mt-2
                        
                        '><AiOutlineLink className='inline'/> More Info
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem