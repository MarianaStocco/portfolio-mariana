import React from 'react'
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Html from '../assets/html.png';
import Node from '../assets/nodejs.png';
import ReactJs from '../assets/react.png';
import Postgres from '../assets/postgres.png';
import Github from '../assets/gitHub.png';
import Tailwind from '../assets/tailwind.png';
import Redux from '../assets/redux.png'

export const Skills = () => {
  return (
    <div name='skills' className='w-full md:h-screen  bg-[#363636] text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div  className='sm:text-left pb-8 ssm:pt-[700px] pl-4'>
                <p className='text-6xl font-bold inline'>Skills</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Css} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Javascript} alt="Js icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Html} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Node} alt="NodeJs icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={ReactJs} alt="React icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Postgres} alt="Postgres icon" />
                    <p className='my-4'>POSTGRES</p>
                </div>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Github} alt="GitHub icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Redux} alt="Redux icon" />
                    <p className='my-4'>REDUX</p>
                </div>
                <div className='shadow-md  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto'src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
