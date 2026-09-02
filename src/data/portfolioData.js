export const personalInfo = {
  name: "Jane Doe",
  title: "Computer Science Student & Software Developer",
  introduction: "I build robust systems and clean interfaces. I am passionate about understanding how software works from the ground up, from backend architecture to frontend experiences.",
  about: "I'm a software engineer focused on building efficient, scalable, and maintainable systems. My interest lies in backend development, system design, and exploring the intricate workings of modern web infrastructure. I approach engineering with a focus on simplicity, readability, and performance.",
  email: "hello@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resume: "/resume.pdf"
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "C++", "Python"]
  },
  {
    category: "Frontend",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "REST APIs"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Linux", "Figma"]
  }
];

export const projects = [
  {
    name: "Distributed Task Queue",
    description: "A lightweight, in-memory task queue for background processing, built from scratch to understand concurrency and distributed system principles.",
    technologies: ["Java", "Sockets", "Multithreading"],
    github: "https://github.com",
    demo: null
  },
  {
    name: "Minimalist Analytics",
    description: "A privacy-first analytics dashboard tracking page views and unique visitors without cookies. Features a custom event processing pipeline.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    name: "Compiler Subset",
    description: "A lexer, parser, and code generator for a subset of the C programming language, designed as an academic exercise.",
    technologies: ["C++", "Flex", "Bison"],
    github: "https://github.com",
    demo: null
  }
];

export const experience = [
  {
    title: "Software Engineering Intern",
    company: "Tech Corp",
    date: "Summer 2025",
    description: "Developed and optimized microservices for the core user management platform. Improved API response times by 20% through efficient database querying and caching strategies."
  },
  {
    title: "B.S. Computer Science",
    company: "University of Technology",
    date: "2022 - 2026",
    description: "Focus on distributed systems, database design, and software engineering principles. Relevant coursework: Operating Systems, Algorithms, Computer Networks."
  }
];

export const currentlyLearning = [
  "Advanced System Design",
  "Go & Concurrency Patterns",
  "Kubernetes & Orchestration",
  "Database Internals"
];
