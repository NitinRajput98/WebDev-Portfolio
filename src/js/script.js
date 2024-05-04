// Swiper code
var swiper = new Swiper(".mySwiper", {
  rewind: true,
  cssMode: true,
  // effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
////////////////////////////////////////////////

const navLinks = document.querySelector(".navlinks");
const navItems = [...document.querySelectorAll(".nav-item")];
const scrollToTopBtn = document.querySelector(".back-to-top");
const switchTheme = document.querySelector(".switch");

navLinks.addEventListener("mouseover", function (e) {
  if (e.target === navLinks) return;
  navItems.forEach((el) => {
    if (el !== e.target) {
      el.classList.add("anchor-blur");
    }
  });
});

navLinks.addEventListener("mouseout", function (e) {
  if (e.target === navLinks) return;
  navItems.forEach((el) => {
    if (el !== e.target) {
      el.classList.remove("anchor-blur");
    }
  });
});

navLinks.addEventListener("click", function (e) {
  // e.preventDefault();
  if (e.target.classList.contains("nav-item")) {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
});

scrollToTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

switchTheme.addEventListener("click", function (e) {
  console.log("Click");
});
