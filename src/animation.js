import gsap from "gsap";

export function wavyText(parent) {
  const text = parent.textContent;

  // * Create element for every character in text
  const characters = [];
  for (const ch of text) {
    const el = document.createElement("span");
    el.innerText = ch;
    if (ch !== " ") el.classList.add("inline-block");
    characters.push(el);
  }

  parent.innerHTML = "";
  parent.append(...characters);

  // * Animate individual characters
  for (const [i, el] of characters.entries()) {
    gsap.to(el, {
      y: -10,
      scale: 0.8,
      delay: i * 0.05,
      ease: "power4.inOut",
      duration: 0.1,
      onComplete: () => {
        gsap.to(el, { y: 0, scale: 1, delay: i * 0.01 });
      },
    });
  }
}
