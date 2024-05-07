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
// const switchTheme = document.querySelector(".switch");
const darkThemeIcon = document.querySelector(".fa-circle-half-stroke");
const lightThemeIcon = document.querySelector(".fa-sun");

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

///////////////////////////////////////////////////////////Change Theme///////////////////////////////////////////////////////////////
const toggleBtn = document.getElementById("checkbox");

toggleBtn.addEventListener("change", function (e) {
  console.log(this.checked);
  if (this.checked) {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
  document.body.classList.toggle("dark-mode");
});

// Apply initial theme preference based on system settings
window.onload = function () {
  let storedTheme = localStorage.getItem("theme");
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme) {
    if (storedTheme === "dark") {
      document.querySelector("html").setAttribute("data-theme", "dark");
      document.getElementById("checkbox").checked = false;
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
      document.getElementById("checkbox").checked = true;
    }
  } else if (prefersDark) {
    document.querySelector("html").setAttribute("data-theme", "dark");
    document.getElementById("checkbox").checked = false;
    localStorage.setItem("theme", "dark");
  }
};
