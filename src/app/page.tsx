import Hero from "@/src/sections/hero";
import About from "@/src/sections/about";
import Projects from "../sections/projects";
import SidebarLayout from "@/src/components/Sidebar";
import Education from "../sections/education";

export default function Home() {
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
    </SidebarLayout>
  );
}
