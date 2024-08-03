import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    cmas,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    hub,
    git,
    pemex,
    free,
    uam,
    carrent,
    jobit,
    tripguide,
    pyt,
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
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cmas,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: pyt,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "GitHub",
      icon: hub,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Social Service and Internships",
      company_name: "PEMEX",
      icon: pemex,
      iconBg: "#E6DEDD",
      date: "Aug 2015 - Aug 2016",
      points: [
        "Inventory management in Excel.",
        "Maintenance of computer equipment.",
        "File administration, file management and database updating.",
        "Development of skills in data management, technical support, operational efficiency of the organization.",
      ],
    },
    {
      title: "Computer Engineering",
      company_name: "UAM Azcapotzalco",
      icon: uam,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Present",
      points: [
        "I acquired essential theoretical and practical knowledge to solve career problems in computing and complex problem solving.",
        "I learned Object Oriented Programming in college, acquiring fundamental skills and knowledge for software development.",
        "I learned to develop algorithms and data structures to solve everyday problems.",
        "I learned to design and manage databases, acquiring skills to model, query and optimize data, essential to solve storage problems.",
      ],
    },
    {
      title: "Autonomous learning",
      company_name: "freeCodeCamp",
      icon: free,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Present",
      points: [
        "I learned the languages that developers use to create web pages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.",
        "I learned the basics of JavaScript such as variables, arrays, objects, loops, functions, the DOM and much more.",
        "I learned how to style your site quickly with Bootstrap. I also learned how to add logic to your CSS styles and extend them with Sass.",
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
      name: "Car Rent",
      description:
        "Our Car rental is a streamlined project management tool designed to enhance productivity and team collaboration. It offers intuitive free map location, stripe integration and smtp email send capabilities to adapt to various workflows. Ideal for individuals and teams looking for an efficient way to online order car for rent and pay.",
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
      source_code_link: "https://github.com/DaftFunked/Car-Rental",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
