import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  next,
  flask,
  amica,
  ecommerceapp,
  flaskapp,
  luaapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "SQL",

  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "CKEditor",

  // },
  // {
  //   name: "Sanity",

  // },
  // {
  //   name: "Stripe",

  // },
  {
    name: "Flask",
    icon: flask,
  },
];

const experiences = [
  {
    title: "Procument Specialist",
    company_name: "Amica SA",
    icon: amica,
    iconBg: "#E6DEDD",
    date: "October 2022 - Present",
    points: [
      "As a procurement specialist, I am responsible for managing the procurement process for organizations.",
      "This includes sourcing potential suppliers, negotiating contracts, processing purchase orders, managing inventory, budgeting, managing supplier relationships, and mitigating potential procurement risks.",
      "I have strong negotiation and communication skills, the ability to manage multiple projects simultaneously, proficiency in procurement software and tools, and demonstrated ability to identify and mitigate potential risks.",
    ],
  },
  {
    title: "Junior Automation Systems Specialist",
    company_name: "Amica SA",
    icon: amica,
    iconBg: "#E6DEDD",
    date: "March 2022 - October 2022",
    points: [
      "As a Junior Automation Systems Specialist, I have played a crucial role in ensuring the seamless operation of production machinery.",
      "My core responsibilities have included programming PLCs, as well as conducting regular system maintenance to ensure optimal performance.",
      "Additionally, I have leveraged my strong analytical skills to identify and troubleshoot technical issues that arise, devising innovative and effective solutions to minimize production downtime.",
    ],
  },
  {
    title: "Internship",
    company_name: "Amica SA",
    icon: amica,
    iconBg: "#E6DEDD",
    date: "March 2020 - March 2022",
    points: [
      "During my time in college, I worked part-time in an investments and maintenance department.",
      "In this role, I was responsible for assisting with the maintenance of the factory as well as contributing to investment projects.",
      "Some of my key duties included performing routine inspections of machinery, troubleshooting equipment malfunctions, and assisting with financial analysis and reporting for investment initiatives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hi mom",
    name: "My mom",
    designation: "CEO",
    company: "of my family",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "lorem Ipsum 1",
    designation: "Lorem",
    company: "Ipsum",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "lorem Ipsum 2",
    designation: "Lorem",
    company: "Ipsum",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "E-commerce App",
    description: "This project has been a valuable learning experience, and I have gained significant insights into the intricacies of developing an e-commerce app. Although the development process has been largely successful, I am currently struggling with one issue related to the deployment process with Vercel. Once I resove this issue, I plan to host the app to showcase its capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Strapi",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerceapp,
    source_code_link: "https://github.com/Dexeraz/ecommerce-college-app",
  },
  {
    name: "Flask CMS",
    description: "This is a CMS application with the objective of creating a user-friendly platform that enables users to log in and execute CRUD operations with ease. In the current semester, our app will undergo security evaluations in another class. Once the testing is complete, the link to the hosted app will be updated.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "CKEditor",
        color: "orange-text-gradient",
      },
    ],
    image: flaskapp,
    source_code_link: "https://github.com/Dexeraz/Flask_CMS",
  },
  {
    name: "Lua Script",
    description:
      "During the game development classes, the assignment was to create a script for three bots that would engage in combat against three bots developed by other college students. Once the class tournament concludes, the Github link containing the scripts will be updated.",
    tags: [
      {
        name: "Lua",
        color: "blue-text-gradient",
      },
    ],
    image: luaapp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
