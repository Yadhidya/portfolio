import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

const ContactMe = () => {
  return (
    <footer id="contact_me" className="bg-black text-white py-16 px-4 sm:px-6 md:px-10 border-t border-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto text-base sm:text-lg">
          I'm open to new opportunities and collaborations. Feel free to connect!
        </p>

        <p className="text-base sm:text-lg mb-6 break-all">
          <a
            href="mailto:ulliyadhidya6002@gmail.com"
            className="text-indigo-300 hover:text-indigo-500 transition-colors"
          >
            <FaEnvelope className="inline-block mr-2" />
            ulliyadhidya6002@gmail.com
          </a>
        </p>

        <div className="flex justify-center flex-wrap gap-6 mb-8 text-xl sm:text-2xl">
          <a
            href="https://github.com/yadhidya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yadhidya-ulli-5727a4222"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/YadhidyaU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/_yadhidya_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Yadhidya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactMe;
