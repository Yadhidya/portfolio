import { FaCode, FaTools, FaLaptopCode, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  {
    icon: <FaCode />,
    title: "Programming Languages",
    items: ["Java", "C", "C++", "Python"],
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
  },
  {
    icon: <FaServer />,
    title: "CS Fundamentals",
    items: ["DSA", "DBMS", "OOPS", "SQL", "Networking"],
  },
  {
    icon: <FaTools />,
    title: "Tools",
    items: ["VS Code", "IntelliJ", "GitHub"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 px-4 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center text-gray-100 mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-2">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-zinc-900 border border-gray-700 rounded-2xl p-6 shadow-md hover:border-indigo-800 hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-2 mb-4 text-xl sm:text-2xl font-bold text-indigo-400">
              {cat.icon}
              <h3>{cat.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-3 text-sm sm:text-base md:text-lg">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  className="px-4 py-2 border border-indigo-900 rounded-full whitespace-nowrap"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
