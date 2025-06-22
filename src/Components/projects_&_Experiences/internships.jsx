import deftech from "../images/deftech.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

const Internships = () => {
  const internships=[
     {
    img: deftech,
    name: "AI ML Deftech Pvt Ltd",
    desc: "Worked as a C# and Unity Developer Intern. Built Windows applications using C# and developed 3D weapon simulation modules in Unity. ",
    duration: "Nov 2023 – May 2024.",
    link:"/Intership_links/deftech.jpg"
  },
  ]
  return (
     <div className="w-full  flex  flex-wrap  justify-center  gap-10  ">
       { internships.map((internship,index)=> (

          <div key={index} className="group  w-full sm:w-[48%] md:w-[31%]  border border-gray-700 bg-zinc-900  p-4 rounded-lg shadow-lg  transform transition duration-300 hover:border-indigo-700 hover:scale-105 hover:shadow-xl">

              <img src={internship.img} 
              alt={`${internship.name} preview`}
              className="w-full h-40 object-cover rounded-md group-hover:opacity-90 transition duration-300"/>
              <p className="text-xl font-semibold mt-4 mb-2 text-indigo-400 group-hover:text-indigo-700 transition duration-300">{internship.name}</p>
              <p className="text-lg text-gray-300 mb-2">{internship.desc}</p>
              <p className="text-lg text-gray-400 italic">{internship.duration}</p>
              <a href={internship.link} target="_blank" rel="noopener noreferrer">
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"> 
                                      <FaExternalLinkAlt className="inline-block mr-2" />
                                      View Credentials
                              </button>
                            </a>
         </div>

        )) }
      </div>
  )
}

export default Internships
