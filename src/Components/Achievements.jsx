import React, { useState } from 'react';
import Events from './Achievements_fold/Events';
import CodingProfiles from './Achievements_fold/CodingProfiles';
import { motion, AnimatePresence } from 'framer-motion';

const sections = {
  events: {
    label: "Events & Awards",
    component: <Events />,
  },
  coding: {
    label: "Coding Profiles",
    component: <CodingProfiles />,
  },
};

const Achievements = () => {
  const [selected, setSelected] = useState("events");

  return (
    <section id="Achievements" className="w-full py-16 px-4 sm:px-6 md:px-10 bg-black text-white">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
        Achievements
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-4 py-2 text-sm sm:text-base rounded-md font-medium transition-all duration-200 ${
              selected === key ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            {sections[key].label}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {sections[selected].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;
