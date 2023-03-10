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
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "Python",

  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Next JS",

  // },
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
  // {
  //   name: "Flask",

  // },
];

const experiences = [
  {
    title: "Procument Specialist",
    company_name: "Amica SA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2022 - Present",
    points: [
      "As a procurement specialist, I am responsible for managing the procurement process for organizations. This includes sourcing potential suppliers, negotiating contracts, processing purchase orders, managing inventory, budgeting, managing supplier relationships, and mitigating potential procurement risks.",
      "I have strong negotiation and communication skills, the ability to manage multiple projects simultaneously, proficiency in procurement software and tools, and demonstrated ability to identify and mitigate potential risks.",
    ],
  },
  {
    title: "Junior Automation Systems Specialist",
    company_name: "Amica SA",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - October 2022",
    points: [
      "As a Junior Automation Systems Specialist, I have played a crucial role in ensuring the seamless operation of production machinery.",
      "My core responsibilities have included programming PLCs, as well as conducting regular system maintenance to ensure optimal performance.",
      "Additionally, I have leveraged my strong analytical skills to identify and troubleshoot technical issues that arise, devising innovative and effective solutions to minimize production downtime.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Dexeraz/ecommerce-college-app",
  },
  {
    name: "Lua Script",
    description: "Scrit for game development classes. The link will be updated after the tournament ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
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
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Dexeraz/Flask_CMS",
  },
];

export { services, technologies, experiences, testimonials, projects };
