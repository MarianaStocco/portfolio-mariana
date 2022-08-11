import React from 'react'
import Profile from '../assets/mariana.jpg'

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
              
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left text-4xl font-bold text-[#04fb04]'>
                  <p>Hi. I'm Mariana, nice to meet you. Please take a look around.</p>
                  <img className='w-[250px] mx-6 my-4 items-center' src={Profile} alt='perfil'></img>
                </div>
                <div>
                  <p>From an early age I was in search of a purpose in my life and I always found the answers in creativity and art.
I found what I was looking for in each area I ventured into: create to my liking, perfect the technique, feel proud of myself for the achievement and, above all, realize that I could always learn more, acquire more and better skills.
Drawing, painting, design, knitting... when I discovered JavaScript I couldn't help but compare its learning process to crochet: the way to hold the needle, the necessary thread tension. Learn appropriate techniques, the indispensable repetition of them to strengthen them to finally obtain a final product, which at first was rudimentary and with perseverance and effort became something acceptable to later become unique, beautiful and functional.
The wide world of development, the almost infinite possibilities and the combination of technologies it offers, is exactly what attracted me and fell in love with it. Being able to create products that help people and allow me, in turn, to grow personally, professionally and creatively.
I am a full stack developer, I am an artist and creative, I am the right person for the development of the application you need.</p>  
                </div>
              </div>
          </div>
        </div>
      );
    };
    
