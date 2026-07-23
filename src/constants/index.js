const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "QA Testing",
    link: "#qa",
  },
];

const words = [
  { text: "Backend", imgPath: "/images/ideas.svg" },
  { text: "Data", imgPath: "/images/concepts.svg" },
  { text: "LLMs", imgPath: "/images/designs.svg" },
  { text: "Solutions", imgPath: "/images/code.svg" },
  { text: "Backend", imgPath: "/images/ideas.svg" },
  { text: "Data", imgPath: "/images/concepts.svg" },
  { text: "LLMs", imgPath: "/images/designs.svg" },
  { text: "Solutions", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7, suffix: "°", label: "Trimestre SENA ADSI" },
  { value: 3, suffix: "+", label: "Proyectos Desarrollados" },
  { value: 60, suffix: "+", label: "Issues Gestionadas" },
  { value: 35, suffix: "/35", label: "Tests Pasando" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/python.svg",
    name: "Python",
  },
  {
    imgPath: "/images/logos/node.png",
    name: "Node.js",
  },
  {
    imgPath: "/images/logos/react.png",
    name: "React",
  },
  {
    imgPath: "/images/logos/git.svg",
    name: "Git",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Backend Development",
    desc: "Building robust APIs and services with NestJS, TypeScript, Python/Flask, and FastAPI. Focused on scalable architecture and clean code.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Data Analytics & LLMs",
    desc: "Integrating large language models and data-driven solutions for business intelligence, predictive analytics, and process automation.",
  },
  {
    imgPath: "/images/time.png",
    title: "Project Management & QA",
    desc: "Leading teams, managing 60+ issues with clear acceptance criteria, and ensuring quality through pytest, JMeter, and structured QA processes.",
  },
];

const techStackIcons = [
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "NestJS / Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "GitHub & Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const techStackImgs = [
  {
    name: "TypeScript",
    imgPath: "/images/logos/typescript.svg",
  },
  {
    name: "Flask",
    imgPath: "/images/logos/flask.svg",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/docker.svg",
  },
  {
    name: "Figma",
    imgPath: "/images/logos/figma.svg",
  },
  {
    name: "Jira",
    imgPath: "/images/logos/jira.svg",
  },
  {
    name: "SQL",
    imgPath: "/images/logos/sql.svg",
  },
  {
    name: "FastAPI",
    imgPath: "/images/logos/fastapi.svg",
  },
];

const expCards = [
  {
    review: "Led the backend architecture and project management for EVA, a privacy-first menstrual health PWA. Designed SRP-compliant FastAPI services, managed 60+ issues with acceptance criteria, and maintained a 3NF database schema.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Backend Lead & Project Manager — EVA",
    date: "2024 — Present",
    responsibilities: [
      "Designed and implemented FastAPI backend with SRP-based architecture",
      "Managed 60+ GitHub issues with detailed acceptance criteria and sprint planning",
      "Maintained 3NF database schema for menstrual health data privacy",
      "Integrated Prophet for predictive health analytics",
    ],
  },
  {
    review: "Migrated legacy Tkinter desktop app to Flask web platform with Material Design 3. Implemented role-based access control and achieved 35/35 passing tests. Currently deployed on Render.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Developer & PM — AgenciaCode Studio",
    date: "2024 — Present",
    responsibilities: [
      "Migrated Tkinter application to Flask web platform with Material Design 3",
      "Implemented role-based access control system for admin/user permissions",
      "Achieved 35/35 tests passing with pytest",
      "Managed deployment pipeline on Render",
    ],
  },
  {
    review: "Conducted comprehensive QA testing for GymFit360, designing and executing 32 test cases, stress testing with JMeter, and generating PDF reports with visual evidence.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "QA Tester — GymFit360 (External)",
    date: "2024",
    responsibilities: [
      "Designed and executed 32 test cases covering functional and edge scenarios",
      "Performed stress testing with JMeter and documented performance metrics",
      "Generated PDF reports with graphical evidence of test results",
      "Identified discrepancies in seed data, capacity values, and JMeter error metrics",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const qaCases = [
  {
    title: "Evaluación QA — GymFit360",
    subtitle: "Proyecto desarrollado por un compañero de cohorte SENA — mi rol fue exclusivamente QA Testing",
    description:
      "Evaluación completa: 32 casos de prueba diseñados y ejecutados, pruebas de estrés con JMeter, generación de reportes en PDF, recolección de evidencia gráfica. Identifiqué discrepancias en seed data, valores de capacidad y métricas de error de JMeter.",
    status: "completed",
  },
];

const projects = [
  {
    title: "EVA — PWA de Salud Menstrual",
    description:
      "Aplicación web progresiva privacy-first para salud menstrual. Backend lead (FastAPI, arquitectura SRP) y Project Manager (documentación de 60+ issues, criterios de aceptación, esquema de BD en 3NF).",
    tech: ["FastAPI", "React/Vite", "Prophet", "Docker"],
    repo: "https://github.com/mmanosaslva/EVA",
    image: "/images/project1.png",
    badge: "En progreso",
    roles: "Backend Lead & Project Manager",
  },
  {
    title: "AgenciaCode Studio",
    description:
      "Sistema web con Material Design 3, control de acceso por roles y migración de Tkinter a Flask. 35/35 tests pasando con pytest.",
    tech: ["Flask", "Material Design 3", "pytest"],
    repo: "https://github.com/mmanosaslva/AgenciaCode_Studio",
    image: "/images/project2.png",
    badge: "En progreso",
    roles: "Backend Developer & Project Manager",
    demoNote: "Demo disponible bajo solicitud",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "http://www.linkedin.com/in/meriyei-manosalva-ferrer-b9a159389",
  },
  {
    name: "github",
    imgPath: "/images/logos/git.svg",
    url: "https://github.com/mmanosaslva",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  projects,
  qaCases,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
