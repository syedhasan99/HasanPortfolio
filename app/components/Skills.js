import React from 'react'

const Skills = () => {
  return (
    <div className='w-full h-full flex items-center gap-1 p-12'>
        <div className='flex items-center flex-col'>
            <h2 className='text-7xl uppercase text-center translate-y-6'>Skills &<br /> Expertise</h2>
            <img src='images/skills.png' alt='Skills image' className='w-2/3' />
        </div>
        <div className=''>
            <h2 className='ovo text-2xl my-3'>Technical Skills</h2>
            <ul>
                <li>⎼ JavaScript (ES6+)</li>
                <li>⎼ CSS, HTML</li>
                <li>⎼ Responsive Web Design </li>
                <li>⎼ Performance optimization</li>
            </ul>
            <h2 className='ovo text-2xl my-3'>Frameworks</h2>
            <ul>
                <li>_ React</li>
                <li>_ Next JS</li>
                <li>_ Angular 18</li>
            </ul>
        </div>
    </div>
  )
}

export default Skills