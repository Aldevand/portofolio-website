/**
 * data.js - Data Source untuk Portfolio
 * Memisahkan data dari tampilan (Clean Code Principle)
 */

export const skillsData = [
  {
    name: "HTML5 & Semantic Web",
    desc: "Struktur web semantik, aksesibilitas (a11y), SEO-friendly",
    icon: "🌐",
    level: "85%"
  },
  {
    name: "CSS3 & Modern Layout",
    desc: "Flexbox, CSS Grid, Custom Properties, Responsive Design",
    icon: "🎨",
    level: "80%"
  },
  {
    name: "JavaScript (ES6+)",
    desc: "DOM manipulation, Events, Fetch API, Async/Await, Modular JS",
    icon: "⚡",
    level: "75%"
  },
  {
    name: "Git & Version Control",
    desc: "Branching, commit conventions, GitHub workflow",
    icon: "🐙",
    level: "70%"
  },
  {
    name: "Responsive & Mobile-First",
    desc: "Desain adaptif untuk HP, tablet, laptop, dan layar besar",
    icon: "📱",
    level: "85%"
  },
  {
    name: "Web Performance & DevTools",
    desc: "Debugging, Lighthouse audit, optimasi aset gambar dan font",
    icon: "🚀",
    level: "70%"
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "web",
    desc: "Website portofolio interaktif responsif dengan dukungan Dark Mode, modular JavaScript, dan semantic HTML5.",
    tech: ["HTML5", "CSS3", "JavaScript ES6"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    badge: "Featured"
  },
  {
    id: 2,
    title: "Task & Note Manager",
    category: "app",
    desc: "Aplikasi manajemen tugas harian dengan fitur LocalStorage, filter status (selesai/belum), dan pencarian instan.",
    tech: ["JavaScript", "DOM API", "LocalStorage"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    badge: "Web App"
  },
  {
    id: 3,
    title: "Weather Dashboard App",
    category: "app",
    desc: "Aplikasi ramalan cuaca interaktif dengan integrasi Public OpenWeather API, geolokasi, dan dynamic background.",
    tech: ["Fetch API", "Async/Await", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    badge: "API Project"
  },
  {
    id: 4,
    title: "Product Showcase Landing Page",
    category: "landing",
    desc: "Landing page modern produk teknologi dengan animasi scroll interaktif, pricing toggle, dan FAQ accordion.",
    tech: ["CSS Grid", "Flexbox", "IntersectionObserver"],
    demoUrl: "#",
    githubUrl: "https://github.com",
    badge: "UI/UX"
  }
];
