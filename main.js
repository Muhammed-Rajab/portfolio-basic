import "./style.css";
import gsap from "gsap";
import { createWorkCard, generateGalleryCard } from "./utils.js";
import { wavyText } from "./src/animation.js";
import "./src/dark-theme.js";
import "./src/pointer.js";

// * Header section
const nameSpan = document.querySelector("#name-span");
wavyText(nameSpan);

// * Section selector buttons
const sectionSelectorBtns = document.querySelectorAll(".section-selector-btn");

sectionSelectorBtns.forEach((btn) => {
  const ID = btn.dataset.id;

  const activeSectionClasses = [
    "shadow-inner",
    "italic",
    "victor-mono",
    "bg-[#efefef]",
    "rounded-[200px]",
    "active-section",
    "font-black",
    "text-white",
    "dark:text-black",
  ];

  btn.addEventListener("click", (e) => {
    // * Remove the classes from current active class
    const activeSection = document.querySelector(`.active-section`);
    const activeSectionId = activeSection.dataset.id;
    activeSection.classList.remove(...activeSectionClasses);

    // * Hide the section of current active class
    document.querySelector(`#${activeSectionId}`).classList.toggle("hidden");

    // * Add class to btn
    btn.classList.add(...activeSectionClasses);

    // * Show the section of btn
    document.querySelector(`#${btn.dataset.id}`).classList.toggle("hidden");
  });
});

document.querySelector("#works-btn").click();

/*******************
 * * WORK SECTION
 *******************/
const worksSection = document.querySelector("#works-section");

const works = [
  {
    imgUrl: "/public/gallery/9.jpg",
    title: "Encrypto 🔒",
    stack: ["Node", "Electron"],
    desc: "Encrypto is a secure messaging application built using Node.js and Electron.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
  {
    imgUrl: "/public/gallery/10.jpg",
    title: "Ecommerce Website",
    stack: ["React", "Node.js", "MongoDB"],
    desc: "An online shopping platform with features like product browsing, cart management, and payment processing.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
  {
    imgUrl: "/public/gallery/11.jpg",
    title: "Portfolio Website",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "A personal portfolio website showcasing projects, skills, and contact information.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
  {
    imgUrl: "/public/gallery/12.jpg",
    title: "Social Media App",
    stack: ["React", "Firebase"],
    desc: "A social media platform for users to share posts, connect with friends, and explore trending topics.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
  {
    imgUrl: "/public/gallery/13.jpg",
    title: "Weather App",
    stack: ["Vue.js", "OpenWeatherMap API"],
    desc: "A weather forecasting application that provides current weather information and forecasts for different locations.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
  {
    imgUrl: "/public/gallery/14.jpg",
    title: "Task Manager",
    stack: ["Angular", "Node.js", "MongoDB"],
    desc: "A task management application to organize tasks, set deadlines, and track progress.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
  {
    imgUrl: "/public/gallery/15.jpg",
    title: "Recipe App",
    stack: ["React", "Redux", "Edamam API"],
    desc: "An application for discovering and saving recipes, with filtering options based on ingredients and dietary restrictions.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
  {
    imgUrl: "/public/gallery/9.jpg",
    title: "Fitness Tracker",
    stack: ["React Native", "Expo", "Firebase"],
    desc: "A mobile app for tracking fitness activities, setting goals, and monitoring progress.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
  {
    imgUrl: "/public/gallery/12.jpg",
    title: "Blog Website",
    stack: ["Django", "SQLite"],
    desc: "A blog platform for publishing articles, managing comments, and user authentication.",
    links: {
      yt: "",
      live: "",
      github: "",
    },
  },
];

works.forEach((work) => {
  const card = createWorkCard(
    work.title,
    work.desc,
    work.stack,
    work.links,
    work.imgUrl
  );

  worksSection.appendChild(card);

  // * Animation
  const img = card.querySelector("img");
  const details = card.querySelector(".work-card-details");

  card.addEventListener("mouseenter", () => {
    gsap.fromTo(
      details,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power4.inOut",
      },
      { bottom: 0, opacity: 1 }
    );
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(details, {
      opacity: 0,
      duration: 1.5,
      ease: "power4.inOut",
    });
  });
});

/*******************
 * * GALLERY SECTION
 *******************/

const gallery = [
  { url: "/public/gallery/1.jpg", size: "wide", igUrl: "" },
  { url: "/public/gallery/2.jpg", size: "tall", igUrl: "" },
  { url: "/public/gallery/3.jpg", size: "big", igUrl: "" },
  { url: "/public/gallery/4.jpg", size: "tall", igUrl: "" },
  { url: "/public/gallery/5.jpg", size: "wide", igUrl: "" },
  { url: "/public/gallery/6.jpg", size: "big", igUrl: "" },
  { url: "/public/gallery/7.jpg", size: "wide", igUrl: "" },
  { url: "/public/gallery/8.jpg", size: "big", igUrl: "" },
  { url: "/public/gallery/9.jpg", size: "tall", igUrl: "" },
  { url: "/public/gallery/10.jpg", size: "wide", igUrl: "" },
  { url: "/public/gallery/11.jpg", size: "tall", igUrl: "" },
  { url: "/public/gallery/12.jpg", size: "big", igUrl: "" },
  { url: "/public/gallery/13.jpg", size: "tall", igUrl: "" },
  { url: "/public/gallery/14.jpg", size: "wide", igUrl: "" },
  { url: "/public/gallery/15.jpg", size: "big", igUrl: "" },
];

const gallerySection = document.querySelector("#gallery-section");

gallery.forEach((obj) => {
  const card = generateGalleryCard(
    obj.url,
    ["wide", "tall"][Math.floor(Math.random() * 2)]
  );

  const cardDetails = card.querySelector(".gallery-card-detail");

  card.addEventListener("mouseenter", () => {
    gsap.to(cardDetails, {
      opacity: 1,
      ease: "power4.inOut",
      duration: 0.2,
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(cardDetails, {
      opacity: 0,
      ease: "power4.inOut",
      duration: 0.4,
    });
  });

  gallerySection.appendChild(card);
});
