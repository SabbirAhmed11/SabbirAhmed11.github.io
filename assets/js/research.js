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

addEventOnElements(navLinks, "click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
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
 * Auto-scroll for the project section
 */
const projectSection = document.querySelector(".section.project");
let scrollAmount = 0;

const autoScrollProjects = function () {
  const maxScroll = projectSection.scrollHeight - projectSection.clientHeight;
  scrollAmount += 2; // Adjust scroll speed here
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0; // Reset scroll amount to loop
  }
  projectSection.scrollTo({
    top: scrollAmount,
    behavior: "smooth"
  });
};

setInterval(autoScrollProjects, 100); // Adjust interval timing here



let progressBar = document.querySelector(".progress-bar");
let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function(){
	let progress = (scrollY / documentHeight) * 100;
	progressBar.style.width = progress + "%";
}


document.addEventListener("DOMContentLoaded", function () {
  // Tilt effect
  const postBoxes = document.querySelectorAll(".post-box");

  postBoxes.forEach(postBox => {
    postBox.addEventListener("mousemove", function (e) {
      const { offsetX, offsetY } = e;
      const width = postBox.offsetWidth;
      const height = postBox.offsetHeight;

      const moveX = ((offsetX - width / 2) / width) * 15; // Increase tilt effect slightly
      const moveY = ((offsetY - height / 2) / height) * 15;

      postBox.style.transition = "transform 0.1s ease-out"; // Slightly faster transition for noticeable movement
      postBox.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    });

    postBox.addEventListener("mouseleave", function () {
      postBox.style.transition = "transform 0.3s ease"; // Smooth return to original position
      postBox.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  });

  // Filter functionality with smooth transition
  const filterItems = document.querySelectorAll(".filter-item");
  const posts = document.querySelectorAll(".post-box");

  filterItems.forEach(item => {
    item.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      filterItems.forEach(filter => filter.classList.remove("active-filter"));
      this.classList.add("active-filter");

      posts.forEach(post => {
        post.style.transition = "opacity 0.5s ease, transform 0.5s ease"; // Smooth transition for filtering
        if (filterValue === "all" || post.classList.contains(filterValue)) {
          post.style.display = "block";
          post.style.opacity = "1"; // Ensure posts are visible
          post.style.transform = "scale(1)"; // Scale up to normal size
        } else {
          post.style.opacity = "0"; // Fade out
          post.style.transform = "scale(0.9)"; // Scale down
          setTimeout(() => {
            post.style.display = "none";
          }, 500); // Delay hiding the element to allow the transition to complete
        }
      });
    });
  });
});

