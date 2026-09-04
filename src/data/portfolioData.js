export const personalInfo = {
  name: "Aditya Narayan Pradhan",
  title: "Computer Science Student & Software Developer",
  introduction: "I build robust systems and clean interfaces. I am passionate about understanding how software works from the ground up, from backend architecture to frontend experiences.",
  about: "I'm a software engineer focused on building efficient, scalable, and maintainable systems. My interest lies in backend development, system design, and exploring the intricate workings of modern web infrastructure. I approach engineering with a focus on simplicity, readability, and performance.",
  email: "pradhanaditya0725@gmail.com",
  github: "https://github.com/Aditya02-P",
  linkedin: "https://www.linkedin.com/in/aditya-pradhan-20232s45",
  resume: "/resuem.pdf"
};

export const primaryStack = [
  { name: "Java", role: "JVM & Concurrency" },
  { name: "Spring Boot", role: "Microservices" },
  { name: "C++", role: "Systems Programming" },
  { name: "Node.js", role: "Backend & APIs" },
  { name: "PostgreSQL", role: "Relational & Indexing" },
  { name: "Docker", role: "Containers & Linux" }
];

export const skills = [
  {
    category: "Backend & Systems",
    items: [
      { name: "Spring Boot", primary: true },
      { name: "Node.js", primary: true },
      { name: "Multithreading", primary: true },
      { name: "REST APIs", primary: true },
      { name: "Java Sockets", primary: true },
      { name: "Express", primary: false }
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "Java", primary: true },
      { name: "C++", primary: true },
      { name: "TypeScript", primary: true },
      { name: "JavaScript", primary: false },
      { name: "Python", primary: false }
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "PostgreSQL", primary: true },
      { name: "MySQL", primary: false },
      { name: "MongoDB", primary: false }
    ]
  },
  {
    category: "DevOps & Environment",
    items: [
      { name: "Docker", primary: true },
      { name: "Linux", primary: true },
      { name: "Git", primary: true },
      { name: "GitHub", primary: false }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", primary: true },
      { name: "Tailwind CSS", primary: false },
      { name: "HTML5", primary: false },
      { name: "CSS3", primary: false }
    ]
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
