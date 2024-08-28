'use strict';



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
});

// Query all anchor links with href that starts with '#'
const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
    
    // Check if the link also needs to close the mobile navbar
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("nav-active");
    }
  });
});




/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});



/**
 * Element tilt effect
 */

const tiltElements = document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {

  /** get tilt element center position */
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;

}

addEventOnElements(tiltElements, "mousemove", initTilt);

addEventOnElements(tiltElements, "mouseout", function () {
  this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});



/**
 * Tab content
 */

const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {

  if (!(lastActiveTabBtn === this)) {

    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");

    this.classList.add("active");
    lastActiveTabBtn = this;

    const currentTabContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);

    currentTabContent.classList.add("active");
    lastActiveTabContent = currentTabContent;

  }

}

addEventOnElements(tabBtns, "click", filterContent);



/**
 * Custom cursor
 */

const cursors = document.querySelectorAll("[data-cursor]");
const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

window.addEventListener("mousemove", function (event) {

  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);

});

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

/** remove hovered class when mouseout on hoverElements */
addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});


/** tab scoll before to next */

/**
 * Auto-scroll for the project section */
 
const projectSection = document.querySelector(".slider-list");
let clone;
let infiniteScrollEnabled = true;

const infiniteScroll = () => {
  clone = projectSection.innerHTML + projectSection.innerHTML; // Duplicate the content
  projectSection.innerHTML = clone;

  let startPosition = 0;

  const scroll = () => {
    if (!infiniteScrollEnabled) return;

    startPosition += 3; // Increase this value for faster scrolling (try 2, 3, 4, etc.)
    projectSection.scrollTo(startPosition, 0);

    if (startPosition >= projectSection.scrollWidth / 2) {
      startPosition = 0; // Reset scroll position to create an infinite loop
    }

    requestAnimationFrame(scroll);
  };

  scroll();
};

// Pause auto-scroll when a navigation link is clicked, then resume after a delay

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    infiniteScrollEnabled = false;

    // Resume auto-scrolling after 2 seconds (adjust the delay as needed)
    setTimeout(() => {
      infiniteScrollEnabled = true;
      infiniteScroll(); // Restart the infinite scroll
    }, 1000);
  });
});

window.onload = infiniteScroll;



/**
 * onno pager r particualr section access
 */

window.addEventListener('load', function() {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
})

/**
 * Progress Bar
 */

let progressBar = document.querySelector(".progress-bar");
let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function(){
	let progress = (scrollY / documentHeight) * 100;
	progressBar.style.width = progress + "%";
}



/**
 * contact mail google
 */

const scriptURL = 'https://script.google.com/macros/s/AKfycbzU9hwWhh7ON5gu92iRl3bFYogEteOEr4drXZDM6NqiAuuErXabsGZg3EL_HpzKBa7lRw/exec';
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert('Success! Your message has been sent.');
      form.reset(); // Reset the form after successful submission
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Error! There was an issue sending your message.');
    });
});




