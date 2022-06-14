import React from 'react'

function TitleSection({title, text}) {
  return (
    <>
        <p className='title text-2xl p-0'>{title}</p>
        <h1 className='py-6'>{text}</h1>
    </>
  )
}

export default TitleSection