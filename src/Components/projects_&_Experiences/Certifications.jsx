import { useState, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";
import hacker from "../images/certficates/hacker.png";
import skilhacc from "../images/certficates/skillhacc.png";
import cisco from "../images/certficates/cisco.png";
import Springboard from "../images/certficates/springboard.avif";

const certfications = [
  {
    img: hacker,
    platform: "HackerRank",
    name: "Java (Basic)",
    desc: "Earned the Java (Basic) certification by demonstrating fundamental programming skills and object-oriented principles.",
    domain: "Programming",
    link: "https://www.hackerrank.com/certificates/a9c4385a0d2f",
  },
  {
    img: hacker,
    platform: "HackerRank",
    name: "SQL (Basic)",
    desc: "Certified in SQL (Basic) for demonstrating skills in data retrieval, filtering, sorting, and basic joins.",
    domain: "Databases",
    link: "https://www.hackerrank.com/certificates/8841d44f1395",
  },
  {
    img: hacker,
    platform: "HackerRank",
    name: "Problem Solving (Basic)",
    desc: "Verified skills in logical reasoning, basic algorithmic techniques, and problem-solving fundamentals.",
    domain: "Data Structures & Algorithms",
    link: "https://www.hackerrank.com/certificates/6736ba22abf9",
  },
  {
    img: skilhacc,
    platform: "Skillhacc",
    name: "AI Program",
    desc: "Completed a 2-month program focused on Artificial Intelligence fundamentals, hands-on machine learning concepts, real-world applications, and algorithms.",
    domain: "Artificial Intelligence",
    link: "",
  },
  {
    img: cisco,
    platform: "Cisco",
    name: "CCNA: Introduction to Networks",
    desc: "Learned networking fundamentals including IP addressing, Ethernet, OSI and TCP/IP models, router and switch configuration using Cisco Packet Tracer.",
    domain: "Networking",
    link: "/certifcate_links/CCNA1.pdf",
  },
  {
    img: cisco,
    platform: "Cisco",
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    desc: "Gained hands-on knowledge in switching and routing protocols along with configuration and troubleshooting.",
    domain: "Networking",
    link: "/certifcate_links/CCNA2.pdf",
  },
  {
    img: Springboard,
    platform: "Infosys Springboard",
    name: "General Networking and Security Course",
    desc: "Covered basic to intermediate networking concepts along with an introduction to security practices.",
    domain: "Networking & Security",
    link: "/certifcate_links/general-networking.pdf",
  },
  {
    img: Springboard,
    platform: "Infosys Springboard",
    name: "AWS Solutions Architect Associate 2022: Security & Data Privacy",
    desc: "Explored key AWS services with a focus on IAM, encryption, and data privacy best practices.",
    domain: "Cloud Computing & Security",
    link: "/certifcate_links/aws.pdf",
  },{ img: Springboard, platform: "Infosys Springboard", name: "Fine Tuning Large Language Models", desc: "Explored the concept and need for fine-tuning LLMs. Demonstrated fine-tuning of remote and local models and evaluated performance of fine-tuned models.", domain: "Artificial Intelligence", link: "/certifcate_links/llm2.pdf", }, { img: Springboard, platform: "Infosys Springboard", name: "Behavior of Large Language Models", desc: "Learned how LLMs behave when applied to real-world problems, including their capabilities, biases, harms, and associated ethical considerations.", domain: "Artificial Intelligence", link: "/certifcate_links/llm1.pdf", },
];

const Certifications = () => {
  const [visibleCount, setVisibleCount] = useState(3); // initially 3 visible
  const containerRef = useRef(null);

  const handleToggle = () => {
    if (visibleCount >= certfications.length) {
      setVisibleCount(3); // reset to 3
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, certfications.length));
    }
  };

  return (
    <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-10 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {certfications.slice(0, visibleCount).map((cert, index) => (
          <div
            key={index}
            className="group w-full max-w-sm border border-gray-700 bg-zinc-900 p-5 rounded-xl shadow-lg flex flex-col justify-between transform transition duration-300 hover:border-indigo-700 hover:scale-105 hover:shadow-xl"
          >
            <div>
              <img
                src={cert.img}
                alt={`${cert.name} preview`}
                className="w-full h-40 object-cover rounded-md group-hover:opacity-90 transition duration-300"
              />
              <p className="text-lg font-semibold mt-4 text-indigo-400 group-hover:text-indigo-600 transition duration-300">
                {cert.platform}
              </p>
              <p className="text-lg text-gray-300 mb-1">{cert.name}</p>
              <p className="text-sm text-gray-300 mb-2">{cert.desc}</p>
              <p className="text-sm text-gray-400 italic">{cert.domain}</p>
            </div>

            {cert.link && (
              <a
                href={
                  cert.link.startsWith("http")
                    ? cert.link
                    : `${import.meta.env.BASE_URL}${cert.link}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  <FaFileAlt />
                  View Certificate
                </button>
              </a>
            )}
          </div>
        ))}
      </div>

      {certfications.length > 3 && (
        <div className="mt-8 text-center">
          <button
            onClick={handleToggle}
            className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded transition"
          >
            {visibleCount >= certfications.length ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Certifications;
