import "./style.css";
import gsap from "gsap";

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

// * Work cards animation
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

// * Adding random class to images in gallery
const galleryImageDivs = document
  .querySelector("#gallery-section")
  .querySelectorAll("div");
