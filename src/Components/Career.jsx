import React, { useState } from 'react';
import Projects from './projects_&_Experiences/Projects';
import Internships from './projects_&_Experiences/internships';
import Certifications from './projects_&_Experiences/Certifications';

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
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out
              ${
                selected === item
                  ? 'bg-indigo-700 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }
              focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* Render Section Content */}
      <div className="max-w-6xl mx-auto">{renderSection()}</div>
    </section>
  );
};

export default Career;
