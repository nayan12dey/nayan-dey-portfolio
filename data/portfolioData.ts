export interface PersonalInfo {
  name: string;
  professionalTitle: string;
  location: string;
  phone: string;
  email: string;
  availabilityStatus: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface InterpersonalSkill {
  skill: string;
}

export interface ProjectLink {
  label: string;
  url: string | null;
}

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  techStack: string[];
  links: {
    live: ProjectLink;
    githubClient: ProjectLink;
    githubServer: ProjectLink;
  };
}

export interface EducationItem {
  degree: string;
  university: string;
  location: string;
  duration: string;
  cgpa: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  hero: HeroContent;
  about: string;
  skills: {
    technical: SkillCategory[];
    aiTools: string[];
    interpersonal: string[];
  };
  projects: Project[];
  experience: null | string;
  education: EducationItem[];
  languages: LanguageItem[];
  contact: {
    email: string;
    phone: string;
    location: string;
    socials: {
      github: string | null;
      linkedin: string | null;
    };
  };
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Nayan Dey",
    professionalTitle: "Full Stack Developer",
    location: "Kolkata, India",
    phone: "+91 6291838357",
    email: "nayan.dey.dev@gmail.com",
    availabilityStatus: "Open for Full Stack Developer opportunities",
  },

  hero: {
    headline: "Building reliable, user-focused web applications.",
    subheadline:
      "Full Stack Developer specializing in modern JavaScript, React/Next.js, Node.js, and MongoDB.",
    primaryCtaText: "View Projects",
    secondaryCtaText: "Get in Touch",
  },

  about:
    "I am a driven and detail-oriented Full Stack Developer focused on building reliable and user-focused web applications. With a strong foundation in modern JavaScript, React/Next.js, Node.js, and MongoDB, I apply structured problem-solving skills and a continuous learning mindset to solve real-world technical challenges and deliver practical value.",

  skills: {
    technical: [
      {
        category: "Frontend",
        items: [
          "JavaScript (ES6+)",
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Framer Motion",
          "HTML5",
          "CSS3",
        ],
      },
      {
        category: "Backend & Database",
        items: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "RESTful APIs",
          "Better Auth",
        ],
      },
      {
        category: "Tools & Platforms",
        items: ["Git", "GitHub", "Vercel", "Netlify", "VS Code", "Figma"],
      },
    ],
    aiTools: [
      "ChatGPT",
      "Claude AI",
      "Google Gemini",
      "Google Antigravity IDE",
    ],
    interpersonal: [
      "Problem Solving",
      "Team Collaboration",
      "Adaptability",
      "Time Management",
      "Communication",
    ],
  },

  projects: [
    {
      id: "recipehub",
      name: "RecipeHub",
      type: "Culinary Community Web Platform",
      description:
        "A culinary community web platform for browsing, publishing, and managing recipes with role-based access control and integrated payments.",
      features: [
        "Browse, publish, and manage recipes with secure Better Auth RBAC (User, Premium, Admin).",
        "Integrated Stripe checkout for premium memberships and exclusive recipe purchases.",
        "User dashboard with My Recipes, Favorites, and Purchases.",
        "Admin management tools.",
      ],
      techStack: [
        "Next.js",
        "React",
        "Better Auth",
        "Stripe",
        "MongoDB",
        "Tailwind CSS",
        "HeroUI",
        "Framer Motion",
      ],
      links: {
        live: { label: "Live Link", url: null },
        githubClient: { label: "GitHub Client", url: null },
        githubServer: { label: "GitHub Server", url: null },
      },
    },
    {
      id: "studynook",
      name: "StudyNook",
      type: "Study Room Booking Platform",
      description:
        "A study room booking platform supporting real-time scheduling, dynamic filtering, and listing management.",
      features: [
        "Browse and book study rooms with real-time time-slot conflict detection.",
        "Dynamic filtering by price, floor, and amenities.",
        "Secure JWT authentication with HTTP-only cookies.",
        "User and Room Owner management tools.",
        "Manage own listings, room bookings, and room details.",
      ],
      techStack: [
        "Next.js",
        "React",
        "Better Auth",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      links: {
        live: { label: "Live Link", url: null },
        githubClient: { label: "GitHub Client", url: null },
        githubServer: { label: "GitHub Server", url: null },
      },
    },
    {
      id: "notepilot-ai",
      name: "NotePilot AI",
      type: "AI Note-Taking Platform",
      description:
        "An AI-powered note-taking platform providing automated note generation, summarization, and rich text rendering.",
      features: [
        "AI-powered note generation.",
        "Note summarization.",
        "Rich Markdown rendering with React.",
        "Secure Login/Register authentication powered by Better Auth with MongoDB integration.",
        "Full note management system.",
        "Responsive glassmorphism UI built with HeroUI and Tailwind CSS.",
      ],
      techStack: [
        "Next.js",
        "React",
        "Better Auth",
        "MongoDB",
        "Tailwind CSS",
        "HeroUI",
        "Recharts",
      ],
      links: {
        live: { label: "Live Link", url: null },
        githubClient: { label: "GitHub Client", url: null },
        githubServer: { label: "GitHub Server", url: null },
      },
    },
  ],

  // Excluded to ensure zero unverified or invented history is rendered
  experience: null,

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      university: "JIS University",
      location: "Kolkata, India",
      duration: "2022 – 2026",
      cgpa: "8.6/10",
    },
  ],

  languages: [
    {
      language: "Bengali",
      proficiency: "Native",
    },
    {
      language: "Hindi",
      proficiency: "Fluent",
    },
    {
      language: "English",
      proficiency: "Intermediate",
    },
  ],

  contact: {
    email: "nayan.dey.dev@gmail.com",
    phone: "+91 6291838357",
    location: "Kolkata, India",
    socials: {
      github: "https://github.com/nayan12dey",
      linkedin: "https://www.linkedin.com/in/nayandey26/",
    },
  },
};