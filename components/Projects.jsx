'use client';
import { useState } from 'react';
import Project from '@/components/Project';
import Modal from '@/components/Modal';

const projects = [
  {
    title: "FOLIO",
    src: "car_app.png",
    color: "#000000",
    link:"https://booksshop15487.000webhostapp.com/home.php",
    stack:'Php,Html,Css,JavaScript, Mysql'
  },
  {
    title: "MIRAI",
    src: "car_app.png",
    color: "#000000",
    link:"https://ecommerceshop20145.000webhostapp.com/home.php",
    stack:'Php,Html,Css,JavaScript, Mysql'
  },
  {
    title: "OnlineExam",
    src: "car_app.png",
    color: "#000000",
    link:"/onlineExam",
    stack:'Php,jQuery,Bootstrap, Html,Css,JavaScript, Mysql'
  },
  {
    title: "Roadio",
    src: "car_app.png",
    color: "#000000",
    link:"https://car-rent-gbav.vercel.app/",
    stack:'React,NextJs, TypeScript, tailwindCss'
  },
  {
    title: "Bodyscape",
    src: "gym_app.png",
    color: "#8C8C8C",
    link:"https://gym-app2-sandy.vercel.app/",
    stack:'ReactJs, tailwindCss,RapidAPI '
  },
  {
    title: "Finch",
    src: "bank_app.png",
    color: "#EFE8D3",
    link:"https://bank-app-flame-delta.vercel.app/",
    stack:'ReactJs, tailwindCss'
  },
  {
    title: "PromptGenuis",
    src: "prompt_app.png",
    color: "#706D63",
    link:"https://promt-genuiss-fawn.vercel.app/",
    stack:'ReactJs, tailwindCss'
  },
  {
    title: "CloudSimu",
    src: "prompt_app.png",
    color: "#706D63",
    link:"/cloudSimu",
    stack:'Java, JavaFX, MySql'
  }
]

 function Projects() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <section id='project' className="mb-28">
    <div className='font-semibold  px-5 pb-12 text-7xl'>Projects</div>
    <div className="">
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} link={project.link} stack={project.stack} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </section>
  )
}

export default Projects