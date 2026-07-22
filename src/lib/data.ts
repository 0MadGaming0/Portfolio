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
  { label: "GitHub Contributions", value: 200, suffix: "+" },
  { label: "Certificates Earned", value: 5, suffix: "+" },
];

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend", icon: "react", level: "Expert", usage: "Core framework for complex UI state management, custom hooks, and dynamic rendering.", projects: ["FitAI"] },
  { name: "Next.js", category: "Frontend", icon: "nextjs", level: "Expert", usage: "Server-side rendering, App router, optimized image loading, and API routes.", projects: ["FitAI"] },
  { name: "TypeScript", category: "Languages", icon: "typescript", level: "Advanced", usage: "Strict type safety, custom interfaces, and autocomplete speed across codebases.", projects: ["FitAI", "SkinScout"] },
  { name: "JavaScript", category: "Languages", icon: "javascript", level: "Expert", usage: "ES6+, async operations, event handling, DOM interactions, and DOM lifecycle.", projects: ["FitAI", "SkinScout"] },
  { name: "Tailwind", category: "Frontend", icon: "tailwind", level: "Expert", usage: "Utility-first CSS styling, responsive layout design, and design system integration.", projects: ["FitAI"] },
  { name: "Python", category: "Languages", icon: "python", level: "Advanced", usage: "Back-end scripting, AI model design, ResNet fine-tuning, and Flask APIs.", projects: ["SkinScout"] },
  { name: "Flask", category: "Backend", icon: "flask", level: "Advanced", usage: "REST API routing, model inference endpoints, and web server configuration.", projects: ["SkinScout"] },
  { name: "MongoDB", category: "Databases", icon: "mongodb", level: "Intermediate", usage: "NoSQL document storage, flexible user schemas, and indexing.", projects: ["FitAI"] },
  { name: "Firebase", category: "Databases", icon: "firebase", level: "Advanced", usage: "Real-time sync, OAuth login, storage, and firestore configurations.", projects: ["FitAI"] },
  { name: "Git", category: "Tools", icon: "git", level: "Advanced", usage: "Version control, branching strategies, and collaboration workflow.", projects: ["FitAI", "SkinScout"] },
  { name: "GitHub", category: "Tools", icon: "github", level: "Advanced", usage: "CI/CD integration, pull requests review, and open-source contribution.", projects: ["FitAI", "SkinScout"] },
  { name: "Figma", category: "Tools", icon: "figma", level: "Advanced", usage: "Vector layout design, responsive prototyping, and component libraries definition.", projects: ["FitAI"] },
  { name: "Groq API", category: "AI", icon: "groq", level: "Advanced", usage: "Ultra-fast LLM inference, function calling, and contextual response pipelines.", projects: ["FitAI"] },
  { name: "REST APIs", category: "Backend", icon: "rest", level: "Expert", usage: "JSON structure design, rate-limiting, authentication protocols, and error management.", projects: ["FitAI", "SkinScout"] }
];

export const PROJECTS: Project[] = [
  {
    id: "fitai",
    title: "FitAI",
    tagline: "AI-Powered Fitness Ecosystem",
    description: "A modern AI-powered fitness platform that combines personalized workout generation, nutrition guidance, BMI tracking, exercise libraries, and intelligent recommendations into one seamless experience.",
    problem: "Many fitness applications hide essential features behind subscriptions, making personalized training, nutrition planning, and progress tracking inaccessible to students and beginners.",
    approach: "Built a complete AI-powered fitness ecosystem using React, Next.js, Flask, MongoDB, and Groq AI.\n\nThe platform provides:\n• AI workout generation\n• Exercise database\n• Nutrition suggestions\n• BMI calculator\n• Progress tracking\n• User authentication\n• Personalized recommendations\n• Modern responsive dashboard",
    challenges: "• Designing an intuitive dashboard\n• Integrating AI responses naturally\n• Managing authentication securely\n• Optimizing performance\n• Creating a scalable architecture",
    lessons: "Building FitAI taught me how to combine frontend engineering, backend APIs, AI integration, authentication, and database management into a complete production-ready application.",
    image: "fitai_dashboard",
    techStack: ["React", "Next.js", "Flask", "Python", "MongoDB", "Tailwind CSS", "Groq API", "JWT"],
    github: "https://github.com/0MadGaming0/Fitness-App",
    live: "https://fitai-go.vercel.app/",
    featured: true,
    category: "AI"
  },
  {
    id: "skin-disease",
    title: "SkinScout",
    tagline: "Healthcare AI Platform",
    description: "An AI-assisted skin disease analysis platform that combines deep learning image classification with an intelligent medical assistant to provide educational skin health insights.",
    problem: "Access to dermatological expertise is often limited by cost, availability, and location. Early awareness of suspicious skin conditions can encourage timely professional consultation.",
    approach: "Developed an end-to-end AI application capable of classifying skin lesion images using a ResNet18 model trained on the HAM10000 dataset.\n\nIntegrated:\n• AI image prediction\n• Confidence scoring\n• Interactive chatbot\n• Flask backend\n• React frontend\n• Medical disclaimer system",
    challenges: "• Dataset imbalance\n• Image preprocessing\n• Model optimization\n• Prediction latency\n• Explainability",
    lessons: "This project strengthened my understanding of deep learning pipelines, computer vision, model deployment, API integration, and designing responsible AI experiences for healthcare applications.",
    image: "skin_disease_prediction",
    techStack: ["Python", "Flask", "React", "ResNet18", "HAM10000", "Tailwind CSS", "Groq API"],
    github: "https://github.com/0MadGaming0/SkinScout-Skin-Disease-Detector",
    live: "https://skin-disease-demo.vercel.app",
    featured: true,
    category: "AI"
  },
  {
    id: "future-placeholder",
    title: "BuildCode AI",
    tagline: "AI-Powered Practical Learning Engine",
    description: "An AI-powered learning platform where students master programming by building real-world projects instead of watching endless tutorials.",
    problem: "Most coding platforms teach syntax instead of problem-solving. Learners spend hours watching videos but struggle to build real applications, contribute to GitHub, or prepare for technical interviews.",
    approach: "Create an immersive learning platform where users learn by building. Instead of lectures, every lesson results in a deployable project.",
    challenges: "The platform adapts to each learner using AI, explains mistakes like a mentor, generates personalized roadmaps, and encourages continuous learning through hands-on practice.",
    lessons: "Create a completely free learning platform where students from anywhere in the world can become job-ready software engineers through practical experience rather than passive learning.",
    image: "future_project",
    techStack: ["React", "Next.js", "Node.js", "Python", "FastAPI", "MongoDB", "Docker", "Groq / OpenAI"],
    github: "#",
    live: "#",
    featured: true,
    category: "AI"
  },
  {
    id: "visitor-entry",
    title: "Visitor Entry System",
    tagline: "Fullstack Management Platform",
    description: "A complete system for tracking visitor check-ins and check-outs, consisting of a front-end client interface and a secure back-end REST API.",
    problem: "Manual visitor logs are slow, unsecure, and difficult to manage. Office spaces need a secure, automated, and easy-to-use digital system.",
    approach: "Designed a two-tier fullstack architecture. Built a React client for check-in/out and host alerts, paired with an Express API backend that manages data persistence with MongoDB.",
    challenges: "• Structuring secure token authentication\n• Managing active check-in sessions\n• Developing real-time host notifications\n• Ensuring responsive UI for tablet terminals",
    lessons: "Strengthened my fullstack skills by separating client concerns from secure backend API routing, database schema design, and asynchronous communication.",
    image: "visitor_entry",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    github: "https://github.com/0MadGaming0/Visitor-Entry-App",
    live: "#",
    featured: true,
    category: "Fullstack"
  },
  {
    id: "shopping-cart",
    title: "E-Commerce Shopping Cart",
    tagline: "Fullstack E-Commerce Experience",
    description: "An e-commerce storefront offering product catalog updates, cart caching, and a complete mockup order flow backed by a CRUD REST service.",
    problem: "E-commerce apps require low latency cart mutations and reliable state updates, which can be challenging to coordinate between the DB and client state.",
    approach: "Developed a secure React frontend with state-synced cart memory, alongside a Node/Express backend API for handling product databases and inventory records.",
    challenges: "• Implementing atomic cart count updates\n• Database indexing for fast catalog searches\n• Preventing race conditions on simultaneous item updates\n• Persisting guest cart sessions",
    lessons: "Learned how to coordinate frontend local storage cache with backend database synchronization and handle high-throughput REST transactions.",
    image: "shopping_cart",
    techStack: ["React", "Node.js", "Express", "MongoDB", "CSS3", "REST API"],
    github: "https://github.com/0MadGaming0/Shopping-Cart",
    live: "#",
    featured: false,
    category: "Fullstack"
  },
  {
    id: "ats-resume-builder",
    title: "ATS Resume Builder",
    tagline: "ATS-Optimized Resume Creator",
    description: "A modern web application built to help job seekers design, structure, and download resumes that are fully optimized for Automated Tracking Systems.",
    problem: "Job seekers often use complex image-heavy templates that ATS bots cannot parse, resulting in automatic rejections.",
    approach: "Created a pure HTML/CSS structure that formats resume data into standard text-parseable structures. Added an interactive dashboard for quick editing.",
    challenges: "• Guaranteeing exact print layout dimensions\n• Generating search-engine-readable text outputs\n• Offering intuitive live form inputs with realtime preview\n• Maximizing performance with native DOM updates",
    lessons: "Deepened my knowledge of semantic HTML structures, print-specific CSS rules, and client-side file rendering.",
    image: "resume_builder",
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    github: "https://github.com/0MadGaming0/resume-builder-ats",
    live: "#",
    featured: true,
    category: "Web"
  },
  {
    id: "ksrtc-ticket",
    title: "KSRTC Booking Portal",
    tagline: "Public Transit Ticket Booking Mockup",
    description: "A responsive ticket booking website mockup for the Kerala State Road Transport Corporation (KSRTC), focusing on user experience, schedule selectors, and seat reservations.",
    problem: "Legacy transit booking interfaces are often cluttered and confusing, making it difficult for users to quickly check schedules and book seats.",
    approach: "Re-imagined the user flow by building a clean, modern, and highly responsive frontend portal with intuitive routing grids and interactive seating charts.",
    challenges: "• Designing an intuitive layout for mobile screens\n• Managing state for interactive seat selection\n• Creating search filters for timings and bus categories\n• Ensuring fast page loading times with vanilla assets",
    lessons: "Learned to prioritize UX heuristics, typography scale, and responsive layout structures when dealing with multi-step transaction flows.",
    image: "ksrtc",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/0MadGaming0/Ksrtc-App",
    live: "#",
    featured: false,
    category: "Web"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "IEEE CS SBC SBCE Webmaster",
    company: "IEEE CS SBC SBCE",
    period: "2026 - Present",
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
    company: "TinkerHub SBCE",
    period: "2025 - 2026",
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
