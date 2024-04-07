"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <section>
     <nav className='display:inlin absolute flex flex-row justify-between   w-full mb-16 pt-6 '>
        
        <Link href='/' className='nav_link flex gap-2 ml-11 flex-center'>
          <p   className='nav_link nav_logo inline  '>BENYAHDOU MED</p>
         </Link>
         
         <div className='display:inline  sm:flex hidden'>
          <div className='display:inline flex mr-11  gap-3 md:gap-5'>
            
          <motion.div 
          initial={{ scale: 1, y: 0 }} // Initial scale and y position
          whileHover={{ }} // Scale and y position on hover
          transition={{  }} // Transition duration
          >
            
             <Link href="#home" className='nav_link'>
               Home
            </Link>
            </motion.div>
            <Link className='nav_link' href="#about">
              About
             </Link>
             <div className="">
        <Link className='nav_link gap-4 mr-4' href="#project">
              Project
            </Link>
    <Link className='nav_link_button  text-white rounded-full px-3 py-2' href="#contact">
              Contact
            </Link>
            </div>
          </div>
    </div>
        </nav>
    
        
   
    </section>
  )
}

export default Navbar