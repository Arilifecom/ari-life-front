//---These valiables From common.js---
// const navToggle = document.querySelector(".nav-toggle");
// const linkContainer = document.querySelector(".link-container");

// H2｜Typewriter Effect
window.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector('.animated-text');
  const sigleword = h2.textContent;
  h2.textContent = ''; 
  
  sigleword.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.06}s`; 
    h2.appendChild(span);
  });
});

// Remove mail-link-Icon
window.addEventListener("scroll", function () {
  const mailLink = document.querySelector(".mail-link-sp");
  const ScrollHeight = window.scrollY || window.pageYOffset;

  if (ScrollHeight > window.innerHeight) {
    mailLink.classList.add("remove-mail-link");
  } else {
    mailLink.classList.remove("remove-mail-link");
  }
});

//--- GSAP | ScrollTrigger ---

// Under-line | News section
gsap.to(".underline-path", {
  strokeDashoffset: 0,
  scrollTrigger: {
    trigger: ".under-line",  // アンダーラインを引く要素
    start: "top 70%",  // スクロール開始位置
    end: "top 50%",  // スクロール終了位置
    scrub: 1,  // スクロールに合わせてアニメーション
    
  }
});

// Slide-in | Survise section
gsap.utils.toArray(".slide-in").forEach((element) => {
  gsap.to(element, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: element,
      start: "top 70%",
      end: "top 50%",
      scrub: true,
    }
  });
});

// Fade-in | Flow section
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in").forEach((element) => {
  gsap.to( element, {
    opacity: 1,
    y: 0,
    duration: 2,  
  scrollTrigger: {
    trigger: element,
    start: "top 70%",
    end: "top 50%",
    scrub: 0.1,
  }
  });
});

// Progress Bar | Flow section
const mask = document.querySelector(".stroke");
const container = document.querySelector(".flow-cards-wrap");

gsap.to(mask, {
  strokeDashoffset: 0,// 線が描かれるようにする
  scrollTrigger: {
    trigger: container, // トリガーとなる要素
    start: "top 50%", // スクロール開始時
    scrub: 0.1, // スクロールと連動
    end: "bottom 70%",
    delay: 1
  }
});

// Fade-in | Q&A section
gsap.utils.toArray(".fade-in-q").forEach((element) => {
  gsap.to( element, {
    opacity: 1,
    y: 0,
    duration: 2,
  scrollTrigger: {
    trigger: element,
    start: "top 60%",
    end: "top 50%",
    scrub: 0.1,
    }
});

});

//--- GSAP | ScrollTo plugin---

function getSamePageAnchor (link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if(elem) {
    if(e) e.preventDefault();

    const targetPosition = elem.getBoundingClientRect().top + window.scrollY;
       
    gsap.to(window, {
      duration:0.7, 
      scrollTo: targetPosition});
    linkContainer.style.height = 0;
    navToggle.classList.remove('active');

  }
} 


// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('a[href]').forEach(a => {
  a.addEventListener('click', e => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);


 // Show-toggle Buttun | 'fllow senctin' and 'Q&A section'
 const showToggle = document.querySelectorAll(".show-toggle");
 const textBoxContainers = document.querySelectorAll('.detail-container');
 const texts = document.querySelectorAll('.detail-text-wrap');

 showToggle.forEach((btn, index) => {
  btn.addEventListener("click", function(){
    const textBoxContainer = textBoxContainers[index];
    const text = texts[index];

    const containerHeight = textBoxContainer.getBoundingClientRect().height;
    const textHeight = text.getBoundingClientRect().height;

    if(containerHeight === 0){
      textBoxContainer.style.height = `${textHeight}px`;
    }else{
      textBoxContainer.style.height = 0;
    }
    
    // flow-btn text changed on click
    if (btn.classList.contains("flow-btn")) {
      if (containerHeight === 0) {
        btn.textContent = "閉じる";
        btn.classList.add("opened");
      } else {
        btn.textContent = "詳しく";
        btn.classList.remove("opened");
      }
    }
        // question-btn text text changed on click
        if (btn.classList.contains("question-btn")) {
          if (containerHeight === 0) {
            btn.textContent = "ー";
            btn.classList.add("opened");
          } else {
            btn.textContent = "＋";
            btn.classList.remove("opened");
          }
        }
    
      });
});