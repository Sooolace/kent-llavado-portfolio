'use client';

import { useState, useEffect } from 'react';
import Hero from "@/src/sections/hero";
import About from "@/src/sections/about";
import Projects from "../sections/projects";
import SidebarLayout from "@/src/components/Sidebar";
import FloatingButton from "@/src/components/FloatingButton";
import Education from "../sections/education";
import Contact from "../sections/contact";
import LoadingScreen from "@/src/components/LoadingScreen";


export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Hide loading screen after a delay to allow typing animation to complete
    // Text length ~30 chars * 50ms + 1000ms pause = ~2500ms total
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Start showing content slightly after loading screen starts fading
      setTimeout(() => {
        setShowContent(true);
      }, 200);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div 
        className={`transition-opacity duration-700 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <SidebarLayout>
          <FloatingButton />
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </SidebarLayout>
      </div>
    </>
  );
}
