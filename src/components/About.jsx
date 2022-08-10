import React from 'react'
import Profile from '../assets/profile.jpg'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#363636] text-white'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-left pb-8 pl-4'>
                <p className='text-6xl font-bold inline'>
                  About
                </p>
              </div>
              {/* <img className='w-24 mx-auto' src={Profile} alt='perfil'></img> */}
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left text-4xl font-bold text-[#04fb04]'>
                  <p>Hi. I'm Mariana, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                  <p>I am passionate about building excellent software that improves
                  the lives of those around me. I specialize in creating software
                  for clients ranging from individuals and small-businesses all the
                  way to large enterprise corporations. What would you do if you had
                  a software expert available at your fingertips?</p>  
                </div>
              </div>
          </div>
        </div>
      );
    };
    
