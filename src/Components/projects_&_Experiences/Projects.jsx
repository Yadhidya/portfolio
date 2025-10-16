import { useState, useRef } from "react";
import work_wagon from "../images/work_wagon.png";
import Nike from "../images/Nike.png";
import Face from "../images/face_detcetion.png";
import pg from "../images/pg.png";
import tourist from "../images/Smart-Security.png";
import developer from "../images/developer.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    img: work_wagon,
    name: "Work Wagon",
    desc: "A web platform connecting job seekers and local shops. Includes real-time job updates and transparent status tracking.",
    langs: "HTML , CSS , JavaScript , PHP",
    link: "https://github.com/Yadhidya/Work-Wagon",
  },
  {
    img: tourist,
    name: "Smart Tourist Security Management",
    desc: "Prototype developed for Smart India Hackathon — a smart safety monitoring and incident response system for tourists using AI-based anomaly detection, Blockchain, and Geo-fencing technologies",
    langs: "React , Tailwind CSS , AI/ML , Blockchain",
    link: "https://github.com/Yadhidya/Smart-tourist-security-management",
  },
  {
    img: developer,
    name: "Developer Portfolio Template",
    desc: "A clean, responsive, and customizable developer portfolio built with React and Tailwind CSS featuring project showcase, skills, and contact form.",
    langs: "React , Tailwind CSS",
    link: "https://github.com/Yadhidya/Developer-Portfolio-Template",
  },
  {
    img: Face,
    name: "Face Security Management",
    desc: "Facial recognition-based security management system for secure and authorized access.",
    langs: "C# , OpenCV , EmguCV , .NET",
    link: "https://github.com/Yadhidya/Face-Face-Detection-Security-System",
  },
  {
    img: pg,
    name: "PG-Booking Dashboard",
    desc: "An interactive dashboard to manage PG bookings, tenants, and payments efficiently.",
    langs: "React , Tailwind CSS",
    link: "https://github.com/Yadhidya/pg-dashboard",
  },
  {
    img: Nike,
    name: "Nike Landing Page Clone",
    desc: "A modern clone of the Nike landing page with responsive layout and animations.",
    langs: "React , Tailwind CSS",
    link: "https://github.com/Yadhidya/Nike-landing-page-clone",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef(null);

  const handleToggle = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(3);
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    }
  };

  return (
    <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-10 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="group w-full max-w-sm border border-gray-700 bg-zinc-900 p-5 rounded-xl shadow-lg transform transition duration-300 hover:border-indigo-700 hover:scale-105 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <img
                src={project.img}
                alt={`${project.name} preview`}
                className="w-full h-40 object-cover rounded-md group-hover:opacity-90 transition duration-300"
              />
              <p className="text-lg font-semibold mt-4 text-indigo-400 group-hover:text-indigo-600 transition duration-300">
                {project.name}
              </p>
              <p className="text-sm text-gray-300 mb-2">{project.desc}</p>
              <p className="text-sm text-gray-400 italic">{project.langs}</p>
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                <FaGithub />
                View Code
              </button>
            </a>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-8 text-center">
          <button
            onClick={handleToggle}
            className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded transition"
          >
            {visibleCount >= projects.length ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
