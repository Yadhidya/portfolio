import yadhidya from './images/yadhidya_profile.png'
import {motion,AnimatePresence} from "framer-motion";
import { useState,useEffect } from 'react';
import { FaFileAlt } from "react-icons/fa";
const AboutMe = () => {
  const roles=[
    "Competitive Programmer",
    "Frontend Developer",
    "Video Editor"
  ];
  const [index,setindex]=useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setindex((prev) =>(prev+1) % roles.length);
    },2000);
    return () =>clearInterval(interval)
  },[]);
  const viewresume=()=>{
    
  window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  }
  return (
    <section id="about_me" className="w-full h-[800px] flex  md:flex-row   max-sm:flex-col-reverse max-sm:mt-10 justify-between items-center  px-8 py-8  relative">
     
      <div className="absolute -top-10 -left-20 w-[400px] h-[400px]   rounded-full opacity-20 blur-3xl z-0  md:w-1/2 text-center md:text-left mt-10 md:mt-0">
      </div>
       <motion.div
       className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 z-10" 
       initial={{opacity:0,x:-100}}
       whileInView={{opacity: 1,x:0}}
       transition={{duration:0.8}}
       viewport={{once:true}}
       >
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>Hi, I'm <br/> Yadhidya 👋</h1>
        <div className='flex items-center gap-2 flex-wrap'>
         <span className='sm:text-xl md:text-2xl lg:text-3xl'>
            I am a </span>
        <AnimatePresence mode="wait">
          <motion.h3
          key={roles[index]}
          initial={{opacity:0,y:10}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0,y:-10}}
          transition={{duration:0.5}}
          className='text-2xl sm:text-3xl font-medium text-indigo-400'
          >{roles[index]}

          </motion.h3>
        </AnimatePresence>
        </div>
        <br/>
        <p className='text-xl sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-md text-gray-300'>
          I'm a passionate Frontend Developer dedicated to crafting responsive, intuitive, and visually engaging web experiences. 
          This portfolio is a reflection of my skills, creativity, and journey — showcasing the projects I’ve built, the technologies I've explored,
           and the continuous growth I strive for in the world of web development . 
        </p>
       
       <button onClick={viewresume} className="lg:text-2xl md:text-xl sm:text-lg text-white border border-indigo-700 shadow-xl my-5 px-5 py-3 rounded-2xl bg-indigo-900 hover:bg-indigo-700 hover:scale-105 hover:shadow-indigo-500/50 transition duration-300">
          <FaFileAlt className="inline-block mr-2" />
          View Resume
        </button>
      </motion.div>
        

      <motion.div className='md:w-1/2 mt-10 md:mt-0 flex justify-center'
      initial={{opacity:0,x:100}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:0.8}}
      viewport={{once:true}}>
         <img  src={yadhidya} alt="yadhidya"  className='w-[400px] h-[400px]  object-cover rounded-full  shadow-xl  '/>
      </motion.div>
      

    </section>
  )
}

export default AboutMe
