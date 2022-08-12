import React from 'react'

export const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#363636] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/935ea249-8f46-4556-908d-8e9bf2684702" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-6xl font-bold inline text-white'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - mariana.stocco@outlook.com</p>
                </div>
                <input required className='bg-[#dee3f3] p-2' type="text" placeholder='Name' name='name' />
                <input required className='my-4 p-2 bg-[#dee3f3]' type="email" placeholder='Email' name='email' />
                <textarea required minLength={10}className='bg-[#dee3f3] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#04fb04] hover:border-[#04fb04] hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
      )
}
