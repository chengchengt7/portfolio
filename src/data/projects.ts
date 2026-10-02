import videoPokerHero from "../assets/video-poker/hero.png";
import type { ProjectCardProps } from "../components/ProjectCard/ProjectCard";

export type Project = ProjectCardProps & {
  id: string;
};

export const projects: Project[] = [
  {
    id: "video-poker",
    name: "Video Poker Game",
    technologies: ["React", "Vite", "Zustand", "React Router", "TypeScript"],
    description: "A browser-based video poker game built with React and TypeScript.",
    media: {
      type: "image",
      src: videoPokerHero,
      alt: "Video Poker game interface",
    },
    mediaHref: "https://video-poker-game.vercel.app/",
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
];
