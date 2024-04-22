import "./style.css";
import gsap from "gsap";

const workCards = [...document.querySelectorAll(".work-card")];

workCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const details = card.querySelector(".work-card-details");

    gsap.to(details, {
      ease: "power4.inOut",
      duration: 0.2,
      opacity: 1,
    });
  });

  card.addEventListener("mouseleave", () => {
    const details = card.querySelector(".work-card-details");

    gsap.to(details, {
      ease: "power4.inOut",
      duration: 0.2,
      opacity: 0,
    });
  });
});
