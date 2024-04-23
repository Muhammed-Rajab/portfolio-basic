import "./style.css";
import gsap from "gsap";
import { generateGalleryCard } from "./utils.js";

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

document.querySelector("#gallery-btn").click();

/*******************
 * * WORK SECTION
 *******************/
const workCards = [...document.querySelectorAll(".work-card")];

workCards.forEach((card) => {
  const details = card.querySelector(".work-card-details");

  card.addEventListener("mouseenter", () => {
    gsap.fromTo(
      details,
      {
        opacity: 0,
        duration: 0.75,
        ease: "power4.inOut",
      },
      { bottom: 0, opacity: 1 }
    );
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(details, {
      opacity: 0,
      duration: 0.75,
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
