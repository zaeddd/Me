import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

export const personalInfo = {
  name: "Zaedrick Alvarico",
  role: "Web Developer",
  bio: "Hi, I’m Zaedrick, a Web Developer actively looking for opportunities. I specialize in building fast, responsive React applications and also have a strong interest in UI/UX design. I focus on creating clean, functional, and user-friendly digital experiences.",
  email: "zaedrickalvarico@gmail.com",
  location: "PH",
};

// export const projects = [1, 2, 3, 4, 5, 6];

export const projects = [
  {
    title: "Portfolio Website",
    tech: "React, Tailwind CSS, Framer Motion",
    desc: "Personal portfolio showcasing projects, skills, and Goals.",
    github: "https://github.com/zaeddd/Me",
  },
  {
    title: "E-Commerce Shop System",
    tech: "PHP, HTML, JavaScript",
    desc: "A full-stack thesis project featuring an e-commerce website with a customer-facing shop and an admin dashboard for product and order management.",
    github: "https://github.com/zaeddd/MQ-1",
  },
  {
    title: "WordPress Shop Pages",
    tech: "WordPress, UI Design",
    desc: "Created and edited shop pages and product layouts for small business websites.",
    github: "#",
  },
  {
    title: "Movie List",
    tech: "React, TMDB API, CSS",
    desc: "A responsive movie listing app that fetches and displays top movies using The Movie Database (TMDB) API with a clean and modern UI.",
    github: "https://github.com/zaeddd/react-movie",
  },
  {
    title: "Landing Page UI",
    tech: "React, Tailwind CSS",
    desc: "Responsive landing page focused on clean UI and conversion design.",
    github: "https://github.com/zaeddd/Landing-Page",
  },
  {
    title: "Barangay Management System",
    tech: "C++",
    desc: "Designed and implemented a barangay management program with a user interface to request and manage official forms, improving efficiency and organization.",
    github: "https://github.com/zaeddd/Brgy-management-system-using-C",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "#",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "#",
    color: "hover:text-blue-400",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "#",
    color: "hover:text-sky-400",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "#",
    color: "hover:text-red-400",
  },
];

export const experiences = [
  {
    title: "WordPress Developer",
    company: "Sert Technology, Inc. (Intern)",
    period: "2025",
    desc: "Managing and updating WordPress-based websites, including adding and editing pages for online shops. Also creating graphic designs for products and items for sale to enhance visual appeal and user engagement.",
    color: "violet",
  },
  // {
  //   title: "",
  //   company: "",
  //   period: "",
  //   desc: " ",
  //   color: "cyan",
  // },
  // {
  //   title: "",
  //   company: "",
  //   period: "",
  //   desc: "",
  //   color: "pink",
  // },
];

export const tools = [
  "Figma – UI/UX Design",
  "Adobe Illustrator –  Design",
  "VS Code – Code Editor",
  "Git & GitHub – Version Control",
  // "Docker – Containerization",
  "ChatGPT – Productivity",
];

export const goals = [
  "Secure a role as a Frontend or Web Developer",
  "Improve and master React and modern frontend tools",
  "Strengthen UI/UX design skills through real projects",
  "Build production-ready applications for real users",
];

export const achievements = [
  {
    title: "Web Projects Built",
    value: "2",
    desc: "Built responsive web projects using React, focusing on clean UI and smooth user experience.",
    color: "yellow",
  },
  {
    title: "WordPress Pages Managed",
    value: "5+",
    desc: "Created and updated shop pages and content using WordPress for small business websites.",
    color: "cyan",
  },
  {
    title: "UI/UX Practice",
    value: "Ongoing",
    desc: "Continuously improving UI/UX design skills through personal projects and redesign studies.",
    color: "pink",
  },
  {
    title: "Design Assets Created",
    value: "20+",
    desc: "Designed product graphics and visual assets for web and shop listings.",
    color: "violet",
  },
];

export const skills = [
  {
    category: "Frontend",
    skills: [
      "React / Next.js",
      "Tailwind CSS ",
      // "Framer Motion",
      "HTML / CSS / JS",
    ],
  },
  {
    category: "Backend",
    skills: ["PHP / MqSQL", "REST & GraphQL APIs"],
  },
  {
    category: "Design & Tools",
    skills: ["Figma /  Design", "Git", "ChatGPT / VS Code"],
  },
  {
    category: "Other",
    skills: ["C++", "Python", "Java", "SEO Basics", "Performance Optimization"],
  },
];

export const certificates = [
  "C++ Essentials 1: Intro to Programming for Beginners",
  "CompTIA IT Fundamentals+ (ITF+) Certification",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
];

export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
