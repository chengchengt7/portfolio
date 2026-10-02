import type { ReactNode } from "react";
import "./ProjectCard.css";

type ProjectAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type ProjectCardProps = {
  name: string;
  technologies: string[];
  description: string;
  media: ReactNode;
  actions: ProjectAction[];
};

export default function ProjectCard({
  name,
  technologies,
  description,
  media,
  actions,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="card-visual">{media}</div>

      <div className="card-des">
        <h2>{name}</h2>
        <ul className="tech-labels" aria-label="Technologies used">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <p>{description}</p>

        <div className="project-actions">
          {actions.map(({ label, href, variant = "primary" }) => (
            <a
              className={`${variant}-action`}
              href={href}
              target="_blank"
              rel="noreferrer"
              key={`${label}-${href}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
