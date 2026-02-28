import { useState, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";

import dev from "../images/awards/dev.png";
import lets from "../images/awards/lets.png";
import codeathon from "../images/awards/codeathon.png";
import comsci from "../images/awards/comsci.jpg";
import btech from "../images/awards/btech_wallah.png";
import Aincat from "../images/awards/AINCAT.png";
import tvs from "../images/awards/tvs.png";
import crave from "../images/awards/crave.png";
import adobe from "../images/awards/adobe.png";
import blind from "../images/awards/blind.png";
import pi_pro from "../images/awards/PI_pro.jpeg";
import velamal from "../images/awards/velamal.jpeg";
import iit_reverse from "../images/awards/reverse_coding.jpg";

const Events = () => {
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // 🏆 Badge Logic
  const getBadge = (level) => {
    switch (level) {
      case "winner":
        return { label: "🥇 Winner", color: "bg-yellow-500" };
      case "runnerup":
        return { label: "🥈 Runner Up", color: "bg-gray-400" };
      case "third":
        return { label: "🥉 Third Place", color: "bg-amber-700" };
      case "excellence":
        return { label: "⭐ Excellence", color: "bg-purple-600" };
      default:
        return { label: "🎯 Participation", color: "bg-blue-600" };
    }
  };

  const events = [
     
    {
  img: velamal,
  name: "It Takes Two – Code Relay Challenge",
  organized: "Velammal Engineering College (OZMENTA'26)",
  prize: "1st Place",
  level: "winner",
  desc: "Secured 1st Prize in a two-player coding relay challenge requiring time-bound problem solving under restricted internet conditions.",
  memento: "/awards_links/it_takes_two.jpg"
},
{
      img: comsci,
      name: "Debugging Contest - COMSIC'2K25",
      organized: "SRM Ramapuram",
      prize: "Winner",
      level: "winner",
      desc: "Solved all debugging problems perfectly and secured 1st place.",
      memento: "/awards_links/debugging.jpg"
    },{
      img: comsci,
      name: "Technical Quiz - COMSIC'2K25",
      organized: "SRM Ramapuram",
      prize: "Winner",
      level: "winner",
      desc: "Won the technical quiz competition by scoring highest among 40+ participants.",
      memento: "/awards_links/technicalQuiz.jpg"
    },
    
    {
      img: codeathon,
      name: "Codeathon February Edition",
      organized: "Veltech Institutions",
      prize: "2nd Place",
      level: "runnerup",
      desc: "Secured 2nd place among 500+ participants in an inter-college coding competition.",
      memento: "/awards_links/codeathon.jpg"
    },
    {
      img: velamal,
      name: "Tech Marathon – OZMENTA'26",
      organized: "Velammal Engineering College",
      prize: "2nd Place",
      level: "runnerup",
      desc: "Secured 2nd Prize in a 3-stage coding endurance challenge testing debugging precision and algorithmic thinking.",
      memento: "/awards_links/tech_marathon.jpeg"
    },{
      img: blind,
      name: "Blind Coding Contest",
      organized: "Veltech University",
      prize: "2nd Place",
      level: "runnerup",
      desc: "Secured 2nd prize in a unique coding challenge with monitors turned off.",
      memento: "/awards_links/blind.jpg"
    },
   
    
    {
      img: pi_pro,
      name: "VelTech PI Pro",
      organized: "VelTech University",
      prize: "3rd Place",
      level: "third",
      desc: "Selected as 3rd Place in a competitive mock interview-based evaluation assessing technical knowledge, communication, and problem-solving ability.",
      memento: "/awards_links/PI_pro.jpeg"
    },
    {
      img: codeathon,
      name: "Codeathon August Edition",
      organized: "Veltech University",
      prize: "3rd Place",
      level: "third",
      desc: "Secured 3rd place in a competitive coding event showcasing strong problem-solving skills.",
      memento: "/awards_links/codeathon_aug.jpg"
    },{
  img: iit_reverse,
  name: "Reverse Coding X",
  organized: "Shaastra 2026 – IIT Madras",
  prize: "Participation",
  level: "participation",
  desc: "Participated in Reverse Coding X at IIT Madras where problems were presented without descriptions. Inputs and expected outputs were provided via a Telnet terminal.",
  memento: "/awards_links/reverse_coding.jpg"
},
    
    {
      img: lets,
      name: "CodeClash – The Battle of Logic & Code",
      organized: "Lets Code Community (Unstop)",
      prize: "Certificate of Excellence",
      level: "excellence",
      desc: "Received a Certificate of Excellence for logical thinking and consistent performance.",
      memento: "https://unstop.com/certificate-preview/4d28c274-b2a6-4efa-840a-b20c81227f79"
    },
    {
      img: tvs,
      name: "TVS Credit E.P.I.C 7.0 — IT Challenge",
      organized: "TVS Credit",
      prize: "Participation",
      level: "participation",
      desc: "Participated in IT challenge solving dynamic programming problems.",
      memento: "https://unstop.com/certificate-preview/5aa3eb3c-7ced-41ee-b6fb-d72670bb9ceb"
    },
    {
      img: adobe,
      name: "Adobe India Hackathon",
      organized: "Adobe India",
      prize: "Participation",
      level: "participation",
      desc: "Participated in national-level hackathon with MCQs and coding round.",
      memento: "https://unstop.com/certificate-preview/634cb77c-6028-4ac0-ac04-e1f00d91922d"
    },
    {
      img: crave,
      name: "Crave the Code",
      organized: "College Crave",
      prize: "Top 200 Teams",
      level: "excellence",
      desc: "Qualified for Round 2 and placed among Top 200 out of 800 teams.",
      memento: "https://unstop.com/certificate-preview/c4f92899-ca28-4998-ae28-9c8ff85c3375"
    },
    {
      img: dev,
      name: "CodeRush Weekly",
      organized: "Devantra Community",
      prize: "Participation",
      level: "participation",
      desc: "Participated in weekly coding challenges to improve consistency.",
      memento: "https://unstop.com/certificate-preview/9bffba09-35b7-4467-85ac-a4adce79040f"
    },
    {
      img: Aincat,
      name: "AINCAT – All India Naukri Campus Test",
      organized: "Naukri Campus",
      prize: "Participation Certificate",
      level: "participation",
      desc: "Recognized in nationwide campus assessment showcasing technical aptitude.",
      memento: "https://www.naukri.com/campus/certificates/naukri_campus_ai_ncat_participation_may_2025/v0/683a0c30892c1f3133aaedb8"
    },
    {
      img: btech,
      name: "Web Wizardry 3.0",
      organized: "Btech Walleh (Unstop)",
      prize: "Participation Certificate",
      level: "participation",
      desc: "Participated in frontend-focused web development challenge.",
      memento: "https://unstop.com/certificate-preview/fa58fc31-e7e8-4381-8260-e771103b43ce"
    }
  ];

  const handleToggle = () => {
    if (visibleCount >= events.length) {
      setVisibleCount(6);
      containerRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount((prev) => Math.min(prev + 6, events.length));
    }
  };

  return (
      <div ref={containerRef} className="w-full px-4 py-6">
        <div className="flex flex-wrap justify-center gap-8">
          {events.slice(0, visibleCount).map((event, index) => {
            const badge = getBadge(event.level);

            return (
             <div
  key={index}
  className="relative w-full sm:w-[48%] md:w-[30%] 
             bg-zinc-900/70 backdrop-blur-md 
             p-6 pt-14 
             rounded-2xl shadow-xl 
             border border-zinc-700 
             hover:shadow-2xl 
             transition duration-300 
             overflow-hidden 
             flex flex-col"
>
  {/* 🎖 Ribbon Badge */}
  <div
    className={`absolute -top-4 -left-12 rotate-[-45deg] 
                w-48 text-center py-2 
                text-sm font-bold text-white 
                shadow-lg ${badge.color}`}
  >
    {badge.label}
  </div>

  {/* Event Logo + Title */}
  <div className="flex items-center gap-4 mb-4">
    <img
      src={event.img}
      alt={event.name}
      className="w-[65px] h-[65px] object-contain 
                 rounded-lg bg-white p-1 shadow-md"
    />
    <h3 className="text-lg font-bold text-white leading-tight">
      {event.name}
    </h3>
  </div>

  {/* Organized */}
  <p className="text-sm text-gray-400 mb-1">
    {event.organized}
  </p>

  {/* Prize */}
  <p className="text-base font-semibold text-indigo-400 mb-3">
    {event.prize}
  </p>

  {/* Description (Pushes button down) */}
  <p className="text-sm text-gray-300 leading-relaxed flex-grow">
    {event.desc}
  </p>

  {/* Button aligned at bottom */}
  {event.memento && (
    <a
      href={
        event.memento.startsWith("http")
          ? event.memento
          : `${import.meta.env.BASE_URL}${event.memento}`
      }
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6"
    >
      <button className="w-full py-3 bg-indigo-600 
                         hover:bg-indigo-700 
                         text-white rounded-lg 
                         transition text-sm font-medium">
        <FaFileAlt className="inline-block mr-2" />
        View Certificate
      </button>
    </a>
  )}
</div>
          );
        })}
      </div>

      {events.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={handleToggle}
            className="px-8 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition"
          >
            {visibleCount >= events.length ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Events;