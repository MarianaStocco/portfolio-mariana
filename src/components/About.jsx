import React from 'react'
import Profile from '../assets/profile.jpg'

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#363636] text-white'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-left pb-8 pt-[160px] pl-4'>
                <p className='text-6xl font-bold inline'>
                  About
                </p>
              </div>
              
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left text-4xl font-bold text-[#04fb04]'>
                  <p>Hi. I'm Mariana, nice to meet you. Please take a look around.</p>
                  <img className='w-[250px] mx-6 my-4 items-center' src={Profile} alt='perfil'></img>
                  <div>
                    {/* <p className='text-center sm:text-left text-[10px] mx-6  font-thin text-white'>artwork by Mariano Valdivieso</p> */}
                  </div>
                </div>
                <div>
                  <p>From an early age, I have been in the search of a life purpose, and somehow I always found myself turning to the artistic and creative side of me to find all the answers.
 I found what I was looking for in each new area I ventured into: create something as I pleased, perfect my techniques, feel proud of my sense of achievement, and above all, realize that I could always learn more, acquire better and greater skills.
Drawing, painting, design, crochet... When I discovered JavaScript I couldn’t help to compare its learning process to that of crochet; the way to hold the needle, the necessary tension of the thread. They are also similar in the sense that, you need to learn appropriate techniques- and tirelessly repeat them all- to truly acquire them. At first, the end product seems to be quite rudimentary. With constant effort, it all evolves from something plainly acceptable and nice into something beautifully functional.
The vast world of a full stack developer; the almost infinite range of possibilities- with the use of combined technology- is exactly what fascinated and attracted me. I love being able to create products that help other people and encourage my professional and personal growth.
I am a Full Stack Developer, I am a creative artist, I am the right person to develop the applications that you need</p>  
                </div>
              </div>
          </div>
        </div>
      );
    };
    
