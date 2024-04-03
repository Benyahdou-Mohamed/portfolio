import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const About = () => {
  return (
    <div className='mx-12'>
        <div className="flex justify-center items-center text-[70px] font-bold mb-28 ">
                ABOUT ME
            </div>
        <div className="flex flex-row mx-12 mb-40">
            <div className="w-full ">
                Hello
            </div>
            <div className="w-full">
                <div className='font-bold text-[1.8rem]'>
                A brief intro, who am I?

                </div>
                <div className="flex text-[1.2rem] mb-5">
                My name is Benyahdou, and I'm a Frontend Developer.😎based in Algeria.📍<br/> My passion is to create and develop a clean UI/UX for my users.
            My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.📸
            
                </div>
                
                <div className=" flex flex-col sm:flex-row">
                <Link className='flex text-white cv_link flex-row  rounded-full bg-black  px-3 py-2 mx-2 ' href="/home">Contact Me Now
                     
                     <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 " width={20} height={20} viewBox="0 0 448 512"><path fill='#FFF' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>

                </Link>
                <Link className='cv_link  flex flex-row  rounded-full px-3 py-2' href="/home">Download CV
                <svg className="mx-2  " xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512"><path fill='#000000c4' d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/></svg>

                 </Link>
                
                
                </div>
            </div>
            
        </div>

        <div className="flex flex-col sm:flex-row mx-12 mb-40">
            <div className="pr-8">
                <div className='font-bold text-[2rem]'>
                my digital tool box.

                </div>
                <div className="flex text-[1.1rem]">
                These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons.
                </div>
            </div>
            <div className="w-full items-center justify-start ">
                
                <div className="flex flex-col mx-12 text-[2rem] text-sky-800  ">
                    <div className="font-bold ">NextJS</div>
                    <div className="font-bold ">ReactJS</div>
                    <div className="font-bold">NodeJS</div>
                    <div className="font-bold ">MongoDB/ MYSQL</div>
                    <div className="font-bold">Framer Motion</div>
                    <div className="font-bold">HTML</div>
                    <div className="font-bold">CSS</div>
                    <div className="font-bold">Tailwind</div>
                    <div className="font-bold">Figma</div>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About