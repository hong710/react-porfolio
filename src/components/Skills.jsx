import React from 'react'
import TitleSection from './subcomponents/TitleSection';
import {HTML, Js,Css, Mui, ReactLogo, Tailwind, RoR,Postgres} from '../assets/skills';
import SkillsItem from './subcomponents/SkillsItem';

function Skills() {
  return (
    <div id='skill' className='w-full px-4 h-[50%] py-20 bg-slate-100 dark:bg-darkMode'>
        <div className='my-container flex flex-col justify-center h-full'>
            <TitleSection title={'Skills'} text={'What I Can do'}/>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
                <SkillsItem item={HTML} name={'HTML5'}/>
                <SkillsItem item={Css} name={'CSS3'}/>
                <SkillsItem item={Js} name={'JavaScript'}/>
                <SkillsItem item={ReactLogo} name={'React'}/>
                <SkillsItem item={Mui} name={'MUI5'}/>
                <SkillsItem item={Tailwind} name={'Tailwind'}/>
                <SkillsItem item={RoR} name={'Ruby on Rails'}/>               
                <SkillsItem item={Postgres} name={'PostgresDB'}/>


            </div>

        </div>

    </div>
  )
}

export default Skills