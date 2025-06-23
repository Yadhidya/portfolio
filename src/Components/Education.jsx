import veltech from "./images/education/veltech.png";
import vidyadeep from "./images/education/vidyadeep.jpeg";
import andhra from "./images/education/andhra.webp";

const Education = () => {
  const education = [
    {
      logo: veltech,
      degree: "B.Tech - Computer Science Engineering",
      institution: "Veltech University, Chennai",
      duration: "June 2024 – Present",
      grade: "8.9 CGPA",
      description:
        "Currently pursuing B.Tech in Computer Science at Veltech University. Active participant in coding competitions, focused on DSA, Web Development.",
    },
    {
      logo: andhra,
      degree: "Diploma - Computer Science Engineering",
      institution: "Andhra Polytechnic, Kakinada",
      duration: "2021 – 2024",
      grade: "93.94%",
      description:
        "Completed diploma with distinction. Built real-time C# and Unity applications during the industrial training, gaining practical hands-on experience.",
    },
    {
      logo: vidyadeep,
      degree: "Schooling",
      institution: "Vidyadeep English Medium High School, Nidadavole",
      duration: "2021",
      grade: "97%",
      description:
        "Completed full school education from nursery to 10th grade in the same institution. Built a strong academic foundation and discipline.",
    },
  ];

  return (
    <section id="education" className="w-full bg-gradient-to-br from-black to-gray-900 text-white py-16 px-4 sm:px-6 md:px-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Education</h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        My education has been a journey of exploration, skills, and growth. Here are the key highlights.
      </p>

      <div className="relative max-w-4xl mx-auto border-l-4 border-indigo-700 pl-6 space-y-12">
        {education.map((item, index) => (
          <div
            key={index}
            className="relative bg-zinc-900 border border-gray-700 rounded-lg p-5 shadow-md"
          >
            <span className="absolute -left-6 top-6 w-4 h-4 bg-indigo-500 rounded-full border-2 border-black"></span>

            <div className="flex items-start gap-4">
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
                className="w-[70px] h-[70px] rounded-full border border-gray-600 object-contain bg-white p-1"
              />
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-300">{item.institution}</h3>
                <p className="text-sm sm:text-base italic text-gray-400">{item.degree}</p>
                <p className="text-sm text-gray-500">{item.duration}</p>
                <p className="text-sm text-gray-400 font-medium">Grade: {item.grade}</p>
                <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
