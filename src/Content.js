// import images
import Hero_person from "./assets/images/Hero/person2.png";

import figma from "./assets/images/Skills/figma.png";
import mysql from "./assets/images/Skills/sql.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import php from "./assets/images/Skills/php.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/wtf_novel.png";
import project2 from "./assets/images/projects/CDRL.png";
import project3 from "./assets/images/projects/shop_cake.png";
import project4 from "./assets/images/projects/wtf_music.png";
import project5 from "./assets/images/projects/wtf_chat.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "HT90",
    LastName: "Thinh",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "A design tool for UI/UX and prototyping.",
        logo: figma,
        describe: [
          "Interface design (UI)",
          "User experience (UX) design",
          "Create prototypes",
          "Use plugins and templates",
        ],
      },
      {
        name: "Node js",
        para: "Build web applications quickly and efficiently",
        logo: nodejs,
        describe: [
          "Build web applications using Node.js and Express.js.",
          "Connect to MySQL and MongoDB databases.",
          "Experience developing RESTful APIs.",
          "Knowledge of security (authentication & authorization).",
        ],
      },
      {
        name: "MySQL",
        para: "A popular relational database management system.",
        logo: mysql,
        describe: [
          "Database design",
          "SQL queries",
          "Data modeling",
          "Performance tuning",
        ],
      },
      {
        name: "React js",
        para: "Create Interactive Web App",
        logo: reactjs,
        describe: [
          "Have experience developing highly interactive web applications.",
          "Proficient in building diverse web applications.",
          "Using popular ReactJS libraries and frameworks, optimize application performance.",
          "Stay up to date with the latest ReactJS knowledge and technology.",
        ],
      },
      {
        name: "MongoDB",
        para: "A NoSQL database for modern applications.",
        logo: mongodb,
        describe: [
          "Document-oriented storage",
          "Scalability",
          "Flexible schema",
          "High performance",
        ],
      },
      {
        name: "PHP",
        para: "Build Professional Website",
        logo: php,
        describe: [
          "Knowledge of the language and object-oriented programming techniques.",
          "Understand data processing techniques, business logic, and web application security.",
          "Experience working with popular PHP frameworks like CodeIgniter.",
          "Connect and manipulate database: MySQLi",
          "Understanding of PHP security, protecting applications from attacks.",
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend Development",
        para: "Creating responsive and interactive user interfaces using the latest technologies to ensure a seamless user experience.",
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: "Building robust and scalable server-side applications with a focus on performance and security.",
        logo: services_logo2,
      },
      {
        title: "UI/UX Designing",
        para: "Designing user-friendly and visually appealing interfaces that enhance user satisfaction and engagement.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Light Novel Website",
        image: project1,
        link:'https://github.com/dawn1810/LightNovelWeb.git'
      },
      {
        title: "Training Point Evaluation System",
        image: project2,
        link:'https://github.com/phat-612/newCDRL.git'
      },
      {
        title: "Shop Cake Website",
        image: project3,
        link:'https://github.com/dragonccm/Cake.git'
      },
      {
        title: "Music Website",
        image: project4,
        link:'https://github.com/Hung-Thinhh/wtfMusic.git'
      },
      {
        title: "Chat Website",
        image: project5,
        link:'https://github.com/Hung-Thinhh/WTFChat.git'
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm a passionate web developer with a strong desire to contribute my skills to dynamic projects. I'm proficient in [list your key skills, e.g., HTML, CSS, JavaScript, React, etc.] and I'm eager to learn new technologies. I'm a team player and I'm confident in my ability to deliver high-quality work on time and within budget.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "hungthinhh2003@gmail.com",
        icon: GrMail,
        link: "mailto:hungthinhh2003@gmail.com",
      },
      {
        text: "+84 44034769",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "hungthinhh",
        icon: BsInstagram,
        link: "https://www.instagram.com/hungthinhh03/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
