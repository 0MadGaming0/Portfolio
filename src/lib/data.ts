export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'AI' | 'Tools' | 'Languages';
  icon: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  usage: string;
  projects: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  challenges: string;
  lessons: string;
  image: string;
  techStack: string[];
  github: string;
  live: string;
  featured: boolean;
  category: 'AI' | 'Web' | 'Fullstack';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  metric: string;
}

export const PERSONAL_INFO = {
  name: "Madhav S Pillai",
  role: "Front-End Developer & UI Engineer",
  tagline: "Building modern digital experiences with beautiful interfaces and intelligent applications.",
  avatar: "/avatar.png",
  github: "https://github.com/0MadGaming0",
  linkedin: "https://www.linkedin.com/in/madhav-s-pillai",
  email: "madhavsp05@gmail.com",
  aboutShort: "Passionate Front-End Developer focused on building clean, responsive, and AI-powered web applications. I enjoy turning ideas into polished digital products with modern technologies and thoughtful user experiences.",
  story: "I once wanted to use a fitness application, but most useful features were locked behind expensive subscriptions. Instead of paying, I decided to build my own. That experience taught me that software should solve real problems and be accessible to everyone.",
  vision: "I don't just build interfaces—I build experiences that people enjoy using. My goal is to create software that is useful, beautiful, and accessible.",
};

export const STATS = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Technologies", value: 14, suffix: "" },
  { label: "GitHub Contributions", value: 500, suffix: "+" },
  { label: "Certificates Earned", value: 5, suffix: "+" },
];

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend", icon: "react", level: "Expert", usage: "Core framework for complex UI state management, custom hooks, and dynamic rendering.", projects: ["FitAI"] },
  { name: "Next.js", category: "Frontend", icon: "nextjs", level: "Expert", usage: "Server-side rendering, App router, optimized image loading, and API routes.", projects: ["FitAI"] },
  { name: "TypeScript", category: "Languages", icon: "typescript", level: "Advanced", usage: "Strict type safety, custom interfaces, and autocomplete speed across codebases.", projects: ["FitAI", "Skin Disease Detection"] },
  { name: "JavaScript", category: "Languages", icon: "javascript", level: "Expert", usage: "ES6+, async operations, event handling, DOM interactions, and DOM lifecycle.", projects: ["FitAI", "Skin Disease Detection"] },
  { name: "Tailwind", category: "Frontend", icon: "tailwind", level: "Expert", usage: "Utility-first CSS styling, responsive layout design, and design system integration.", projects: ["FitAI"] },
  { name: "Python", category: "Languages", icon: "python", level: "Advanced", usage: "Back-end scripting, AI model design, ResNet fine-tuning, and Flask APIs.", projects: ["Skin Disease Detection"] },
  { name: "Flask", category: "Backend", icon: "flask", level: "Advanced", usage: "REST API routing, model inference endpoints, and web server configuration.", projects: ["Skin Disease Detection"] },
  { name: "MongoDB", category: "Databases", icon: "mongodb", level: "Intermediate", usage: "NoSQL document storage, flexible user schemas, and indexing.", projects: ["FitAI"] },
  { name: "Firebase", category: "Databases", icon: "firebase", level: "Advanced", usage: "Real-time sync, OAuth login, storage, and firestore configurations.", projects: ["FitAI"] },
  { name: "Git", category: "Tools", icon: "git", level: "Advanced", usage: "Version control, branching strategies, and collaboration workflow.", projects: ["FitAI", "Skin Disease Detection"] },
  { name: "GitHub", category: "Tools", icon: "github", level: "Advanced", usage: "CI/CD integration, pull requests review, and open-source contribution.", projects: ["FitAI", "Skin Disease Detection"] },
  { name: "Figma", category: "Tools", icon: "figma", level: "Advanced", usage: "Vector layout design, responsive prototyping, and component libraries definition.", projects: ["FitAI"] },
  { name: "Groq API", category: "AI", icon: "groq", level: "Advanced", usage: "Ultra-fast LLM inference, function calling, and contextual response pipelines.", projects: ["FitAI"] },
  { name: "REST APIs", category: "Backend", icon: "rest", level: "Expert", usage: "JSON structure design, rate-limiting, authentication protocols, and error management.", projects: ["FitAI", "Skin Disease Detection"] }
];

export const PROJECTS: Project[] = [
  {
    id: "fitai",
    title: "FitAI",
    tagline: "AI-Powered Fitness & Nutrition Ecosystem",
    description: "A comprehensive AI-driven health and workout ecosystem providing custom training planners, exercise lookup tables, nutrition recommendations, BMI logs, and real-time tracking.",
    problem: "Most full-featured fitness applications lock advanced features, custom schedules, and nutritional calculators behind premium subscriptions, restricting access to users looking for guidance.",
    approach: "Built a fully integrated client-side system powered by React & Next.js, combined with serverless backend configurations and ultra-fast LLM inference API triggers. Users can generate contextual, dynamic plans based on physical properties, goal metrics, and food constraints without standard bottlenecks.",
    challenges: "Synchronizing dynamic charts, weight metrics, and custom AI workout routines dynamically without triggering heavy database overhead or slow rendering patterns.",
    lessons: "Leveraging local state caching structures and highly efficient indexing arrays to coordinate complex client-side calculations and immediate feedback transitions.",
    image: "fitai_dashboard",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind", "Groq API", "Firebase", "MongoDB"],
    github: "https://github.com/0MadGaming0/FitAI",
    live: "https://fitai-go.vercel.app/",
    featured: true,
    category: "AI"
  },
  {
    id: "skin-disease",
    title: "Skin Disease Detection",
    tagline: "AI Image Classification & Medical Advisor",
    description: "Deep learning skin lesion classification system that detects diseases with confidence metrics and provides an integrated, patient-centered chatbot support.",
    problem: "Dermatological consultations are often slow, expensive, and unavailable in remote regions, resulting in ignored lesions that could benefit from early warnings.",
    approach: "Designed a ResNet18 convolutional model trained on the HAM10000 dataset, deployed via a Python Flask API. Integrated a polished React dashboard allowing image uploads, high-accuracy prediction, and an interactive LLM chat helper.",
    challenges: "Minimizing latency of model inferences on high-resolution image uploads while preserving model accuracy and ensuring context limits on the medical chatbot.",
    lessons: "Understood the details of image compression pipelines, tensor operations, and the importance of fallback logic in medical warning contexts.",
    image: "skin_disease_prediction",
    techStack: ["Python", "Flask", "React", "ResNet18", "HAM10000", "Tailwind"],
    github: "https://github.com/0MadGaming0/Skin-Disease-Detection",
    live: "https://skin-disease-demo.vercel.app",
    featured: true,
    category: "AI"
  },
  {
    id: "future-placeholder",
    title: "Future Project",
    tagline: "Under Research & Development",
    description: "An upcoming decentralized data visualization engine utilizing next-gen interactive libraries to render massive network graphs directly in browser viewports.",
    problem: "Rendering large-scale relational database models slows browsers down to single-digit framerates.",
    approach: "Integrating Canvas pipelines, Web Workers, and WebGL buffers for maximum performance.",
    challenges: "Complex spatial layout algorithms (force-directed) run synchronously, blocking browser main thread rendering.",
    lessons: "Utilizing offscreen canvases and offloaded worker threads to retain buttery smooth 60fps viewports.",
    image: "future_project",
    techStack: ["React", "Three.js", "WebWorkers", "WebGL"],
    github: "#",
    live: "#",
    featured: false,
    category: "Fullstack"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "IEEE CS SBC SBCE Webmaster",
    company: "IEEE CS SBC SBCE",
    period: "2025 - Present",
    description: [
      "Designing, coding, and maintaining the official IEEE Computer Society Student Branch Chapter web portal.",
      "Managing server hosting configurations, domain setups, and accessibility rules to ensure standard-compliant delivery.",
      "Coordinating feature rollouts, membership event trackers, and digital assets."
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "Git", "GitHub Pages", "Figma"]
  },
  {
    role: "IEEE SB SBCE Web Team",
    company: "IEEE SB SBCE",
    period: "2024 - 2025",
    description: [
      "Collaborated with team members to design, develop, and maintain the web presence of the SBCE Student Branch.",
      "Optimized site pages for faster loads, responsive layouts, and cross-browser support.",
      "Created landing pages and registration dashboards for major student branch tech events and workshops."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"]
  },
  {
    role: "Outreach Lead",
    company: "IEEE SB SBCE",
    period: "2024 - 2025",
    description: [
      "Coordinated cross-campus technology campaigns, bringing in participants for development bootcamps and tech events.",
      "Orchestrated public relations strategies and partnered with campus student chapters to promote IEEE events.",
      "Mentored junior members on event planning, technical delivery, and community building practices."
    ],
    skills: ["Leadership", "Community Outreach", "Event Management", "Public Relations"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Projects Built",
    description: "Designed and developed AI-powered and full-stack applications using React, Flask, MongoDB, Python, JavaScript, and modern development tools.",
    metric: "5+"
  },
  {
    title: "Community Impact",
    description: "Organized workshops, technical sessions, outreach campaigns, hackathons, and community initiatives through IEEE CS SBC SBCE and TinkerHub.",
    metric: "10+ Events"
  },
  {
    title: "Continuous Learning",
    description: "Always exploring new technologies, frameworks, AI tools, and software engineering practices. Every week is an opportunity to learn something new.",
    metric: "∞"
  },
  {
    title: "Ideas to Reality",
    description: "Whenever an interesting idea comes to mind, I prototype it, experiment with it, and transform it into something tangible.",
    metric: "24/7"
  }
];
