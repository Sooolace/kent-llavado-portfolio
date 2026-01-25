'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const text = 'Building something awesome...';
  const [displayText, setDisplayText] = useState('');
  const [isFading, setIsFading] = useState(false);
  
  // Typing speed in milliseconds (lower = faster typing)
  const typingSpeed = 50;
  // Pause time after typing completes (in milliseconds)
  const pauseAfterTyping = 1000;

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Wait a bit after typing completes before starting fade
      const timeout = setTimeout(() => {
        setIsFading(true);
      }, pauseAfterTyping);
      return () => clearTimeout(timeout);
    }
  }, [displayText, text]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[9999] flex items-center justify-center bg-[#0a192f] transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
    >
      {/* Glow effect similar to hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center">
        <div className="text-2xl md:text-3xl text-gray-100">
          <span className="text-blue-400 font-semibold">{displayText}</span>
          {!isFading && <span className="inline-block w-2 h-5 bg-blue-400 ml-1 animate-pulse"></span>}
        </div>
      </div>
    </div>
  );
}
