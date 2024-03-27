'use client'
import Image from 'next/image'
import { gsap } from 'gsap';
import { useEffect,useRef } from 'react';

export default function TextAnim() {
  return (
    
      
    <div className="about2_container ">
        <div className=" mx-9 pt-5 gap-3 flex flex-row">
           <h2 className='text_colored text-5xl w-full text-white'>About Me </h2>
           <h2 className='pt-4 text-white text-2xl'> My name is Benyahdou Mohammed, I’m from Algeria and I have a Bachelor degree in Computer Science.
            I have started learning about web development in 2020 since then I gained experience in developing UserInterfaces and still looking forward to learn more and grow in this field.
          </h2>
        </div>
        <ul id="cards">
            <li className="card" id="card1">
                <div className="card-body">
                    card2
                </div>
            </li>
            <li className="card" id="card2">
                <div className="card-body">
                    <h2>Card 2</h2>
                </div>
            </li>
            <li className="card" id="card3">
                <div className="card-body">
                    <h2>Card 3</h2>
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