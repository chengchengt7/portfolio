import { useEffect, useRef } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Statement from "../../components/Statement/Statement";
import { projects } from "../../data/projects";
import "./Home.css";

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.location.hash === "#projects") {
      projectsRef.current?.scrollIntoView();
    }
  }, []);

  return (
    <main className="home">
      <Statement />
      <section id="projects" ref={projectsRef} aria-label="Projects">
        {projects.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </section>
    </main>
  );
}
