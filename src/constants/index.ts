// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  backend,
  web,
  mobile,
  creator,
  javascript,
  typescript,
  nodejs,
  reactjs,
  mongodb,
  docker,
  git,
  tailwind,
  redux,
  threejs,
  css,
  project1,
  project2,
  project3,
  project4,
  project5,
  linkedin,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/BhargavvS",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud-Native & Kubernetes",
    icon: mobile,
  },
  {
    title: "REST API & System Design",
    icon: web,
  },
  {
    title: "DevOps & Observability",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: backend,
  },
  {
    name: "Golang",
    icon: web,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React / Next.js",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: redux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: css,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: threejs,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Backend Developer Intern",
    company_name: "Vistas Global Pvt Ltd",
    icon: backend,
    iconBg: "#383E56",
    date: "Feb 2026 - Aug 2026",
    points: [
      "Designed and deployed RBAC across tenant, project, and namespace scopes on a multi-tenant Kubernetes platform powered by Capsule — securing access for 10+ tenants and 50+ users.",
      "Developed and maintained 10+ Golang microservices and APIs for virtualization and cloud infrastructure across development, testing, debugging, and production support.",
      "Engineered VM live migration workflows with node affinity and NUMA-aware scheduling, reducing service disruption by ~40% across 20+ node clusters.",
      "Configured PostgreSQL high availability with CloudNativePG and deployed VictoriaMetrics in cluster mode — failover under 30s, ~30% lower storage overhead.",
      "Collaborated in an Agile/Scrum team of 8+ across QA, product, and engineering — test cases, production bug triage, and production-ready releases.",
    ],
  },
  {
    title: "B.E. Computer Science",
    company_name: "Dayananda Sagar Academy of Technology and Management, Bangalore",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2022 - 2026",
    points: [
      "CGPA 9.35 / 10.00 with strong foundation in data structures, REST APIs, system design, and OOP.",
      "Backend focus: Node.js, Express.js, Golang, PostgreSQL, MongoDB, Redis, Docker, and Kubernetes.",
      "4-star HackerRank (C Programming) and 70+ LeetCode problems solved.",
      "Hands-on with Git, Postman, Linux, debugging, SDLC, and Agile/Scrum collaboration.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS: {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}[] = [];

// Projects
export const PROJECTS = [
  {
    name: "StreamHouse",
    description:
      "Scalable video streaming platform with Express REST APIs (30% faster responses), Multer + Cloudinary uploads, JWT auth for 100+ users, and MongoDB-backed video operations.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/BhargavvS/VideoTape",
    live_site_link: "https://frontend-teal-beta-68.vercel.app/",
  },
  {
    name: "LearningStack",
    description:
      "Learning-focused full-stack application for organizing resources, tracking progress, and practicing concepts with clean REST APIs and a responsive interface.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/BhargavvS/learningStack",
    live_site_link: "https://learning-stack-eight.vercel.app/",
  },
  {
    name: "Email Job Scheduler",
    description:
      "Fault-tolerant email scheduling system with DB-first, queue-second commits, 3-case reconciliation, 2-level BullMQ + Redis Lua rate limiting, SHA-256 idempotency, and sub-90s failure detection.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "redis-bullmq",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/BhargavvS/email_scheduler",
    live_site_link: "https://email-scheduler-nine-sigma.vercel.app",
  },
  {
    name: "RAG Customer Support Assistant",
    description:
      "Retrieval-augmented customer support assistant that grounds LLM answers in indexed knowledge sources for accurate, context-aware responses.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "rag",
        color: "green-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link:
      "https://github.com/BhargavvS/RAG_Based_Customer_Support_Assistant",
    live_site_link:
      "https://github.com/BhargavvS/RAG_Based_Customer_Support_Assistant",
  },
  {
    name: "Malicious URL Detection",
    description:
      "Random Forest classifier trained on 10,000+ labelled URLs achieving 89.12% accuracy, flagging 1,000+ previously undetected phishing sites with ML-driven threat classification.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "random-forest",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link:
      "https://github.com/BhargavvS/malicious-url-detection-using-machine-learning",
    live_site_link:
      "https://github.com/BhargavvS/malicious-url-detection-using-machine-learning",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/bhargavs30/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/BhargavvS",
  },
] as const;
