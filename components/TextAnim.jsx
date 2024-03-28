'use client'
import Image from 'next/image'
import { gsap } from 'gsap';
import { useEffect,useRef } from 'react';

export default function TextAnim() {
  return (
    
      
    <div className="about2_container ">
        <div className=" mx-9 pt-5 gap-3 flex flex-row">
           <h2 className='font-bold text_colored text-5xl w-full text-white'>About Me </h2>
           <div className="flex flex-col">
            
           </div>
           <h2 className='pt-4 text-white text-2xl'> My name is Benyahdou Mohammed, I’m from Algeria and I have a Bachelor degree in Computer Science.
           I'm a full-stack developer who loves to build beautiful and meaningful web sites.
                    
          </h2>
        </div>
        <ul id="cards">
            <li className="card" id="card1">
                <div className=" w-full card-body">
                 <div className="  w-full pt-5 gap-3 flex flex-row">
                    <h2 className='font-bold text_colored text-5xl w-full text-white'>Education & Certificate </h2>
                    <div className="pr-32 pt-16 w-full flex-col">
                        <div className="pb-12">
                        <div className=' font-bold text-white text-2xl'> Master In Computer science</div>
                        <div className=' font-light text-white text-xl'> 2021-2023</div>
                        <div className=' font-light text-white text-xl'> Skilled in conducting qualitative user research, creating aesthetic web layouts, and visual design in general.
                        </div>
                        </div>
                        <div className="pb-12">
                        <div className=' font-bold text-white text-2xl'> Bachelor of Science in Computer Science</div>
                        <div className=' font-light text-white text-xl'> 2018-2021</div>
                        <div className=' font-light text-white text-xl'> Skilled in conducting qualitative user research, creating aesthetic web layouts, and visual design in general.
                        </div>
                        </div>
                        <div className="">
                        <div className=' font-bold text-white text-2xl'> Bachelor of Science in Computer Science</div>
                        <div className=' font-light text-white text-xl'> 2018-2021</div>
                        <div className=' font-light text-white text-xl'> Skilled in conducting qualitative user research, creating aesthetic web layouts, and visual design in general.
                        </div>
                        </div>
                    </div>
                   
                    </div>
                </div>
            </li>
            <li className="card" id="card2">
                <div className="card-body">
                <div className="  w-full pt-5 gap-3 flex flex-row">
                    <h2 className='font-bold text_colored text-5xl w-full text-white'>Tools & Technologies </h2>
                    <div className="pr-32 pt-16 w-full flex-col">
                        <div className="pb-12">
                        <div className=' font-bold text-white text-2xl'> Front-End Development</div>
                        
                        <div className=' font-light text-white text-xl'> Next js ,React js, Redux,tailwind, Gsap, Framer Motion, styled-components, SCSS, Figma, adobe XD</div>
                        </div>
                        <div className="pb-8">
                        <div className=' font-bold text-white text-2xl'> Back-End Development</div>
                        
                        <div className=' font-light text-white text-xl'> Node js, Express js, MongoDB, SQL, MySQL, GraphQL</div>
                        </div>
                        <div className="pb-8">
                        <div className=' font-bold text-white text-2xl'> Additionnal Tech Stack</div>
                        
                        <div className=' font-light text-white text-xl'> C, Python, java, C++, PHP, AdobeTools(Photoshop,Ulistrature) </div>
                        </div>
                        <div className="pb-8">
                        <div className=' font-bold text-white text-2xl'> Version Control </div>
                        
                        <div className=' font-light text-white text-xl'> Git, GitHub </div>
                        </div>
                        <div className="pb-8">
                        <div className=' font-bold text-white text-2xl'> Project Management Tools </div>
                        
                        <div className=' font-light text-white text-xl'> Jira, Bitbucket </div>
                        </div>
                        
                    </div>
                   
                    </div>
                </div>
            </li>
            <li className="card" id="card3">
                <div className="card-body">
                <div className="  w-full pt-5 gap-3 flex flex-row">
                    <h2 className='font-bold text_colored text-5xl w-full text-white'> PRINCIPLES & VALUES</h2>
                    <div className="pr-22 pt-16 w-full flex-col">
                        <div className="pb-12">
                        <div className=' font-bold text-white text-2xl'> 1. Always working with accuracy and transparency.</div>
                        
                        </div>
                        <div className="pb-12">
                        <div className=' font-bold text-white text-2xl'> 2.Well-made website require effort and comprehension.</div>
                            
                        </div>
                        <div className="pb-12">
                        <div className=' font-bold text-white text-2xl'> 3.Focus is the key, every minute is important.</div>
                            
                        </div>
                        
                    </div>
                   
                    </div>
                </div>
            </li>
            <li className="card" id="card4">
                <div className="card-body">
                    <h2>Card 4</h2>
                </div>
            </li>
        </ul>
    </div>

   
  )
}