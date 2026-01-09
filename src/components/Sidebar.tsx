'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

type SidebarProps = {
  children: React.ReactNode;
};

export default function SidebarLayout({ children }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME', id: 'home' },
    { href: '#education', label: 'EDUCATION', id: 'education' },
    { href: '#about', label: 'ABOUT ME', id: 'about' },
    { href: '#projects', label: 'PROJECTS', id: 'projects' },
    { href: '#contact', label: 'CONTACT', id: 'contact' }

  ];

  return (
    <div className="min-h-screen flex bg-[#0a192f] text-gray-100">
      {/* Sidebar - Fixed and floating */}
      <aside className="fixed left-0 top-0 h-screen w-96 bg-[#0f2547] border-r border-blue-900/30 flex flex-col items-center py-8 px-4 shadow-[0_0_30px_rgba(59,130,246,0.3)] z-50 overflow-y-auto">
        {/* Top picture */}
        <div className="mb-8">
          <div className="relative h-52 w-52 rounded-full overflow-hidden shadow-md">
            <Image
              src="/images/KPic.jpg"
              alt="Kent Llavado"
              fill
              sizes="208px"
              quality={100}
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Nav links */}
        <nav className="font-mono text-xl flex flex-col gap-3 w-full font-medium items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                if (link.href?.startsWith('#')) {
                  e.preventDefault();
                  const id = link.href.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // update URL hash without causing an extra jump
                    // history.replaceState(null, '', link.href);
                  }
                }
              }}
              className={`px-3 py-2 rounded transition-all duration-300 w-full text-center ${
                activeSection === link.id
                  ? 'bg-blue-900/50 text-blue-300 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'hover:bg-blue-900/30 hover:text-blue-300 text-gray-200'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* View CV Button */}
        <div className="mt-6 px-4">
          <a
            href="/KentLlavado_CV.pdf"
            className="
            flex items-center justify-between w-full mt-5 px-10 py-3
            bg-transparent border-2 border-white text-white
            rounded-lg font-semibold
            transition-all duration-300
            hover:bg-blue-600 hover:border-blue-600 hover:text-white
            shadow-none hover:shadow-lg hover:shadow-blue-500/50
            group
          "                    >
            <span>View CV</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://facebook.com/kentgllavado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kent-llavado-7503933a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Sooolace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="mt-auto text-xs text-gray-500 pt-6">
          © {new Date().getFullYear()} Kent Llavado
        </div>
      </aside>

      {/* Main content - with left margin to account for fixed sidebar */}
      <main className="flex-1 ml-96">{children}</main>
    </div>
  );
}

