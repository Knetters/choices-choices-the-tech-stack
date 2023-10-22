// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");

// add event listener
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

let text = document.getElementById("text");
let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  layer2.style.left = value * 0.3 + "px";
  layer1.style.left = value * -0.5 + "px";
  layer4.style.left = value * 0.3 + "px";
  layer5.style.left = value * 0.3 + "px";
  layer3.style.left = value * -0.3 + "px";
  layer2.style.top = value * 0.5 + "px";
  layer1.style.top = value * 1 + "px";
  layer3.style.top = value * 0.5 + "px";
});

let text2 = document.getElementById("text2");
let layer12 = document.getElementById("layer1-2");
let layer22 = document.getElementById("layer2-2");
let layer32 = document.getElementById("layer3-2");
let layer42 = document.getElementById("layer4-2");
let layer52 = document.getElementById("layer5-2");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text2.style.marginTop = value * 2.5 + "px";
  layer22.style.left = value * 0.3 + "px";
  layer12.style.left = value * -0.5 + "px";
  layer42.style.left = value * 0.3 + "px";
  layer52.style.left = value * 0.3 + "px";
  layer32.style.left = value * -0.3 + "px";
  layer22.style.top = value * 0.5 + "px";
  layer12.style.top = value * 1 + "px";
  layer32.style.top = value * 0.5 + "px";
});