const navbar = document.getElementById("nav");
const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".link-container");
const links = document.querySelector(".links");
const navHeight = navbar.getBoundingClientRect().height;


navToggle.addEventListener("click", function () {
  const linkHeight = links.getBoundingClientRect().height;
  const containerHeight = linkContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linkContainer.style.height = `${linkHeight}px`;
    navToggle.classList.add("active");
  } else {
    linkContainer.style.height = 0;
    navToggle.classList.remove('active');
  }
});

// Fixed Nav |Add fixed nav class 
window.addEventListener("scroll", function () { 
  const ScrollHeight = window.scrollY || window.pageYOffset;

  if (ScrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
