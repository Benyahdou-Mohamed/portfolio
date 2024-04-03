'use client';
import { useState } from 'react';
import Project from '@/components/Project';
import Modal from '@/components/Modal';

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63"
  }
]

 function Projects() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className="mb-28">
    <div className='font-semibold  px-5 pb-12 text-7xl'>Projects</div>
    <div className="">
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}

export default Projects