import React, { useState } from 'react';
import Projects from './projects_&_Experiences/Projects';
import Internships from './projects_&_Experiences/internships';
import Certifications from './projects_&_Experiences/Certifications';

const Career = () => {
  const [selected, setSelected] = useState('projects');

  const renderSection = () => {
    if (selected === 'projects') {
      return <Projects />;
    } else if (selected === 'internships') {
      return <Internships />;
    } else if (selected === 'certifications') {
      return <Certifications />;
    }
  };

  return (
    <section id="CareerHighlights" className='w-full py-4 bg-black text-white'>
      <h2 className='text-5xl font-bold text-center text-gray-100 my-12'>
        Career & Highlights
      </h2>

      {/* Filter Buttons */}
      <div className='flex justify-center gap-4 mb-8'>
        <button
          onClick={() => setSelected('projects')}
          className={`px-4 py-2 rounded-md font-medium ${
            selected === 'projects' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setSelected('internships')}
          className={`px-4 py-2 rounded-md font-medium ${
            selected === 'internships' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
        >
          Internships
        </button>
        <button
          onClick={() => setSelected('certifications')}
          className={`px-4 py-2 rounded-md font-medium ${
            selected === 'certifications' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
        >
          Certifications
        </button>
      </div>

      {/* Render Section */}
      <div className='max-w-6xl mx-auto'>{renderSection()}</div>
    </section>
  );
};

export default Career;
