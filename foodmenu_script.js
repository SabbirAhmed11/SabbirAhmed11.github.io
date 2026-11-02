/* =========================
   SETTINGS
   ========================= */

const settings = {
  slideInterval: 6000,
  chevronDuration: 1800
};

/* =========================
   SLIDER ITEMS

   Desktop: 1920 × 1080 px
   Mobile:  1080 × 1920 px

   Rename your images to match these paths,
   or change the paths below.

   To use one photo on all screens, remove mobileImage.
   Adjust position/mobilePosition to change cropping.
   ========================= */

const sliderDishes = [
  {
    id: "chicken-biryani",
    name: "চিকেন বিরিয়ানি",
    price: 10,
    image: "fcimg/chicken-biryani-desktop.png",
    mobileImage: "fcimg/chicken-biryani-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
  {
    id: "beef-tehari",
    name: "বিফ তেহারি",
    price: 12,
    image: "fcimg/beef-tehari-desktop.png",
    mobileImage: "fcimg/beef-tehari-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
  {
    id: "polao-roast",
    name: "পোলাও + চিকেন রোস্ট",
    price: 10,
    image: "fcimg/polao-roast-desktop.png",
    mobileImage: "fcimg/polao-roast-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
  {
    id: "fried-rice-manchurian",
    name: "ফ্রাইড রাইস + চিকেন মাঞ্চুরিয়ান",
    price: 10,
    image: "fcimg/fried-rice-manchurian-desktop.png",
    mobileImage: "fcimg/fried-rice-manchurian-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
    {
    id: "yellow-rice-doner",
    name: "ইয়েলো রাইস + ডোনার কেবাব",
    price: 10,
    image: "fcimg/yellow-rice-doner-desktop.png",
    mobileImage: "fcimg/yellow-rice-doner-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
  {
    id: "kabuli-polao",
    name: "কাবুলি পোলাও",
    price: 12,
    image: "fcimg/kabuli-polao-desktop.png",
    mobileImage: "fcimg/kabuli-polao-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
  {
    id: "kala-bhuna",
    chargeNote: "2 lb পর্যন্ত রান্নার চার্জ",
    name: "কালাভুনা",
    price: 8,
    image: "fcimg/kala-bhuna-desktop.png",
    mobileImage: "fcimg/kala-bhuna-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
  {
    id: "lal-bhuna",
    chargeNote: "2 lb পর্যন্ত রান্নার চার্জ",
    name: "লাল ভুনা",
    price: 5,
    image: "fcimg/lal-bhuna-desktop.png",
    mobileImage: "fcimg/lal-bhuna-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
  {
    id: "murgi-bhuna",
    chargeNote: "2 lb পর্যন্ত রান্নার চার্জ",
    name: "মুরগি ভুনা",
    price: 5,
    image: "fcimg/murgi-bhuna-website.png",
    mobileImage: "fcimg/murgi-bhuna-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
    {
    id: "grilled-fish",
    chargeNote: "যেকোনো সাইজের মাছ রান্নার চার্জ",
    name: "গ্রিলড মাছ",
    price: 10,
    image: "fcimg/grilled-fish-desktop.png",
    mobileImage: "fcimg/grilled-fish-mobile.png",
    position: "center",
    mobilePosition: "center"
  },
  {
    id: "full-grilled-chicken",
    chargeNote: "10 lb পর্যন্ত রান্নার চার্জ",
    name: "আস্ত গ্রিলড চিকেন",
    price: 10,
    image: "fcimg/grilled-chicken-desktop.png",
    mobileImage: "fcimg/grilled-chicken-mobile.png",
    position: "center",
    mobilePosition: "center"
  }

];

/* =========================
   FULL MENU — SEPARATE LIST

   Preserves the previous full menu and prices.
   slideId links a menu item to a matching slider photo.
   Items without slideId remain plain menu entries.
   ========================= */

// Slider dishes are included automatically, so names and prices stay consistent.
// Add extra menu-only dishes in the second array below.
const fullMenuDishes = [
  ...sliderDishes.map(dish => ({
    name: dish.name,
    price: dish.price,
    slideId: dish.id,
    note: dish.chargeNote
      ? `${dish.chargeNote} — ${dish.id === "grilled-fish" ? "মাছের" : "মাংসের"} দাম অন্তর্ভুক্ত নয়`
      : ({
          "chicken-biryani": "৪ পিস চিকেন, ৪ পিস আলু",
          "beef-tehari": "আলুসহ ১০–১১ পিস মাংস",
          "polao-roast": "৫–৬ পিস চিকেন",
          "kabuli-polao": "৪ পিস বড় সাইজের মাংস"
        }[dish.id] || "")
  })),
  {
    name: "কাচ্চি বিরিয়ানি",
    price: 15,
    note: ""
  },
  {
    name: "ইয়ামচা ফ্রাইড রাইস",
    price: 12,
    note: "সঙ্গে গ্রিলড তেলাপিয়া ফিলে"
  },
  {
    name: "বিফ",
    price: 5,
    note: "2 lb পর্যন্ত রান্নার চার্জ — মাংসের দাম অন্তর্ভুক্ত নয়"
  },
  {
    name: "পেশাওয়ারি বিফ",
    price: 8,
    note: "2 lb পর্যন্ত রান্নার চার্জ — মাংসের দাম অন্তর্ভুক্ত নয়"
  },
  {
    name: "আস্ত বেকড মাছ",
    price: 10,
    note: "যেকোনো সাইজের মাছ রান্নার চার্জ — মাছের দাম অন্তর্ভুক্ত নয়"
  }
];

/* =========================
   PAGE ELEMENTS / STATE
   ========================= */

const gallery = document.querySelector(".gallery");
const slideContainer = document.getElementById("slides");
const dotsContainer = document.getElementById("dots");

const menuDialog = document.getElementById("full-menu");
const menuContainer = document.getElementById("menu");
const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

let currentSlide = 0;
let slideshowTimer;
let chevronTimer;
let pointerStart = null;

/* =========================
   HELPER
   ========================= */

function createElement(tag, className, text) {
  const node = document.createElement(tag);

  if (className) {
    node.className = className;
  }

  if (text !== undefined) {
    node.textContent = text;
  }

  return node;
}

/* =========================
   BUILD SLIDES
   ========================= */

function renderSlides() {
  sliderDishes.forEach((dish, index) => {
    const slide = createElement("article", "slide");

    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute(
      "aria-label",
      `${index + 1} / ${sliderDishes.length}: ${dish.name}`
    );

    const picture = document.createElement("picture");

    if (dish.mobileImage) {
      const mobileSource = document.createElement("source");

      mobileSource.media = "(max-width: 600px)";
      mobileSource.srcset = dish.mobileImage;

      picture.append(mobileSource);
    }

    const image = document.createElement("img");

    image.src = dish.image;
    image.alt = dish.name;
    image.decoding = "async";
    image.draggable = false;

    image.style.setProperty(
      "--desktop-position",
      dish.position || "center"
    );

    image.style.setProperty(
      "--mobile-position",
      dish.mobilePosition || dish.position || "center"
    );

    if (index === 0) {
      image.fetchPriority = "high";
    }

    picture.append(image);

    const name = createElement(
      "h1",
      "dish-name",
      dish.name
    );

    const price = createElement(
      "span",
      "price",
      `$${dish.price}`
    );

    const priceGroup = createElement("div", "price-group");
priceGroup.append(price);

if (dish.chargeNote) {
  priceGroup.classList.add("has-charge");

  // Outlined Bengali lettering keeps the circular design consistent on phones.
  const ring = document.createElement("img");
  ring.className = "charge-ring charge-ring-outline";
  ring.alt = "";
  ring.setAttribute("aria-hidden", "true");
  const ringFile = dish.id === "grilled-fish"
    ? "charge-fish"
    : dish.id === "full-grilled-chicken" ? "charge-10lb" : "charge-2lb";
  ring.src = `fcimg/${ringFile}.svg`;
  priceGroup.append(ring);

  priceGroup.setAttribute(
    "aria-label",
    `$${dish.price} — ${dish.chargeNote}`
  );
}

    slide.append(picture, name, priceGroup);
    slideContainer.append(slide);

    const dot = createElement("button", "dot");

    dot.type = "button";
    dot.setAttribute("aria-label", dish.name);

    dot.addEventListener("click", () => {
      navigateTo(index);
    });

    dotsContainer.append(dot);
  });
}

/* =========================
   BUILD FULL MENU
   ========================= */

function renderMenu() {
  fullMenuDishes.forEach(dish => {
    const slideIndex = dish.slideId
      ? sliderDishes.findIndex(
          slide => slide.id === dish.slideId
        )
      : -1;

    const row = createElement(
      slideIndex >= 0 ? "button" : "div",
      "menu-item"
    );

    const copy = createElement(
      "div",
      "menu-item-copy"
    );

    copy.append(
      createElement(
        "span",
        "menu-item-name",
        dish.name
      )
    );

    if (dish.note) {
      copy.append(
        createElement(
          "span",
          "menu-item-note",
          dish.note
        )
      );
    }

    row.append(
      copy,
      createElement(
        "strong",
        "menu-item-price",
        `$${dish.price}`
      )
    );

    if (slideIndex >= 0) {
      row.type = "button";

      row.setAttribute(
        "aria-label",
        `${dish.name} — ছবি দেখুন`
      );

      row.addEventListener("click", () => {
        menuDialog.close();
        navigateTo(slideIndex);
      });
    }

    menuContainer.append(row);
  });
}

/* =========================
   SLIDE NAVIGATION
   ========================= */

function showSlide(index) {
  if (!sliderDishes.length) return;

  currentSlide =
    (index + sliderDishes.length) % sliderDishes.length;

  [...slideContainer.children].forEach((slide, i) => {
    const active = i === currentSlide;

    slide.classList.toggle("active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });

  [...dotsContainer.children].forEach((dot, i) => {
    dot.setAttribute(
      "aria-current",
      String(i === currentSlide)
    );
  });
}

function restartAutoplay() {
  clearInterval(slideshowTimer);

  if (
    document.hidden ||
    menuDialog.open ||
    reducedMotion.matches ||
    sliderDishes.length < 2
  ) {
    return;
  }

  slideshowTimer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, settings.slideInterval);
}

function revealChevrons() {
  clearTimeout(chevronTimer);

  gallery.classList.add("show-chevrons");

  chevronTimer = setTimeout(() => {
    gallery.classList.remove("show-chevrons");
  }, settings.chevronDuration);
}

function navigateTo(index) {
  showSlide(index);
  revealChevrons();
  restartAutoplay();
}

previousButton.addEventListener("click", () => {
  navigateTo(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  navigateTo(currentSlide + 1);
});

/* =========================
   SWIPE / MOUSE DRAG
   ========================= */

gallery.addEventListener("pointerdown", event => {
  if (
    !event.isPrimary ||
    event.button !== 0 ||
    event.target.closest("button")
  ) {
    return;
  }

  pointerStart = {
    x: event.clientX,
    y: event.clientY
  };

  clearInterval(slideshowTimer);
  gallery.setPointerCapture(event.pointerId);
});

gallery.addEventListener("pointerup", event => {
  if (!pointerStart) return;

  const dx = event.clientX - pointerStart.x;
  const dy = event.clientY - pointerStart.y;

  pointerStart = null;

  if (
    Math.abs(dx) > 45 &&
    Math.abs(dx) > Math.abs(dy)
  ) {
    navigateTo(currentSlide + (dx < 0 ? 1 : -1));
  } else {
    revealChevrons();
    restartAutoplay();
  }
});

gallery.addEventListener("pointercancel", () => {
  pointerStart = null;
  restartAutoplay();
});

gallery.addEventListener("dragstart", event => {
  event.preventDefault();
});

/* =========================
   MENU OVERLAY
   ========================= */

openMenuButton.addEventListener("click", () => {
  menuDialog.showModal();
  restartAutoplay();
});

closeMenuButton.addEventListener("click", () => {
  menuDialog.close();
});

// Native dialog handles Escape and keyboard focus trapping.
menuDialog.addEventListener("close", () => {
  openMenuButton.focus();
  restartAutoplay();
});

/* =========================
   KEYBOARD / VISIBILITY
   ========================= */

document.addEventListener("keydown", event => {
  if (menuDialog.open) return;

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    navigateTo(currentSlide - 1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    navigateTo(currentSlide + 1);
  }
});

document.addEventListener(
  "visibilitychange",
  restartAutoplay
);

reducedMotion.addEventListener(
  "change",
  restartAutoplay
);

/* =========================
   START
   ========================= */

renderSlides();
renderMenu();
showSlide(0);
revealChevrons();
restartAutoplay();
