import React, { useState } from 'react';
import Projects from './projects_&_Experiences/Projects';
import Internships from './projects_&_Experiences/internships';
import Certifications from './projects_&_Experiences/Certifications';
import { motion, AnimatePresence } from 'framer-motion';

const Career = () => {
  const [selected, setSelected] = useState('projects');

  const renderSection = () => {
    if (selected === 'projects') return <Projects />;
    if (selected === 'internships') return <Internships />;
    if (selected === 'certifications') return <Certifications />;
  };

  return (
    <section
      id="CareerHighlights"
      className="w-full py-16 px-4 sm:px-6 md:px-10 bg-black text-white"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-100 mb-12">
        Career & Highlights
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {['projects', 'internships', 'certifications'].map((item) => (
          <motion.button
            key={item}
            onClick={() => setSelected(item)}
            whileHover={{ scale: 1.05, backgroundColor: '#4f46e5' }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-lg font-medium transition duration-300 ease-in-out
              ${
                selected === item
                  ? 'bg-indigo-700 text-white shadow-lg shadow-indigo-500/50'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }
              focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Render Section Content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Career;
