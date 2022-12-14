import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll';

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#363636]'>

      {/* Container */}
      <div className='max-w-[1000px] ssm:pt-[40px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#04fb04] px-1 font-bold text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          Mariana Stocco
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#04fb04]'>
          I'm a Full Stack Developer.
        </h2>
        <p className=' text-[#dddbd7] py-4 max-w-[700px]'>
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focussed on
          learning more about responsive full-stack web applications, doing a lot
          of mini projects.
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className='text-[white] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#04fb04] hover:border-[#04fb04] hover:text-[black]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </Link>  
        </div>
      </div>

    </div>
  )
}
