import skilhacc from "../images/certficates/skillhacc.png";
import cisco from "../images/certficates/cisco.png";
import Springboard from "../images/certficates/springboard.avif";
import { FaFileAlt } from "react-icons/fa";
const certfications = [
  {
    img: skilhacc,
    platform: "Skillhacc",
    name: "AI Program",
    desc: "Completed a 2-month program focused on Artificial Intelligence fundamentals, hands-on machine learning concepts, real-world applications, and algorithms",
    domain: "Artificial Intelligence",
    link:"",
  },
  {
    img: cisco,
    platform: "Cisco",
    name: "CCNA: Introduction to Networks",
    desc: "Learned the fundamentals of networking including IP addressing, Ethernet, OSI and TCP/IP models, router and switch configuration using Cisco Packet Tracer.",
    domain: "Networking",
    link:"/certifcate_links/CCNA1.pdf"
  },
  {
    img: cisco,
    platform: "Cisco",
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    desc: "Gained hands-on knowledge in switching and routing protocols along with configuration and troubleshooting.",
    domain: "Networking",
    link:"/certifcate_links/CCNA2.pdf"
  },
  {
    img: Springboard,
    platform: "Infosys  Springboard",
    name: "General Networking and Security Course",
    desc: "Covered basic to intermediate networking concepts along with an introduction to security practices.",
    domain: "Networking & Security",
    link:"/certifcate_links/general-networking.pdf"
  },
  {
    img: Springboard,
    platform: "Infosys Springboard",
    name: "AWS Solutions Architect Associate 2022: Security & Data Privacy",
    desc: "Explored key AWS services with a focus on IAM, encryption, and data privacy best practices.",
    domain: "Cloud Computing & Security",
    link:"/certifcate_links/aws.pdf"
  },
  {
    img: Springboard,
    platform: "Infosys Springboard",
    name: "Networking Fundamentals",
    desc: "Understood core networking topics including DNS, DHCP, IP addressing, subnetting, and basic network troubleshooting.",
    domain: "Networking",
    link:"/certifcate_links/networking.pdf"
  },
  {
    img: Springboard,
    platform: "Infosys Springboard",
    name: "Data Structures & Algorithms in Python: Sorting Algorithms",
    desc: "Implemented sorting algorithms such as Bubble Sort, Merge Sort, and Quick Sort using Python.",
    domain: "Programming & DSA",
    link:"/certifcate_links/DSA.pdf"
  }
];

const Certifications = () => {
  return (
    <div className="w-full  flex  flex-wrap  justify-center  gap-10  ">
       { certfications.map((certfication,index)=> (

          <div key={index} className="group  w-full sm:w-[48%] md:w-[31%]  border border-gray-700 bg-zinc-900  p-4 rounded-lg shadow-lg  transform transition duration-300 hover:border-indigo-700 hover:scale-105 hover:shadow-xl">

              <img src={certfication.img} 
              alt={`${certfication.name} preview`}
              className="w-full h-40 object-cover rounded-md group-hover:opacity-90 transition duration-300"/>
              <p className="text-xl font-semibold mt-4 mb-2 text-indigo-400 group-hover:text-indigo-700 transition duration-300">{certfication.platform}</p>
              <p className="text-xl text-gray-300 mb-2">{certfication.name}</p>
              <p className="text-lg text-gray-300 mb-2">{certfication.desc}</p>
              <p className="text-lg text-gray-400 italic">{certfication.domain}</p>
              <a href={certfication.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"> 
                        <FaFileAlt className="inline-block mr-2" />
                        View Certificate
                      </button>
              </a>
         </div>

        )) }
      </div>
  )
}

export default Certifications
