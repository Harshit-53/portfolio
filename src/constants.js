// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import mcLogo from "./assets/tech_logo/mc.png";

// Experience Section Logo
import certifyoLogo from "./assets/company_logo/certifyo.jpg";
// Education Section Logo's
import clglogo from "./assets/education_logo/clg_logo.png";
import schoollogo from "./assets/education_logo/school_logo.jpg";

// Project Section Logo's
import chattylogo from "./assets/work_logo/chatty_logo.png";
import visionlogo from "./assets/work_logo/vision_logo.png";
import skillsynclogo from "./assets/work_logo/skillsync_logo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: certifyoLogo,
    role: "Full Stack Developer Intern",
    company: "CertifyO",
    date: "May 25, 2025 – June 25, 2025",
    desc: "Contributed to the development and enhancement of CertifyO’s e-learning platform and official website. Focused on backend development for the interview questions module, designing and implementing RESTful APIs and integrating them with MongoDB. Utilized the MERN stack to build scalable features and collaborated effectively in a remote, part-time agile team.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },

  // {
  //   id: 1,
  //   img: certifyoLogo,
  //   role: "Fullstack Developer",
  //   company: "CertifyO",
  //   date: "May 2025 - Jun 2025",
  //   desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React JS",
  //     "TypeScript",
  //     "Node JS",
  //     "Tailwind CSS",
  //     "MongoDb",
  //     "Redux",
  //     " Next Js",
  //   ],
  // },
];

export const education = [
  {
    id: 0,
    img: clglogo,
    school:
      "Indian Institute of Information Technology Design and Manufacturing Jabalpur",
    date: "November 2022 - May 2026",
    grade: "7.1 CGPA",
    desc: "Currently pursuing a Bachelor of Technology in Electronics and Communication Engineering at IIIT Jabalpur. Focused on building a career in software development and web technologies through hands-on projects and continuous learning.",
    degree: "Bachelor of Technology - B.Tech (ECE)",
  },
  {
    id: 1,
    img: schoollogo,
    school: "Jawahar Navodaya Vidyalaya, Chhindwara",
    date: "July 2020 - March 2021",
    grade: "80.8%",
    desc: "Completed Class 12th from JNV Chhindwara with a focus on Physics, Chemistry, and Mathematics. Developed strong problem-solving skills and a foundational interest in technology.",
    degree: "Senior Secondary (Class XII) - Science (PCM)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Chatty – Realtime Chat App",
    description:
      "A responsive real-time chat application enabling instant two-way messaging using Socket.IO. Integrated Cloudinary for profile picture uploads, JWT-based user authentication, and a dynamic multi-theme feature with DaisyUI. Built using the MERN stack with a secure and scalable backend.",
    image: chattylogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "DaisyUI",
      "Tailwind CSS",
    ],
    github: "https://github.com/Harshit-53/realtime-chat-app",
    webapp: "https://realtime-chat-app-fxm4.onrender.com/",
  },
  {
    id: 1,
    title: "VisionaryAi – Text to Image Generator",
    description:
      "An AI-powered text-to-image generator built using the MERN stack and ClipDrop API. Features include user authentication, encrypted MongoDB storage, a credit-based image generation system with Stripe and Razorpay integration, and secure deployment on Vercel.",
    image: visionlogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ClipDrop API",
      "Stripe",
      "Razorpay",
      "Tailwind CSS",
    ],
    github: "https://github.com/Harshit-53/VisionaryAi",
    webapp: "https://visionary-ai-qrg8.vercel.app/",
  },
  {
    id: 2,
    title: "SkillSync – Job Portal",
    description:
      "A full-featured job portal connecting job seekers and employers. Built with React.js and Node.js, it features job listings, advanced search, application tracking, and secure Auth0-based authentication. Frontend deployed on Vercel and backend on Render for high availability.",
    image: skillsynclogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Auth0",
      "Tailwind CSS",
    ],
    github: "https://github.com/Harshit-53/SkillSync",
    webapp: "https://skillsync-bice.vercel.app/",
  },
];
