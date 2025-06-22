import codeathon from "../images/awards/codeathon.png"
import comsci from "../images/awards/comsci.jpg"
import btech from "../images/awards/btech_wallah.png"
import Aincat from "../images/awards/AINCAT.png"
import { FaFileAlt } from 'react-icons/fa';

const Events = () => {
  const events = [
    {
      img: codeathon,
      name: "Codeathon February Edition",
      organized: "Veltech Institutions",
      prize: "2nd Place",
      desc: "Secured 2nd place in an inter-college coding competition among 500+ participants in february edition.",
      memento: "/awards_links/codeathon.jpg"
    },
    {
      img: comsci,
      name: "Debugging Contest - COMSIC'2K25",
      organized: "SRM Ramapuram",
      prize: "Winner",
      desc: "Solved all problems perfectly in the debugging round ,found errors in the provided code and secured 1st place.",
      memento: "/awards_links/debugging.jpg"
    },
    {
      img: comsci,
      name: "Technical Quiz - COMSIC'2K25",
      organized: "SRM Ramapuram",
      prize: "Winner",
      desc: "Won the technical quiz competition based on  Google forms, Coding by scoring highest among 40+ members.",
      memento: "/awards_links/technicalQuiz.jpg"
    },
     {
    img: Aincat,
    name: "AINCAT – All India Naukri Campus Test",
    organized: "Naukri Campus",
    prize: "Participation Certificate",
    desc: "Recognized in the nationwide AINCAT exam by Naukri Campus for showcasing top-tier talent across India.",
    memento: "https://www.naukri.com/campus/certificates/naukri_campus_ai_ncat_participation_may_2025/v0/683a0c30892c1f3133aaedb8"
  },
  {
    img: btech,
    name: "Web Wizardry 3.0",
    organized: "Btech Walleh (on Unstop)",
    prize: "Participation Certificate",
    desc: "Participated in an engaging web development challenge  and solved MCQ's based on web that pushed me to apply and enhance my frontend skills.",
    memento: "https://unstop.com/certificate-preview/fa58fc31-e7e8-4381-8260-e771103b43ce?utm_campaign=site-emails"
  }
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-8 py-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-full sm:w-[45%] md:w-[30%] border border-gray-700 bg-zinc-900 p-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-4 mb-3">
            <img
              src={event.img}
              alt={event.name}
              className="w-[70px] h-[70px] object-contain rounded"
            />
            <h3 className="text-xl font-bold text-indigo-400">{event.name}</h3>
          </div>

          <p className="text-gray-300 text-sm mb-1">{event.organized}</p>
          <p className="text-gray-400 italic text-sm mb-2">{event.prize}</p>
          <p className="text-gray-300 text-sm mb-3">{event.desc}</p>

          {event.memento && (
            <a href={event.memento} target="_blank" rel="noopener noreferrer">
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                <FaFileAlt className="inline-block mr-2" />
                View Memento
              </button>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Events;
