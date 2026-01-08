import Hero from "@/src/sections/hero";
import About from "@/src/sections/about";
import Projects from "../sections/projects";
import SidebarLayout from "@/src/components/Sidebar";
import Education from "../sections/education";
import Contact from "../sections/contact";


export default function Page() {
  return (
    <SidebarLayout>
      <section id="home">
        <Hero />
      </section>
      <section id="education">
      <Education />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </SidebarLayout>
  );
}
