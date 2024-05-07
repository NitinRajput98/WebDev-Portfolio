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

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

function updateButton({ buttonEl, isDark }) {
  // const newCta = isDark ? "Change to light theme" : "Change to dark theme";
  // use an aria-label if you are omitting text on the button
  // and using a sun/moon icon, for example
  // buttonEl.setAttribute("aria-label", newCta);
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
console.log(button, "btn Element");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
 * 4. Add an event listener to toggle the theme
 */
button.addEventListener("click", (event) => {
  console.log("click");
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});
