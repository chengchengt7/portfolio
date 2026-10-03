import videoPokerHero from "../assets/video-poker/hero.png";
import savrVideo from "../assets/SAVR/home-SAVR-video-transparent.webm";
import savrTablet from "../assets/SAVR/home-SAVR-tablet.png";
import savrDemo from "../assets/SAVR/SAVR walk through.mp4";
import type { ProjectCardProps } from "../components/ProjectCard/ProjectCard";
import "./projects.css";

export type Project = ProjectCardProps & {
  id: string;
};

export const projects: Project[] = [
  {
    id: "video-poker",
    name: "Video Poker Game",
    skills: ["React", "Vite", "Zustand", "React Router", "TypeScript"],
    description:
      "A browser-based video poker game built with React and TypeScript.",
    media: (
      <img
        className="poker-img"
        src={videoPokerHero}
        alt="Video Poker game interface"
      />
    ),
    actions: [
      {
        label: "Play game",
        href: "https://video-poker-game.vercel.app/",
      },
      {
        label: "View code",
        href: "https://github.com/chengchengt7/school-260910-video-poker",
        variant: "secondary",
      },
    ],
  },
  {
    id: "savr",
    name: "SAVR — Personal Recipe Manager",
    skills: ["UX design", "Product design"],
    description:
      "SAVR is a retro-inspired recipe journal for capturing your unique culinary adventures. With no preloaded library, it's a hand-picked collection of dishes you've cooked, loved, and plan to try, enhanced by shopping list generation and AI-powered search.",
    media: (
      <div className="savr-showcase">
        <video
          className="savr-showcase-video"
          src={savrVideo}
          aria-label="SAVR recipe manager preview"
          autoPlay
          loop
          muted
          playsInline
        />
        <img
          className="savr-showcase-tablet"
          src={savrTablet}
          alt="SAVR recipe manager shown on a tablet"
        />
      </div>
    ),
    actions: [
      {
        label: "Watch demo",
        href: savrDemo,
      },
      {
        label: "View case study",
        href: "/projects/savr",
        internal: true,
        variant: "secondary",
      },
    ],
  },
];
