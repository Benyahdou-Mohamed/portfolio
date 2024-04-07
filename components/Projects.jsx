'use client';
import { useState } from 'react';
import Project from '@/components/Project';
import Modal from '@/components/Modal';

const projects = [
  {
    title: "Roadio",
    src: "car_app.png",
    color: "#000000",
    link:"https://promt-genuiss-fawn.vercel.app/",
    link:"https://car-rent-gbav.vercel.app/"
  },
  {
    title: "Bodyscape",
    src: "gym_app.png",
    color: "#8C8C8C",
    link:"https://gym-app2-sandy.vercel.app/"
  },
  {
    title: "Finch",
    src: "bank_app.png",
    color: "#EFE8D3",
    link:"https://bank-app-flame-delta.vercel.app/"
  },
  {
    title: "PromptGenuis",
    src: "prompt_app.png",
    color: "#706D63",
    link:"https://promt-genuiss-fawn.vercel.app/"
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
          return <Project index={index} title={project.title} link={project.link} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </section>
  )
}

export default Projects