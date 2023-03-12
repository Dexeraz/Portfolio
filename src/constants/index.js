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
    description: "description 3",
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
    image: carrent,
    source_code_link: "https://github.com/Dexeraz/ecommerce-college-app",
  },
  {
    name: "Lua Script",
    description:
      "Scrit for game development classes. The link will be updated after the tournament ",
    tags: [
      {
        name: "Lua",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Flask CMS",
    description: "description 1",
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
    ],
    image: tripguide,
    source_code_link: "https://github.com/Dexeraz/Flask_CMS",
  },
];

export { services, technologies, experiences, testimonials, projects };
