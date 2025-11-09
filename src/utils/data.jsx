import {
    Code2,
    GraduationCap,
    Briefcase,
    Heart,
    Coffee,
    BookOpen,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PORTFOLIO from "../assets/images/portfolio.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
// import PROJECT_IMG_4 from "../assets/images/project-4.png"
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "Javascript", level: 88, color: "bg-red-200" },
            { name: "HTML", level: 90, color: "bg-blue-300" },
            { name: "CSS3", level: 85, color: "bg-pink-200" },
            { name: "React", level: 95, color: "bg-blue-200" },
            { name: "Tailwind CSS", level: 92, color: "bg-cyan-200" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Springboot", level: 85, color: "bg-yellow-100" },
            { name: "Node.js", level: 90, color: "bg-green-200" },
            { name: "Express.js", level: 88, color: "bg-purple-200" },
            { name: "GraphQL", level: 80, color: "bg-pink-100" },
            { name: "REST APIs", level: 92, color: "bg-orange-100" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage",
        skills: [
            { name: "MongoDB", level: 88, color: "bg-green-300" },
            { name: "MySQL", level: 85, color: "bg-blue-300" },
            { name: "Redis", level: 80, color: "bg-red-200" },
            { name: "Firebase", level: 78, color: "bg-yellow-200" },
            { name: "Prisma", level: 82, color: "bg-indigo-300" },
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            { name: "Docker", level: 82, color: "bg-blue-300" },
            { name: "AWS", level: 78, color: "bg-orange-300" },
            { name: "Vercel", level: 90, color: "bg-cyan-300" },
            { name: "Git", level: 95, color: "bg-orange-300" },
            { name: "CI/CD", level: 75, color: "bg-purple-300" },
        ],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Notion",
    "Slack",
];

export const STATS = [
    { number: "20+", label: "Projects Completed" },
    { number: "NA", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "NA", label: "Client Satisfaction" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Interactive Developer Portfolio",
        description:
            "A responsive personal portfolio built with React, Tailwind CSS, Framer Motion, Lucide React, and React Icons. It features smooth animations, theme toggle for light/dark mode, and a clean, modern design that adapts seamlessly to all devices.",
        image: PORTFOLIO,
        tags: ["React", "Tailwind", "Framer motion", "Lucide React", "React Icons"],
        liveUrl: "subhash519-portfolio.netlify.app",
        githubUrl: "#",
        featured: true,
        category: "Frontend",
    },
    {
        id: 2,
        title: "Blog App with AI Post Generator",
        description:
            "A full-stack blog app using the MERN stack — with full Markdown support, tag filtering, and an integrated AI writing assistant.",
        image: PROJECT_IMG_2,
        tags: ["React", "Node.js", "MongoDB", "Tailwind"],
        liveUrl: "https://youtu.be/tUnGudIBBjQ",
        githubUrl: "#",
        featured: true,
        category: "Full Stack",
    },
    {
        id: 3,
        title: "Task Management App",
        description:
            "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard.",
        image: PROJECT_IMG_3,
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
        liveUrl: "https://youtu.be/fZK57PxKC-0",
        githubUrl: "#",
        featured: true,
        category: "Web App",
    },
    // {
    //     id: 4,
    //     title: "AI-Powered Interview Prep App",
    //     description:
    //         "A smart AI-powered Interview Preparation App using the MERN stack — along with the Gemini API for interview question generation.",
    //     image: PROJECT_IMG_4,
    //     tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    //     liveUrl: "https://youtu.be/yKB9oYM-ao4",
    //     githubUrl: "#",
    //     featured: false,
    //     category: "Web App",
    // },
    {
        id: 5,
        title: "Resume Builder App",
        description:
            "A fully functional Resume Builder App using the MERN stack along with Tailwind CSS for a clean, modern UI.",
        image: PROJECT_IMG_5,
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
        liveUrl: "https://youtu.be/q3u_fpkjLk8",
        githubUrl: "#",
        featured: false,
        category: "Web App",
    },
    {
        id: 6,
        title: "Expense Tracker App",
        description:
            "This app includes user authentication with JWT, income and expense tracking, interactive charts, and downloadable reports.",
        image: PROJECT_IMG_6,
        tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
        liveUrl: "https://youtu.be/PQnbtnsYUho",
        githubUrl: "#",
        featured: true,
        category: "Web App",
    },
    {
        id: 7,
        title: "Polling App",
        description:
            "Polling app with features like user authentication, creating polls, voting, bookmarking, closing polls, and viewing results.",
        image: PROJECT_IMG_7,
        tags: ["React", "Framer Motion", "Tailwind", "Vercel"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Frontend",
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2023",
        title: "Started Coding Journey",
        company: "Self-taught",
        description:
            "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with coding.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2024",
        title: "First Internship",
        company: "TechStart Inc.",
        description:
            "Joined as a frontend intern, working with React and learning modern development practices. Contributed to live projects.",
        icon: Briefcase,
        color: "bg-green-500",
    },
    {
        year: "2026",
        title: "Computer Science Degree",
        company: "University of Technology",
        description:
            "Graduated with honors, specializing in web technologies and software engineering. Led the final year project on modern web architectures.",
        icon: GraduationCap,
        color: "bg-purple-500",
    },
    // {
    //     year: "2023",
    //     title: "Full Stack Developer",
    //     company: "Digital Solutions Ltd.",
    //     description:
    //         "Promoted to full-time developer role. Built end-to-end applications using MERN stack and led junior developers on projects.",
    //     icon: Rocket,
    //     color: "bg-orange-500",
    // },
    // {
    //     year: "2024",
    //     title: "Freelance & Open Source",
    //     company: "Independent",
    //     description:
    //         "Started freelancing and contributing to open source projects. Launched 3 successful web applications",
    //     icon: Award,
    //     color: "bg-pink-500",
    // },
    // {
    //     year: "2025",
    //     title: "Senior Developer",
    //     company: "Present",
    //     description:
    //         "Currently building innovative solutions and exploring new technologies like AI integration and advanced systems",
    //     icon: Zap,
    //     color: "bg-cyan-500",
    // },
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/subhash-519",
        color: "hover:text-gray-100",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/subhash-kumar-3b0105264/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "https://twitter.com",
        color: "hover:text-sky-400",
        bgColor: "hover:bg-sky-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:subhashkumar89519@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Uttarakhand, India",
    },
    {
        icon: Mail,
        label: "Email",
        value: "subhashkumar89519@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 6299089519",
    },
];