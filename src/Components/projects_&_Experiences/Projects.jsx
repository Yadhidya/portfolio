import work_wagon from "../images/work_wagon.png";
import Nike from "../images/Nike.png";
import Face from "../images/face_detcetion.png"
import pg from "../images/pg.png";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects=[
    {
      img:work_wagon,
      name:"Work wagon",
      desc:"A web platform connecting job seekers and local shops. Includes real-time job updates and transparent status tracking.",
       langs:"HTML , CSS , JavaScript , PHP",
       link:"https://github.com/Yadhidya/Work-Wagon"
    },

    {
      img:Face,
       name:"Face security Management",
      desc:"Facial recognition-based security management system for secure and authorized access.",
      langs:"C# , OpenCV , EmguCV , .NET ",
      link:"https://github.com/Yadhidya/Face-Face-Detection-Security-System"
    }
    ,
    
    {
      img:pg,
       name:"PG-Booking dashboard",
      desc:"An interactive dashboard to manage PG bookings, tenants, and payments efficiently.",
      langs:"React , Tailwind CSS",
      link:"https://github.com/Yadhidya/pg-dashboard"
    },

    {
      img:Nike,
       name:"Nike landing page clone",
      desc:"A modern clone of the Nike landing page with responsive layout and animations.",
      langs:"React , Tailwind CSS",
      link:"https://github.com/Yadhidya/Nike-landing-page-clone"
    }

  ]
  return (
      <div className="w-full  flex  flex-wrap  justify-center  gap-10  ">
       { projects.map((project,index)=> (

          <div key={index} className="group  w-full sm:w-[48%] md:w-[31%]  border border-gray-700 bg-zinc-900  p-4 rounded-lg shadow-lg  transform transition duration-300 hover:border-indigo-700 hover:scale-105 hover:shadow-xl">

              <img src={project.img} 
              alt={`${project.name} preview`}
              className="w-full h-40 object-cover rounded-md group-hover:opacity-90 transition duration-300"/>
              <p className="text-xl font-semibold mt-4 mb-2 text-indigo-400 group-hover:text-indigo-700 transition duration-300">{project.name}</p>
              <p className="text-lg text-gray-300 mb-2">{project.desc}</p>
              <p className="text-lg text-gray-400 italic">{project.langs}</p>
               <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"> 
                              <FaGithub className="inline-block mr-2" />
                                View Code
                            </button>
                 </a>
         </div>

        )) }
      </div>
  )
}

export default Projects
