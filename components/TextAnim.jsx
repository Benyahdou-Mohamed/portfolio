'use client'
import Image from 'next/image'
import { gsap } from 'gsap';
import { useEffect,useRef } from 'react';

export default function TextAnim() {
  return (
    
      
    <div className="about2_container ">
        
      
        <ul id="cards">
            
            <li className="card" id="card1">
                <div className="card-body">
                <div className="  w-full pt-5 gap-3 flex flex-row">
                    <h2 className='font-bold  text-5xl w-full text-white'>Tools & Technologies </h2>
                    <div className="pr-32 pt-16 w-full flex-col">
                        <div className="pb-12">
                        <div className=' font-bold text-white text-2xl'> Front-End Development</div>
                        
                        <div className=' font-light text-white text-xl'> Next js ,React js, Redux,tailwind, Framer Motion, SCSS, Figma, adobe XD</div>
                        </div>
                        <div className="pb-8">
                        <div className=' font-bold text-white text-2xl'> Back-End Development</div>
                        
                        <div className=' font-light text-white text-xl'> Node js, Express js, MongoDB, SQL, MySQL, GraphQL</div>
                        </div>
                        <div className="pb-8">
                        <div className=' font-bold text-white text-2xl'> Additionnal Tech Stack</div>
                        
                        <div className=' font-light text-white text-xl'> C, Python, java, AdobeTools(Photoshop,Ulistrature) </div>
                        </div>
                        <div className="pb-8">
                        <div className=' font-bold text-white text-2xl'> Version Control </div>
                        
                        <div className=' font-light text-white text-xl'> Git, GitHub </div>
                        </div>
                        
                        
                    </div>
                   
                    </div>
                </div>
            </li>
            <li className="card" id="card2">
                <div className="card-body">
                <div className="  w-full pt-5 gap-3 flex flex-row">
                    <h2 className='font-bold text-5xl w-full text-white'> PRINCIPLES & VALUES</h2>
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
            <li className="card" id="card3">
                <div className="card-body">
                <div className="  w-full pt-5 gap-3 flex flex-row">
                    <h2 className='font-bold text-5xl w-full text-white'> PRINCIPLES & VALUES</h2>
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
            
        </ul>
    </div>

   
  )
}