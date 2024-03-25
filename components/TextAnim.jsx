'use client'
import Image from 'next/image'
import { gsap } from 'gsap';
import { useEffect,useRef } from 'react';

export default function TextAnim() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let direction = -1;


  useEffect( () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {

      scrollTrigger: {

        trigger: document.documentElement,

        scrub: 0.5,

        start: 0,

        end: window.innerHeight,

        onUpdate: e => direction = e.direction * -1

      },

      x: "-500px",

    })

    requestAnimationFrame(animate);

  }, [])


  const animate = () => {

    if(xPercent < -100){

      xPercent = 0;

    }

    else if(xPercent > 0){

      xPercent = -100;

    }

    gsap.set(firstText.current, {xPercent: xPercent})

    gsap.set(secondText.current, {xPercent: xPercent})

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;

  }
  return (
    <main >
      <Image 
        src="/images/background.jpg"
        fill={true}
        alt="background"
      />
      <div >
        <div ref={slider} >
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
    </main>
  )
}