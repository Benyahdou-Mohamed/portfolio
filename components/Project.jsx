"use client";
import React, { useRef, useEffect,useState } from 'react';

import gsap from 'gsap'; // Assuming GSAP is installed

const Project = () => {
   
//     const projects = typeof window !== 'undefined' ? document.querySelector(".projects") : null;
//     const preview  = typeof window !== 'undefined' ? document.querySelector(".preview") : null;
//     const previewImg   = typeof window !== 'undefined' ? document.querySelector(".preview-img") : null;
    

// let isInside = false;
// const bgPositions = {
//     p1:"0 0",
//     p2: "O 25%",
//     p3:"0 50%",
//     p4:"0 75%",
//     p5:"O 100%",
// }
// const moveStuff = (e) => {
//     const mouseInside = isMouseInsideContainer (e);
//     if (mouseInside != isInside){
//         isInside = mouseInside;
//     if (isInside) {
//     gsap. to(preview, 0.3, {scale: 1,
//     }) 
//     } else {
//     gsap. to(preview, 0.3, {
//     scale: 0});
// }
// }
// }

// const moveProject = (e) =>{
//     const previewRect = preview.getBoundingClientRect();
//     const offsetX = previewRect.width / 2;
//     const offsetY = previewRect.height / 2;
//     preview.style. left = e.pageX - offsetX + "px";
//     preview.style.top = e.pagey - offsetY + "px";
// }
// const moveProjectImg = (project) => {
//     const projectid = project.id;
//     gsap.to(previewImg, 0.4, {
//     backgroundPosition: bgPositions[projectID] || "0 0",
// });
//     }
// const isMouseInsideContainer = (e) => {
//         const containerRect = projects.getBoundingClientRect();
//         return (
//         e-pageX >= containerRect. left &&
//         e-pagex <= containerRect. right &&
//         e-pageY >= containerRect.top &&
//         e-pagey <= containerRect.bottom
//         )}
// window. addEventListener ("mousemove", moveStuff);
// Array. from(projects.children).forEach((project) => {
//         project.addEventListener ("mousemove", moveProject);
//         project.addEventListener ("mousemove", moveProjectImg.bind(null,project)) })
const projectsRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);

  const [isInside, setIsInside] = useState(false);

  const bgPositions = {
    p1: "0 0",
    p2: "0 25%",
    p3: "0 50%",
    p4: "0 75%",
    p5: "0 100%",
  };

  useEffect(() => {
    const projects = projectsRef.current;
    const preview = previewRef.current;
    const previewImg = previewImgRef.current;

    const moveStuff = (e) => {
      const mouseInside = isMouseInsideContainer(e);
      if (mouseInside !== isInside) {
        setIsInside(mouseInside);
        if (mouseInside) {
          gsap.to(preview, 0.3, { scale: 1 });
        } else {
          gsap.to(preview, 0.3, { scale: 0 });
        }
      }
    };

    const moveProject = (e) => {
      const previewRect = preview.getBoundingClientRect();
      const offsetX = previewRect.width / 2;
      const offsetY = previewRect.height / 2;
      preview.style.left = e.pageX - offsetX + "px";
      preview.style.top = e.pageY - offsetY + "px";
    };

    const moveProjectImg = (project) => {
      const projectId = project.id;
      gsap.to(previewImg, 0.4, {
        backgroundPosition: bgPositions[projectId] || "0 0",
      });
    };

    const isMouseInsideContainer = (e) => {
      const containerRect = projects.getBoundingClientRect();
      return (
        e.pageX >= containerRect.left &&
        e.pageX <= containerRect.right &&
        e.pageY >= containerRect.top &&
        e.pageY <= containerRect.bottom
      );
    };

    window.addEventListener("mousemove", moveStuff);

    Array.from(projects.children).forEach((project) => {
      project.addEventListener("mousemove", moveProject);
      project.addEventListener("mousemove", () => moveProjectImg(project));
    });

    return () => {
      window.removeEventListener("mousemove", moveStuff);
      Array.from(projects.children).forEach((project) => {
        project.removeEventListener("mousemove", moveProject);
        project.removeEventListener("mousemove", () => moveProjectImg(project));
      });
    };
  }, []);

  const isMouseInsideContainer = (e) => {
    if (projectsRef.current) {
      const containerRect = projectsRef.current.getBoundingClientRect();
      return (
        e.pageX >= containerRect.left &&
        e.pageX <= containerRect.right &&
        e.pageY >= containerRect.top &&
        e.pageY <= containerRect.bottom
      );
    }
    return false; // Default to false if element not found
  };
  return (
    <div className='flex text-center align-middle'>
        <div ref={previewRef} className="preview">
<div ref={previewImgRef} className="preview-img"></div>
</div>
<div className="container">
<div ref={projectsRef} className="projects">
<div className="project" id="header">
<div className="client">
<p>Project</p>
</div>
<div className="location">
<p>Location</p>
</div>
<div className="service">
<p>Category</p>
</div>
<div className="year">
<p>Year</p>


</div>

</div>
<div className="project" id="p1">
<div className="client">
<p>Project</p>
</div>
<div className="location">
<p>Location</p>
</div>
<div className="service">
<p>Category</p>
</div>
<div className="year">
<p>Year</p>


</div>

</div>

</div>

</div>
        
        </div>
  )
}

export default Project