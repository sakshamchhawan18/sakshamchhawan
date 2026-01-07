import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "authx",
    title: "AuthX",
    period: {
      start: "02.2025",
      end: "05.2025",
    },
    link: "https://github.com/sakshamchhawan18/authx",
    skills: [
      "Backend",
      "Node.js",
      "Authentication",
      "Authorization",
      "JWT",
      "RBAC",
      "Redis",
      "PostgreSQL",
      "BullMQ",
      "Docker",
      "Docker Compose",
      "Nginx",
      "System Design",
      "Microservices",
    ],
    description: `Production-grade authentication and authorization microservice.
- Implemented JWT-based access and refresh token rotation with secure session handling.
- Built Redis-backed session management and role-based access control (RBAC).
- Developed admin dashboard APIs with user management, audit logs, and soft delete.
- Implemented background workers using BullMQ for email notifications, logging, and session cleanup.
- Deployed using Docker Compose with Node.js, PostgreSQL, Redis, and Nginx for scalability and reliability.`,
    logo: "/images/projects/authx.webp",
    isExpanded: true,
  },

  {
    id: "portbuilder",
    title: "Portbuilder",
    period: {
      start: "12.2024",
      end: "04.2025",
    },
    link: "https://portbuilder.vercel.app",
    skills: [
      "Full Stack",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OAuth",
      "GitHub API",
      "Vercel",
      "Serverless",
      "System Design",
      "Scalable Architecture",
    ],
    description: `Full-stack portfolio builder enabling real-time editing and one-click deployment.
- Built a real-time portfolio editor with live preview and modular themes.
- Integrated OAuth authentication and GitHub API for secure workflows and repository syncing.
- Enabled one-click deployment to Vercel for fast and seamless publishing.
- Designed scalable templates and themes using Next.js, TypeScript, and Tailwind CSS.
- Supported 300+ users to launch personal sites effortlessly.`,
    logo: "https://i.ibb.co/qQZwwXr/Whats-App-Image-2026-01-07-at-22-25-39.jpg",
  },
];
