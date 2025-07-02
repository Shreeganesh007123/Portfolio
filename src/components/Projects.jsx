import React from 'react';
import { FaLeaf, FaBook } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Maritime Report Visualization",
    icon: <FaLeaf className="text-blue-500" />,
    description:
      "Maritime Report Processing and Visualization is a project that focuses on processing maritime data and providing intuitive visualizations. The system integrates interactive maps to help users explore maritime activities and derive data-driven insights for effective decision-making.",
    tags: ["Python", "Tesseract OCR", "Flask", "Leaflet.js", "HTML/CSS"],
    color: "from-indigo-500 via-purple-700 to-purple-900",
    glow: "shadow-[0_0_30px_10px_rgba(99,102,241,0.2)]",
    ring: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]",
  },
  {
    id: 2,
    title: "Book Redistribution System",
    icon: <FaBook className="text-green-400" />,
    description:
      "A full-stack web application designed to bridge the gap between donors and underprivileged readers by facilitating the redistribution of used books. The platform allows users to donate, request, and manage books through a seamless interface, aiming to promote education equity and reduce waste.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    color: "from-green-400 via-emerald-600 to-teal-900",
    glow: "shadow-[0_0_30px_10px_rgba(34,197,94,0.2)]",
    ring: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]",
  },
];

const Projects = () => {
  return (
    <section className=" text-white py-20 bg-grid animate-slide-up scroll-smooth" id="projects" >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>
        


        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`max-w-4xl mx-auto rounded-md p-6 md:p-8 backdrop-blur-md border border-white/10 ${project.glow} ${project.ring} bg-gradient-to-br ${project.color} relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]`}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/10 p-3 rounded-full">{project.icon}</div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
