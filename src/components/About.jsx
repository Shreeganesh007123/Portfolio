import React from 'react';

const About = () => {
  return (
    <div className="  text-white py-10 bg-grid animate-slide-up">
      {/* Heading */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-14">About Me</h2>
      </div>

      {/* Centered Description */}
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-2xl text-gray-300 leading-relaxed">
          I am a passionate MERN Stack Developer currently pursuing Computer Science Engineering at SJEC Mangalore (VTU). I specialize in building intuitive, scalable, and secure web applications, seamlessly integrating front-end and back-end development. With a strong focus on performance and user experience, I strive to create efficient, high-quality solutions and enjoy collaborating on impactful projects.
        </p>
      </div>
    </div>
  );
};

export default About;
