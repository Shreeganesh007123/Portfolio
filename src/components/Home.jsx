import { React, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import hero from '../assets/image1.jpeg';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Software Developer', 'Full Stack Developer', 'Tech Enthusiast'],
      typeSpeed: 60,
      backSpeed: 20,

    });

    return () => typed.destroy();
  }, []);


  const calculateAge = (dobString) => {
    const dob = new Date(dobString);
    const today = new Date();

    const d = today.getDate() - dob.getDate();
    const m = today.getMonth() - dob.getMonth();
    let age = today.getFullYear() - dob.getFullYear();

    if (m < 0 || (m === 0 && d < 0)) {
      age--;
    }

    return age;
  };

  const age = calculateAge("02-01-2002");


  return (
    <section className=" text-white flex-wrap py-25 px-6 " id="home">
      <div className="max-w-3xl mx-auto flex flex-col">

        {/* Top-right social links */}
        <div className="flex justify-end mb-4 mt-1">
          <div className="flex gap-6 ">
            <a href="https://github.com/Shreeganesh007123" className="text-white hover:text-gray-400 transition">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/shree-ganesh-3b0114254" className="text-white hover:text-gray-400 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="https://instagram.com/stayheroic" className="text-white hover:text-gray-400 transition">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Image and info */}
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:gap-10">
          <div className="flex flex-col items-center sm:items-start">
            {/* Profile Image */}
            <img
              src={hero}
              alt="profile"
              className="w-25 h-25 sm:w-25 sm:h-25 md:w-30 md:h-30 rounded-md object-cover hover:scale-105 transition duration-300 shadow-[0_0_20px_4px_rgba(34,211,238,0.5)]"
            />

            {/* Text Info Below Image */}
            <div className="mt-6 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Shree Ganesh
                </span>

              </h1>
              <h2 className='text-gray-300'>{age} | Mangalore</h2>
              <h3 className='text-2xl sm:text-2xl md:text-2xl font-bold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500' ref={typedRef}></span></h3>

              <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-lg">
                I'm a Full Stack Developer skilled in building dynamic web apps, solving complex DSA problems, and developing Android applications. Passionate about creating scalable solutions across platforms with modern tech..
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 bg-gradient-to-r from-green-700 to-blue-600 text-white px-5 py-2 text-sm sm:text-base rounded-full hover:scale-105 transition">
                  View Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;
