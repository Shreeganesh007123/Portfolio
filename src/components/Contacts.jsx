import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section id="contact" className="text-white py-24 px-4 bg-grid animate-slide-up">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 font-display">
          Let’s Connect!
        </h2>

        {/* Card Container */}
        <div className="backdrop-blur-md bg-[#0e0e0e] border border-white/10 rounded-md p-8 shadow-[0_0_30px_10px_rgba(99,102,241,0.2)]">
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            I’m always open to discussing tech innovations, web development, and collaborations.
            Feel free to reach out!
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shreeganesh007123@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://github.com/Shreeganesh007123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/shree-ganesh-3b0114254"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://instagram.com/stayheroic"
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
