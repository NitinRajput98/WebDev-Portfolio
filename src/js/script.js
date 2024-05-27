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
const home = document.querySelector(".home");
const experienceBtn = document.querySelector(".experiece");
const skillsBtn = document.querySelector(".skills");

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
  if (
    e.target.href ===
    "https://drive.google.com/file/d/1RQNNcBXkhN_FSt3D9m5decfT3Tf8Ubaj/view?usp=sharing"
  )
    return;
  e.preventDefault();
  if (
    e.target.classList.contains("nav-item") &&
    !e.target.classList.contains("home")
  ) {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
});

scrollToTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

home.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

experienceBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(e.target.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});

skillsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(e.target.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////////////////////////Change Theme///////////////////////////////////////////////////////////////
const toggleBtn = document.getElementById("checkbox");

toggleBtn.addEventListener("change", function (e) {
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

/////////////////////////////////////Hamburger Menu Functionality ///////////////////////////////////////////////////////

const hamburger = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("dropdownMenu");

hamburger.addEventListener("click", () => {
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
});

//Close dropdown if clicked outside
document.addEventListener("click", (event) => {
  if (dropdownMenu.style.display === "none") return;
  if (
    !hamburger.contains(event.target)
    //  &&
    // !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.style.display = "none";
  }
});

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const navBar = document.querySelector(".navbar");
const sectionAbout = document.querySelector("#home");
window.addEventListener("DOMContentLoaded", function (e) {
  navBar.classList.remove("navbar--hidden");
  sectionAbout.classList.remove("section--about");
});
