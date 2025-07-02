import React from 'react';
import {
  FaReact, FaNodeJs, FaGitAlt, FaJava, FaLinux, FaAndroid, FaBrain
} from 'react-icons/fa';
import {
  SiMongodb, SiTailwindcss, SiJavascript, SiMysql, SiC, SiCplusplus, SiPython
} from 'react-icons/si';

const skills = [
  {
    id: 1,
    name: "React",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(34,211,238,0.5)]",
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs className="text-green-400 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(74,222,128,0.4)]",
  },
  {
    id: 3,
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(34,197,94,0.4)]",
  },
  {
    id: 4,
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(56,189,248,0.5)]",
  },
  {
    id: 5,
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-300 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(253,224,71,0.4)]",
  },
  {
    id: 6,
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(249,115,22,0.4)]",
  },
  {
    id: 7,
    name: "Java",
    icon: <FaJava className="text-red-500 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(239,68,68,0.4)]",
  },
  {
    id: 8,
    name: "Python",
    icon: <SiPython className="text-blue-300 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(96,165,250,0.5)]",
  },
  {
    id: 9,
    name: "C++",
    icon: <SiCplusplus className="text-purple-400 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(192,132,252,0.4)]",
  },
  {
    id: 10,
    name: "MySQL",
    icon: <SiMysql className="text-blue-500 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(59,130,246,0.4)]",
  },
  {
    id: 11,
    name: "Linux",
    icon: <FaLinux className="text-yellow-500 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(234,179,8,0.4)]",
  },
  {
    id: 12,
    name: "Android Studio",
    icon: <FaAndroid className="text-green-500 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(34,197,94,0.4)]",
  },
  {
    id: 13,
    name: "Machine Learning",
    icon: <FaBrain className="text-pink-400 text-3xl" />,
    shadow: "shadow-[0_0_20px_4px_rgba(244,114,182,0.5)]",
  },
];

const Skills = () => {
  return (
    <section className="text-white py-20 bg-grid animate-slide-up" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Skills</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center rounded-md border border-white/10 backdrop-blur-md bg-[#0e0e0e] transition-transform hover:scale-105 duration-300 ${skill.shadow}`}
            >
              {skill.icon}
              <span className="mt-3 text-xs font-medium text-gray-200 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
