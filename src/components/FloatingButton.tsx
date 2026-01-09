'use client';

import React, { useEffect, useState } from 'react';

export default function FloatingButton() {
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const contact = document.getElementById('contact');
    if (!contact) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInContact(entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(contact);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      id="floatingbutton"
      href="#contact"
      aria-label="Work with me"
      className={`fixed top-8 right-8
        bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#93c5fd]
        text-white font-bold px-10 py-5 rounded-full
        shadow-lg shadow-[#3b82f6]/50
        hover:shadow-[#60a5fa]/80 hover:scale-105
        transition-transform duration-500 ease-in-out
        z-50
        ${inContact ? 'translate-x-32' : 'translate-x-0'}`}
    >
      WORK WITH ME
    </a>
  );
}
