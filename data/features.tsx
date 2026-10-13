import { Code2, Palette, Rocket, Users } from "lucide-react";

export const feature = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable and scalable code that follows best practice such as SOLID principles",
  },
  {
    icon: Palette,
    title: "Modern Design",
    desc: "Creating a visually appealing interface with attention to details",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Building fast and optimized application",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Can work effectively both in teams or independently, and communicating ideas",
  },
];

export const project = [
  {
    image: "/about/syncboard-website.png",
    title: "Syncboard",
    description:
      "Project management website where you can set up, collaborate with other members.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    repo: [
      {
        label: "Frontend",
        url: "https://github.com/Tda20091/syncboard-web",
      },
      {
        label: "Backend",
        url: "https://github.com/Tda20091/syncboard-api",
      },
    ],
    live_url: "https://syncboard-tope.vercel.app/",
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "Reactjs" },
      { name: "Typescript" },
      { name: "Javascript" },
      { name: "Tailwind CSS" },
      { name: "Nextjs" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Nodejs" },
      { name: "Expressjs" },
      { name: "Posgress" },
      { name: "MySql" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [{ name: "Postman" }, { name: "Git" }],
  },
];
