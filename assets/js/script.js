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
 * Current Projects — original-style continuous auto-scroll
 */

const projectSection = document.querySelector(".slider-list");

if (projectSection) {
  const originalProjects = projectSection.innerHTML;

  // Duplicate the cards once, creating a seamless infinite row.
  projectSection.insertAdjacentHTML("beforeend", originalProjects);

  let projectScrollEnabled = true;
  let projectAnimationId = null;
  let startPosition = 0;
  const scrollSpeed = 3;

  const scrollProjects = () => {
    if (projectScrollEnabled) {
      startPosition += scrollSpeed;
      projectSection.scrollLeft = startPosition;

      if (startPosition >= projectSection.scrollWidth / 2) {
        startPosition = 0;
        projectSection.scrollLeft = 0;
      }
    }

    projectAnimationId = requestAnimationFrame(scrollProjects);
  };

  // Preserve the original continuous movement. Temporarily pause only while
  // the browser tab is hidden, then continue from the same position.
  document.addEventListener("visibilitychange", () => {
    projectScrollEnabled = !document.hidden;
  });

  projectAnimationId = requestAnimationFrame(scrollProjects);
}



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

/**
 * Achievements — one-image auto-playing slider
 */

const showcase = document.querySelector("[data-showcase]");

if (showcase) {
  const track = showcase.querySelector(".showcase-track");
  const slides = [...showcase.querySelectorAll("[data-showcase-slide]")];
  const prevBtn = showcase.querySelector("[data-showcase-prev]");
  const nextBtn = showcase.querySelector("[data-showcase-next]");
  const dots = [...document.querySelectorAll("[data-showcase-dots] .dot")];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let activeIndex = 0;
  let autoplayId = null;
  let touchStartX = 0;
  const autoplayDelay = 4500;

  const goToSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (!prefersReducedMotion) {
      autoplayId = setInterval(() => goToSlide(activeIndex + 1), autoplayDelay);
    }
  };

  const restartAutoplay = () => {
    startAutoplay();
  };

  prevBtn?.addEventListener("click", () => {
    goToSlide(activeIndex - 1);
    restartAutoplay();
  });

  nextBtn?.addEventListener("click", () => {
    goToSlide(activeIndex + 1);
    restartAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      restartAutoplay();
    });
  });

  showcase.addEventListener("mouseenter", stopAutoplay);
  showcase.addEventListener("mouseleave", startAutoplay);
  showcase.addEventListener("focusin", stopAutoplay);
  showcase.addEventListener("focusout", startAutoplay);

  showcase.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
    stopAutoplay();
  }, { passive: true });

  showcase.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) {
      goToSlide(activeIndex + (distance < 0 ? 1 : -1));
    }
    startAutoplay();
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    document.hidden ? stopAutoplay() : startAutoplay();
  });

  goToSlide(0);
  startAutoplay();
}

