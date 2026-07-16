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
