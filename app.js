const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const fixedImage = document.querySelector("#fixed-image");

const elemC = document.querySelector("#elem-container");
elemC.addEventListener("mouseenter", function () {
  fixedImage.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixedImage.style.display = "none";
});

const elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", () => {
    var imageSrc = e.getAttribute("data-image");
    fixedImage.style.backgroundImage = `url(${imageSrc})`;
  });
});

const design = document.querySelector("#heading h1:first-child");
const project = document.querySelector("#heading h1:nth-child(2)");
const execution = document.querySelector("#heading h1:nth-child(3)");
const designContent = document.querySelector(".design-content");
const projectContent = document.querySelector(".project-content");
const executionContent = document.querySelector(".execution-content");
const bar = document.querySelector("#orange-head-bar");
const windowImage = document.querySelector("#window-image img");
let src = windowImage.getAttribute("src");

design.addEventListener("click", () => {
  design.style.color = "white";
  project.style.color = "rgba(255, 255, 255, 0.3)";
  execution.style.color = "rgba(255, 255, 255, 0.3)";
  windowImage.setAttribute("src", "assets/images/design.png");
  bar.style.top = "0";
  designContent.style.display = "block";
  projectContent.style.display = "none";
  executionContent.style.display = "none";
});
project.addEventListener("click", () => {
  project.style.color = "white";
  design.style.color = "rgba(255, 255, 255, 0.3)";
  execution.style.color = "rgba(255, 255, 255, 0.3)";
  windowImage.setAttribute("src", "assets/images/projects.webp");
  bar.style.top = "5vw";
  projectContent.style.display = "block";
  designContent.style.display = "none";
  executionContent.style.display = "none";
});
execution.addEventListener("click", () => {
  execution.style.color = "white";
  design.style.color = "rgba(255, 255, 255, 0.3)";
  project.style.color = "rgba(255, 255, 255, 0.3)";
  windowImage.setAttribute("src", "assets/images/execution.webp");
  bar.style.top = "10vw";
  executionContent.style.display = "block";
  designContent.style.display = "none";
  projectContent.style.display = "none";
});

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 100,
    freeMode: true,
  });
}
swiperAnimation();

const crsr = document.querySelector(".crsr");

window.addEventListener("mousemove", (e) => {
  crsr.style.left = e.x - 50 + "px";
  crsr.style.top = e.y - 50 + "px";
});

const menu = document.querySelector(".menu");
const fullScr = document.getElementById("full-scr");

menu.addEventListener("click", () => {
  let navImg = document.querySelector("nav img");

  fullScr.classList.toggle("active");
  navImg.classList.toggle("nav-active");
});

const loader = document.getElementById("loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 3000);

const env = document.querySelector("#loader h1:first-child");
setTimeout(() => {
  env.style.display = "none";
}, 1000);

const exp = document.querySelector("#loader h1:nth-child(2)");
setTimeout(() => {
  exp.style.display = "block";
}, 1000);
setTimeout(() => {
  exp.style.display = "none";
}, 2000);

const con = document.querySelector("#loader h1:nth-child(3)");
setTimeout(() => {
  con.style.display = "block";
}, 2000);
setTimeout(() => {
  con.style.display = "none";
}, 3000);
