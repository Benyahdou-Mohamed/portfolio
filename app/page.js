
import About from "@/components/About";

import Image from "next/image";

export default function Home() {
  return (
    <main className="hero_section">
      
      <div style={{ }} className="text-5xl md:text-8xl sm:text-8xl text-emerald-950 pt-32 ">
        HI THERE, IM <br/>BENYAHDOU MOHAMMED
        </div>
       

        <div style={{ fontSize: '20px' ,textShadow:"1 1 black"}} className=" text-shadow:_0_1px_0_rgb(0_0_0_/_40%) text-red text-shadow-lg  py-20  ">
        A freelance frontend developer & web designer propelling <br/> startup visions to reality.
        </div>
        
        <About/>
        <h1 >"Hi!</h1>
        <h1 style={{ fontSize: '100px', display:"inline" }}>Hi!</h1>
        <p>"Hi!</p>
        <h4 >"Hi!</h4>
        
    </main>
  );
}
