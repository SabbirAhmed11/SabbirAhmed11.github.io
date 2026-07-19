'use strict';

const select = (selector, scope = document) => scope.querySelector(selector);
const selectAll = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Preloader ---------------------------------------------------- */
const preloader = select('[data-preloader]');

window.addEventListener('DOMContentLoaded', () => {
  preloader?.classList.add('loaded');
  document.body.classList.add('loaded');
});

/** Mobile navigation ------------------------------------------- */
const navbar = select('[data-navbar]');
const overlay = select('[data-overlay]');
const navTogglers = selectAll('[data-nav-toggler]');
const navLinks = selectAll('[data-nav-link]');

const closeNavigation = () => {
  navbar?.classList.remove('active');
  overlay?.classList.remove('active');
  document.body.classList.remove('nav-active');
};

navTogglers.forEach((toggler) => {
  toggler.addEventListener('click', () => {
    navbar?.classList.toggle('active');
    overlay?.classList.toggle('active');
    document.body.classList.toggle('nav-active');
  });
});

navLinks.forEach((link) => link.addEventListener('click', closeNavigation));

/** Header, progress bar, and collection scroll state ------------ */
const header = select('[data-header]');
const progressBar = select('[data-progress-bar]');
const collectionNav = select('[data-collection-nav]');
const collectionLinks = selectAll('[data-collection-link]');
const collections = selectAll('[data-collection]');

let scrollTicking = false;
let lockedCollectionId = null;
let collectionLockTimer = null;

const getFixedOffset = () => {
  const headerHeight = header?.getBoundingClientRect().height || 0;
  const collectionNavHeight = collectionNav?.getBoundingClientRect().height || 0;
  return headerHeight + collectionNavHeight + 16;
};

const setActiveCollection = (collectionId) => {
  if (!collectionId) return;

  collectionLinks.forEach((link) => {
    const isActive = link.dataset.collectionLink === collectionId;
    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const getCollectionFromScroll = () => {
  if (collections.length === 0) return null;

  const marker = window.scrollY + getFixedOffset() + 34;
  let activeId = collections[0].id;

  collections.forEach((collection) => {
    if (marker >= collection.offsetTop) activeId = collection.id;
  });

  return activeId;
};

const updateScrollUI = () => {
  const scrollTop = window.scrollY;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

  header?.classList.toggle('active', scrollTop > 54);
  if (progressBar) progressBar.style.width = `${Math.min(progress, 100)}%`;

  if (lockedCollectionId) {
    setActiveCollection(lockedCollectionId);
  } else {
    setActiveCollection(getCollectionFromScroll());
  }

  scrollTicking = false;
};

window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  requestAnimationFrame(updateScrollUI);
  scrollTicking = true;
}, { passive: true });

window.addEventListener('resize', () => requestAnimationFrame(updateScrollUI));

/** Smooth in-page navigation with reliable active state --------- */
selectAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = select(targetId);
    if (!target) return;

    event.preventDefault();

    const collectionId = anchor.dataset.collectionLink;
    if (collectionId) {
      lockedCollectionId = collectionId;
      setActiveCollection(collectionId);

      window.clearTimeout(collectionLockTimer);
      collectionLockTimer = window.setTimeout(() => {
        lockedCollectionId = null;
        updateScrollUI();
      }, prefersReducedMotion ? 50 : 1100);
    }

    const offset = targetId === '#top' ? 0 : getFixedOffset();
    const targetTop = targetId === '#top'
      ? 0
      : target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    if (history.replaceState) history.replaceState(null, '', targetId);
    closeNavigation();
  });
});

/** Scroll reveal ------------------------------------------------ */
const revealElements = selectAll('.reveal');

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -35px' });

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

/** Pointer-following card highlight ----------------------------- */
selectAll('[data-interactive-card]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    card.style.setProperty('--pointer-x', `${x}%`);
    card.style.setProperty('--pointer-y', `${y}%`);
  });
});

/** Independent filters for each collection --------------------- */
selectAll('[data-collection]').forEach((collection) => {
  const filterGroup = select('[data-filter-group]', collection);
  const filterButtons = selectAll('[data-filter]', filterGroup || collection);
  const projects = selectAll('[data-project]', collection);
  const resultCount = select('[data-result-count]', collection);

  if (!filterGroup || filterButtons.length === 0) return;

  const applyFilter = (filterValue) => {
    let visibleCount = 0;

    projects.forEach((project) => {
      const shouldShow = filterValue === 'all' || project.dataset.kind === filterValue;
      project.hidden = !shouldShow;

      if (shouldShow) {
        visibleCount += 1;
        project.classList.remove('is-filter-entering');
        void project.offsetWidth;
        project.classList.add('is-filter-entering', 'is-visible');
      }
    });

    if (resultCount) {
      resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'}`;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((candidate) => {
        const isActive = candidate === button;
        candidate.classList.toggle('active', isActive);
        candidate.setAttribute('aria-pressed', String(isActive));
      });

      applyFilter(button.dataset.filter || 'all');
    });
  });

  applyFilter('all');
});

/** Custom cursor from the main portfolio ----------------------- */
const cursors = selectAll('[data-cursor]');

if (cursors.length >= 2 && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (event) => {
    cursors[0].style.left = `${event.clientX}px`;
    cursors[0].style.top = `${event.clientY}px`;

    window.setTimeout(() => {
      cursors[1].style.left = `${event.clientX}px`;
      cursors[1].style.top = `${event.clientY}px`;
    }, 70);
  });

  selectAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursors.forEach((cursor) => cursor.classList.add('hovered'));
    });

    element.addEventListener('mouseleave', () => {
      cursors.forEach((cursor) => cursor.classList.remove('hovered'));
    });
  });
}

/** Initial collection state, including direct hash visits ------- */
const initialHash = window.location.hash.replace('#', '');
if (collections.some((collection) => collection.id === initialHash)) {
  setActiveCollection(initialHash);
} else {
  setActiveCollection(getCollectionFromScroll());
}

updateScrollUI();
