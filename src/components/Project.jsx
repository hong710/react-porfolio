import React from 'react'
import ProjectItem from './subcomponents/ProjectItem';
import TitleSection from './subcomponents/TitleSection';
import {projects} from'../utils/data';
function Project() { 

  return (

    <div id='projects' className='w-full'>
        <div className='my-container px-4 py-20'>
            <TitleSection title={'Projects'} text={'What I\'ve Built'}/>
         
            <div className='grid md:grid-cols-2 gap-8'>
                {projects.map((p,i)=> <ProjectItem project={p} key={i}/>)}               
            </div>
        </div>
    </div>
  )
}

export default Project