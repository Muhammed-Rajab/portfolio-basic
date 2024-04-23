import "./style.css";
import gsap from "gsap";

const workCards = [...document.querySelectorAll(".work-card")];

workCards.forEach((card) => {
  const details = card.querySelector(".work-card-details");

  // card.addEventListener("mouseenter", () => {
  //   gsap.fromTo(
  //     details,
  //     {
  //       opacity: 0,
  //       duration: 0.75,
  //       ease: "power4.inOut",
  //     },
  //     { bottom: 0, opacity: 1 }
  //   );
  // });

  // card.addEventListener("mouseleave", () => {
  //   gsap.to(details, {
  //     opacity: 0,
  //     duration: 0.75,
  //     ease: "power4.inOut",
  //   });
  // });
});
