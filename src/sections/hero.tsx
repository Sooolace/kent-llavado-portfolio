'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const roles = ['Developer', 'Designer', 'IT Support Specialist'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === '') {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        // Typing or deleting
        setDisplayText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentRole.slice(0, prev.length + 1);
          }
        });
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#0a192f] relative" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl w-full relative z-10">
        {/* Code-style text block */}
        <div className="text-2xl md:text-3xl leading-relaxed" style={{ fontFamily: 'var(--font-geist-mono), monospace' }}>
          {/* Line 01 */}
          <div className="mb-2">
            <span className="text-gray-500 mr-4">01</span>
            <span className="text-gray-100">
              &lt;Hello, I'm{' '}
              <span className="text-blue-400 font-semibold">Kent Llavado</span>
              !&gt;
            </span>
          </div>

          {/* Line 02 */}
          <div className="mb-2">
            <span className="text-gray-500 mr-4">02</span>
            <span className="text-gray-100">
              &lt;I am{' '}
              <span className="text-blue-400 font-semibold">{displayText}</span>
              <span className="inline-block w-2 h-5 bg-blue-400 ml-1 animate-pulse"></span>
              .
            </span>
          </div>

          {/* Line 03 */}
          <div className="mb-8">
            <span className="text-gray-500 mr-4">03</span>
            <span className="text-gray-100">
            &lt;I also design <span className="text-blue-400 font-semibold">posters</span> and 
            <span className="text-blue-400 font-semibold"> logos</span>....&gt;
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
