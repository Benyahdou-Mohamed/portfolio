"use client"
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from "next/link";
export default function Footer() {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect( () => {
        scrollYProgress.on("change", e => {
            paths.current.forEach( (path, i) => {
                path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
            })
        })
    }, [])

    return (
        <div ref={container}>
            <svg className="w-full mb-40" viewBox="0 0 250 90">
                <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
                <text className="text-[6px] uppercase" style={{fill: "black"}}>
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Benyahdou Mohammed Portfolio</textPath>
                        })
                    }
                </text>
            </svg>
            <Logos scrollProgress={scrollYProgress}/>
        </div>
    )
}

const Logos = ({scrollProgress}) => {
    const y = useTransform(scrollProgress, [0, 1], [-700, 0])
    return (
        <div className="h-[250px] flex flex-row gap-96 justify-center  bg-black overflow-hidden">
            <motion.div style={{y}} className="h-full pl-4 flex-center bg-black flex flex-col  gap-1 ">
                 
                 <div className='font-semibold  pt-5 mb-3 text-xl text-white border-b-2'>NAVIGATION</div>
                 <Link href="/Home" className='footer_link'>Home</Link>
                 <Link href="/about" className='footer_link'>About</Link>
                 <Link href="/project" className='footer_link'>Project</Link>
                 <Link href="/contact" className='footer_link'>Contact</Link>
                 

            </motion.div>
            
            <motion.div style={{y}} className="h-full pl-4 flex-center bg-black flex flex-col gap-1   ">
                 
                 <div className='font-semibold  pt-5 mb-3 text-xl text-white border-b-2'>SOCIALS</div>
                 <Link href='/https://www.facebook.com/benyahdou.mohamed.1/' className='footer_link'>Github</Link>
                 <Link href='/https://www.facebook.com/benyahdou.mohamed.1/' className='footer_link'>Linkedin</Link>
                 <Link href='/https://www.facebook.com/benyahdou.mohamed.1/' className='footer_link'>Facebook</Link>
                 <Link href='/https://www.facebook.com/benyahdou.mohamed.1/' className='footer_link'>Instagram</Link>
                 

            </motion.div>
            <motion.div style={{y}} className="h-full pl-4 flex-center bg-black flex flex-col   ">
                 
                 <div className='font-semibold  pt-5  text-2xl text-white'>LOCAL TIME</div>
                 <div className='font-light   text-xl text-white'>10:37 AM GMT+11</div>
                 <div className='font-semibold  pt-5  text-5xl text-white'>© 2024</div>
                 <div className='font-semibold   text-5xl text-white'>BENYAHDOU MED</div>

            </motion.div>
        </div>
    )
}