'use client';

import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiFigma,
  SiAdobephotoshop,
  SiCanva
} from 'react-icons/si';

export default function About() {
  const frontendTech = [
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-100' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  ];

  const backendTech = [
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
    { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
  ];

  const databaseTech = [
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'MySQL', icon: SiMysql, color: 'text-orange-600' },
    { name: 'phpMyAdmin', icon: SiMysql, color: 'text-blue-500' },
  ];

  const designTools = [
    { name: 'Figma', icon: SiFigma, color: 'text-purple-600' },
    { name: 'Photoshop', icon: SiAdobephotoshop, color: 'text-blue-500' },
    { name: 'Canva', icon: SiCanva, color: 'text-teal-500' },
  ];

  const TechStackSection = ({ title, items }: { title: string; items: Array<{ name: string; icon: any; color: string }> }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-100">{title}</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="flex flex-col items-center p-4 bg-[#0f2547] border border-blue-900/30 rounded-lg hover:bg-[#1a3a5f] hover:border-blue-700/50 transition-all duration-200 group hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Icon className={`text-4xl ${item.color} mb-2 group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-xs text-gray-300 font-medium">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 px-6 bg-[#0a192f] relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* About Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Short Profile</h2>
          <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
            I am a Frontend Developer with knowledge in Backend development.
          </p>
          <p className="text-gray-400 mb-4 max-w-3xl mx-auto">
            I create websites and applications with a focus on clean, user-friendly interfaces, 
            reusable components, and efficient frontend logic. I enjoy turning ideas into working digital products.
          </p>
        </div>

        {/* Tech Stack Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Frontend */}
          <div className="bg-[#0f2547] border border-blue-900/30 p-6 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <TechStackSection title="Frontend" items={frontendTech} />
          </div>

          {/* Backend */}
          <div className="bg-[#0f2547] border border-blue-900/30 p-6 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <TechStackSection title="Backend" items={backendTech} />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-8'>
                      {/* Database */}
          <div className="bg-[#0f2547] border border-blue-900/30 p-6 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <TechStackSection title="Database" items={databaseTech} />
          </div>

          {/* Design */}
          <div className="bg-[#0f2547] border border-blue-900/30 p-6 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <TechStackSection title="UI/UX Tools" items={designTools} />
          </div>
        </div>
      </div>
    </section>
  );
}
