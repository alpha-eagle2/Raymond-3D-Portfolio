import { amalitech3, meta, shopify, starbucks, westrock, } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    figma1,
    threads,
    typescript
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: figma1,
        name: "Figma",
        type: "Design",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Front-end Developer Intern",
        company_name: "AmaliTech",
        icon: amalitech3,
        iconBg: "#FFA500",
        date: "April 2025 - May 2025",
        points: [
            "Built a responsive Instagram-clone frontend with React, Chakra UI, and Firebase Auth & Firestore.",
            "Employed Agile sprints and full software development lifecycle.",
            "Collaborated with two backend engineers on REST API integration and CI/CD setup.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Helpdesk Support Intern",
        company_name: "WestRock Enterprise",
        icon: westrock,
        iconBg: "#0000FF",
        date: "Nov 2023 - Dec 2023",
        points: [
            "Delivered first-level technical support, resolving hardware and software issues across departments.",
            "Maintained and updated IT inventory systems, ensuring accurate asset tracking.",
            "Assisted in the setup and configuration of workstations and mobile devices.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/alpha-eagle2',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alpha---',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'Front-end Instagram Clone',
        description: 'Built a responsive Instagram-clone frontend with React, Chakra UI, and Firebase Auth & Firestore',
        link: 'https://github.com/Instagram-clone-Amalitech-2025/instagram-clone-web-app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Retail Tire Website',
        description: 'Increased client’s online engagement and revenue by developing a front-end website using HTML, CSS, and JavaScript. Designed a responsive user interface and ensured cross-browser compatibility.',
        link: 'https://github.com/Alpha-eagle/DCIT-208-Web-App-Project',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'UI Design for Car Spare-part Website',
        description: 'Enhanced user engagement and aesthetics for a car spare parts website and an architecture firm by creating intuitive and visually appealing designs in Figma.',
        link: 'https://www.figma.com/design/w9YlHovAbz3Q4ATktsuamS/Group-88?m=auto&t=lazSZODRZry7JdNo-6',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'Pharmacy Management System',
        description: 'Streamlined inventory management for a local pharmacy by building a system that allows the pharmacist to add, search, and view detailed drug and supplier information. Leveraged data structures and algorithms to enhance efficiency and user experience.',
        // link: 'https://github.com/adrianhajdin/social_media_app',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];