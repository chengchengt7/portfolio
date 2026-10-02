import "./ProjectCard.css";

type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; ariaLabel: string };

type ProjectAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type ProjectCardProps = {
  name: string;
  technologies: string[];
  description: string;
  media: ProjectMedia;
  actions: ProjectAction[];
  mediaHref?: string;
};

export default function ProjectCard({
  name,
  technologies,
  description,
  media,
  actions,
  mediaHref,
}: ProjectCardProps) {
  const mediaElement = media.type === "image" ? (
    <img className="project-media" src={media.src} alt={media.alt} />
  ) : (
    <video
      className="project-media"
      src={media.src}
      poster={media.poster}
      aria-label={media.ariaLabel}
      controls
      playsInline
    />
  );

  return (
    <article className="project-card">
      {mediaHref && media.type === "image" ? (
        <a
          className="card-visual"
          href={mediaHref}
          aria-label={`Open ${name}`}
          target="_blank"
          rel="noreferrer"
        >
          {mediaElement}
        </a>
      ) : (
        <div className="card-visual">{mediaElement}</div>
      )}

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
