'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
const projects = [
  {
    id: 1,
    title: 'Cor Jesu College Digital Repository',
    description: 'A web-based system for storing and managing Cor Jesu College works efficiently, built with React, Node.js, and PostgreSQL."',
    image: '/images/digitalrepo.jpg',
    technologies: ['React', 'Node.js with ',  'TypeScript',  'PostgreSQL'],
    link: 'https://cor-jesu-college-digital-repository.vercel.app/',
    github: 'https://github.com/Sooolace/Cor-Jesu-College-Digital-Repository',
  },
  {
    id: 2,
    title: 'Clima - Weather Forecasting Website',
    description: 'A weather forecasting website that provides real-time weather updates and forecasts using WEATHER API, built with Next.js, Tailwind CSS, and Chart.js',
    image: '/images/clima.jpg',
    technologies: ['Next.js', 'Tailwind CSS',  'Chart.js',  'WEATHER API'],
    link: 'https://klclima.vercel.app/',
    github: '#',
  },
  {
    id: 3,
    title: 'Digos City Veterinary Office Certification System',
    description: 'A system that automates veterinary health certificates, meat shop compliance certificates, and other related certifications, built to streamline issuance and record-keeping.',
    image: '/images/certSystem.jpg',
    technologies: ['C#.net', 'Windows Forms',  'MYSQL'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Pet Vaccination Encoding System',
    description: 'A system for recording and managing pet vaccination records efficiently, built with Visual Basic.NET and MySQL, automating data entry by allowing multiple records to be encoded through a single input.',
    image: '',
    technologies: ['Visual Basic.NET', 'MYSQL'],
    link: '#',
    github: '#',
  },
    {
    id: 5,
    title: 'Airline Booking System',
    description: 'A web-based system for managing flight reservations, bookings, and passenger data, built with PHP, MySQL, and CSS.',
    image: '',
    technologies: ['PHP', 'CSS', 'phpMyAdmin'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0a192f] relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Past Projects</h2>
          <p className="text-gray-400 text-lg">
            Here are some of my recent projects and work
          </p>
        </div>

        {/* 2x2 Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0f2547] border border-blue-900/30 rounded-lg shadow-lg overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
{/* Project Image */}
<div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
  {project.image ? (
    <Image
      src={project.image}
      alt={'project.title'}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      unoptimized
      priority={project.id === 1}
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600">
      {project.title.charAt(0)}
    </div>
  )}

  {/* Overlay on hover */}
  <div className="absolute inset-0 bg-transparent group-hover:bg-black/40 transition-opacity duration-300 flex items-center justify-center gap-4 z-10 pointer-events-none">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 pointer-events-auto"
    >
      View Project
    </a>
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 pointer-events-auto"
      >
        GitHub
      </a>
    )}
  </div>
</div>
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
}
