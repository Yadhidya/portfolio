import deftech from "../images/deftech.jpg";
import codeunia from "../images/CodeUnia.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const internships = [
  {
    img: deftech,
    name: "AI ML Deftech Pvt Ltd",
    desc: "Worked as a C# and Unity Developer Intern. Built Windows applications using C# and developed 3D weapon simulation modules in Unity.",
    duration: "Nov 2023 – May 2024.",
    link: "/Intership_links/deftech.jpg",
  },
  {
    img: codeunia,
    name: "Codeunia",
    desc: "Worked as a Frontend Developer Intern. Built a Developer Portfolio Template using React.js and Tailwind CSS, helping 50+ developers showcase their skills and projects with an intuitive interface.",
    duration: "Aug 2025",
    link: "/Intership_links/codeunia_img.png",
  },
];

const Internships = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="group w-full max-w-sm border border-gray-700 bg-zinc-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform transition duration-300 hover:border-indigo-700 hover:scale-105 hover:shadow-xl"
          >
            <div>
              <img
                src={internship.img}
                alt={`${internship.name} preview`}
                className="w-full h-40 object-cover rounded-md group-hover:opacity-90 transition duration-300"
              />
              <p className="text-lg font-semibold mt-4 text-indigo-400 group-hover:text-indigo-600 transition duration-300">
                {internship.name}
              </p>
              <p className="text-sm text-gray-300 mb-2">{internship.desc}</p>
              <p className="text-sm text-gray-400 italic">{internship.duration}</p>
            </div>

            {internship.link && (
              <a
                href={`${import.meta.env.BASE_URL}${internship.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  <FaExternalLinkAlt />
                  View Credentials
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
