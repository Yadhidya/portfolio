import codeathon from "../images/awards/codeathon.png";
import comsci from "../images/awards/comsci.jpg";
import btech from "../images/awards/btech_wallah.png";
import Aincat from "../images/awards/AINCAT.png";
import { FaFileAlt } from 'react-icons/fa';

const Events = () => {
  const events = [
    {
      img: codeathon,
      name: "Codeathon February Edition",
      organized: "Veltech Institutions",
      prize: "2nd Place",
      desc: "Secured 2nd place in an inter-college coding competition among 500+ participants in February edition.",
      memento: "/awards_links/codeathon.jpg"
    },
    {
      img: comsci,
      name: "Debugging Contest - COMSIC'2K25",
      organized: "SRM Ramapuram",
      prize: "Winner",
      desc: "Solved all problems perfectly in the debugging round, found errors in the provided code and secured 1st place.",
      memento: "/awards_links/debugging.jpg"
    },
    {
      img: comsci,
      name: "Technical Quiz - COMSIC'2K25",
      organized: "SRM Ramapuram",
      prize: "Winner",
      desc: "Won the technical quiz competition based on Google Forms, coding by scoring highest among 40+ members.",
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
      desc: "Participated in an engaging web development challenge and solved MCQs based on frontend to enhance my skills.",
      memento: "https://unstop.com/certificate-preview/fa58fc31-e7e8-4381-8260-e771103b43ce?utm_campaign=site-emails"
    }
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-8 px-4 py-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] md:w-[30%] border border-gray-700 bg-zinc-900 p-5 rounded-lg shadow-md hover:border-indigo-600 hover:shadow-indigo-500/30 transition duration-300"
        >
          <div className="flex items-center gap-4 mb-3">
            <img
              src={event.img}
              alt={event.name}
              className="w-[60px] h-[60px] object-contain rounded-md bg-white p-1"
            />
            <h3 className="text-lg font-bold text-indigo-400">{event.name}</h3>
          </div>

          <p className="text-sm text-gray-400 mb-1">{event.organized}</p>
          <p className="text-sm italic text-indigo-300 mb-2">{event.prize}</p>
          <p className="text-sm text-gray-300 mb-3">{event.desc}</p>

          {event.memento && (
            <a
                href={
                  event.memento.startsWith('http')
                    ? event.memento
                    : `${import.meta.env.BASE_URL}${event.memento}`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
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
