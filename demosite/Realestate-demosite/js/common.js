// DATE
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// Sidebar-toggle
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
  toggleBtn.classList.toggle("active");
});

// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const navbar = document.querySelector(".nav-center");
let headerHeight = navbar.offsetHeight;

// 外部リンクまたはリロード時にハッシュ付きなら対応
const urlHash = window.location.hash;

if (urlHash) {
  window.scrollTo(0, 0);

  const target = document.querySelector(urlHash);
  if (target) {
    toggleBtn.classList.remove("active");
    const position =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;
    gsap.to(window, {
      scrollTo: position,
      duration: 1,
      ease: "power2.out",
    });
  }
}

// ページ内リンククリック時
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const target = document.querySelector(href);

    if (target) {
      const position = target.offsetTop - headerHeight;
      history.pushState(null, null, href); // URLハッシュの更新

      toggleBtn.classList.remove("active");
      sidebar.classList.remove("show-sidebar");

      gsap.to(window, {
        scrollTo: position,
        duration: 1,
        ease: "power2.out",
      });
    }
  });
});

gsap.set(".feadIn", { opacity: 0, y: 50 });

gsap.utils.toArray(".feadIn").forEach((el, i) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    delay: i * 0.03,
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none none",
      // markers: true,
    },
  });
});
