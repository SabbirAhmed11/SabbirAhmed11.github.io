const kites = document.querySelectorAll(".kite");
const heroSection = document.querySelector("#hero");
const sectionTwo = document.querySelector("#section-two");
const sectionThree = document.querySelector("#section-three");
const cornerLeft = document.querySelector(".corner-left");
const cornerRight = document.querySelector(".corner-right");

const transitionKite = document.querySelector(".transition-kite");
const transitionKite2 = document.querySelector(".transition-kite-2-wrap");
const sectionFourShell = document.querySelector(".section-four-shell");

const gameArea = document.querySelector("#game-area");
const playerKite = document.querySelector("#player-kite");
const startGameBtn = document.querySelector("#start-game-btn");
const gameStatus = document.querySelector("#game-status");
const enemyKites = document.querySelectorAll(".enemy-kite");

const gameFeedback = document.querySelector("#game-feedback");
const gameWrap = document.querySelector(".game-wrap");

const sectionFive = document.querySelector("#section-five");

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  moved: false
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  mouse.moved = true;
});

window.addEventListener(
  "touchmove",
  (e) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.moved = true;
    }
  },
  { passive: true }
);

const kiteData = [];
const introStart = performance.now();
const introDelayStep = 240;
const introDuration = 1400;
const introStartOffset = 420;

kites.forEach((kite, index) => {
  kiteData.push({
    el: kite,
    index,
    vx: 0,
    vy: 0,
    floatOffset: Math.random() * Math.PI * 2,
    rotOffset: Math.random() * Math.PI * 2,
    strength: parseFloat(kite.dataset.strength || 1),
    floatAmpX: 18 + Math.random() * 18,
    floatAmpY: 28 + Math.random() * 28,
    rotateAmp: 4 + Math.random() * 5,
    driftSpeed: 0.0012 + Math.random() * 0.001,
    easeBack: 0.045 + Math.random() * 0.02,
    damping: 0.84 + Math.random() * 0.04,
    repelRadius: 240 + Math.random() * 80,
    maxPush: 120 + Math.random() * 70
  });
});

function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateCornerTransition() {
  if (!heroSection || !cornerLeft || !cornerRight) return;

  const heroRect = heroSection.getBoundingClientRect();
  const heroHeight = heroSection.offsetHeight;
  const rawProgress = (-heroRect.top) / heroHeight;
  const progress = clamp(rawProgress * 1.35, 0, 1);

  cornerLeft.style.transform = `scale(${progress})`;
  cornerRight.style.transform = `scale(${progress})`;
}

function updateSectionTransition() {
  if (!sectionTwo || !transitionKite) return;

  const sectionThreeShell = document.querySelector(".section-three-shell");
  const scrollBg = document.querySelector(".scroll-bg");
  if (!sectionThreeShell) return;

  const sectionTwoRect = sectionTwo.getBoundingClientRect();
  const viewportH = window.innerHeight;

  const startPoint = viewportH;
  const endPoint = viewportH * 0.15;

  let progress = (startPoint - sectionTwoRect.bottom) / (startPoint - endPoint);
  progress = clamp(progress, 0, 1);

  const eased = easeInOutCubic(progress);

  const kiteX = -window.innerWidth * 1.15 * eased;
  const kiteY = -window.innerHeight * 0.52 * eased;
  const kiteRotate = -10 - eased * 80;
  const kiteScale = 1.15;

  transitionKite.style.transform = `
    translate3d(${kiteX}px, ${kiteY}px, 0)
    rotate(${kiteRotate}deg)
    scale(${kiteScale})
  `;

  transitionKite.style.opacity = 1 - Math.max(0, (progress - 0.9) / 0.1);

  const sectionEase = Math.min(eased * 1.08, 1);
  const sectionX = (1 - sectionEase) * 100;
  const sectionY = (1 - sectionEase) * 100;

  sectionThreeShell.style.transform = `
    translate3d(${sectionX}%, ${sectionY}%, 0)
  `;

  if (scrollBg) {
    scrollBg.style.opacity = progress > 0.82 ? "1" : "0";
  }
}

function updateSectionFourTransition() {
  if (!sectionThree || !sectionFourShell || !transitionKite2) return;

  const rect = sectionThree.getBoundingClientRect();
  const viewportH = window.innerHeight;

  const startPoint = viewportH;
  const endPoint = viewportH * 0.15;

  let progress = (startPoint - rect.bottom) / (startPoint - endPoint);
  progress = clamp(progress, 0, 1);

  const eased = easeInOutCubic(progress);

  const kiteX = -window.innerWidth * 1.05 * eased;
  const kiteY = -window.innerHeight * 0.55 * eased;
  const kiteRotate = -10 - eased * 80;
  const kiteScale = 1.1;

  transitionKite2.style.transform = `
    translate3d(${kiteX}px, ${kiteY}px, 0)
    rotate(${kiteRotate}deg)
    scale(${kiteScale})
  `;
if (progress <= 0.02) {
  transitionKite2.style.opacity = "0";
} else {
  transitionKite2.style.opacity = `${1 - Math.max(0, (progress - 0.9) / 0.1)}`;
}

  const sectionEase = Math.min(eased * 1.08, 1);
  const sectionX = (1 - sectionEase) * 100;
  const sectionY = (1 - sectionEase) * 100;

  sectionFourShell.style.transform = `
    translate3d(${sectionX}%, ${sectionY}%, 0)
  `;
}

window.addEventListener("resize", () => {
  kiteData.forEach((item) => {
    item.el.style.transform = "translate3d(0px, 0px, 0px) rotate(0deg)";
    item.vx = 0;
    item.vy = 0;
  });

  updateCornerTransition();
  updateSectionTransition();
  updateSectionFourTransition();
});

window.addEventListener(
  "scroll",
  () => {
    updateCornerTransition();
    updateSectionTransition();
    updateSectionFourTransition();
  },
  { passive: true }
);

function animate(time) {
  kiteData.forEach((item) => {
    const rect = item.el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const localIntroTime = time - introStart - item.index * introDelayStep;
    const introProgress = clamp(localIntroTime / introDuration, 0, 1);
    const introEase = easeOutBack(introProgress);

    const introY = (1 - introEase) * introStartOffset;
    const introOpacity = introProgress;
    const introRotate = (1 - introEase) * 8;

    const floatX =
      Math.sin(time * item.driftSpeed + item.floatOffset) * item.floatAmpX;

    const floatY =
      Math.cos(time * (item.driftSpeed * 1.4) + item.floatOffset) * item.floatAmpY;

    const rotation =
      Math.sin(time * (item.driftSpeed * 1.1) + item.rotOffset) * item.rotateAmp;

    let repelX = 0;
    let repelY = 0;

    if (mouse.moved && introProgress >= 0.6) {
      const dx = centerX - mouse.x;
      const dy = centerY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < item.repelRadius) {
        const force = Math.pow(1 - dist / item.repelRadius, 1.8);
        const angle = Math.atan2(dy, dx);
        const push = force * item.maxPush * item.strength;

        repelX = Math.cos(angle) * push;
        repelY = Math.sin(angle) * push;
      }
    }

    const targetX = floatX + repelX;
    const targetY = floatY + repelY;

    item.vx += (targetX - item.vx) * item.easeBack;
    item.vy += (targetY - item.vy) * item.easeBack;

    item.vx *= item.damping;
    item.vy *= item.damping;

    item.el.style.opacity = introOpacity;
    item.el.style.transform = `
      translate3d(${item.vx}px, ${introY + item.vy}px, 0)
      rotate(${rotation + introRotate + item.vx * 0.04}deg)
    `;
  });

  requestAnimationFrame(animate);
}

updateCornerTransition();
updateSectionTransition();
updateSectionFourTransition();
requestAnimationFrame(animate);

document.addEventListener("DOMContentLoaded", () => {
  const kiteWords = document.querySelectorAll(".kite-memory-quote span");

  if (!kiteWords.length) return;

  const wordData = [];
  let mouseX = -9999;
  let mouseY = -9999;

  kiteWords.forEach((word) => {
    wordData.push({
      el: word,
      floatOffset: Math.random() * Math.PI * 2,
      floatSpeed: 0.0015 + Math.random() * 0.002,
      floatAmountX: 3 + Math.random() * 4,
      floatAmountY: 5 + Math.random() * 8,
      rotateAmount: -2 + Math.random() * 4,
      repelX: 0,
      repelY: 0
    });
  });

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateWords(time) {
    wordData.forEach((word) => {
      const rect = word.el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const t = time * word.floatSpeed + word.floatOffset;

      const baseX = Math.sin(t) * word.floatAmountX;
      const baseY = Math.cos(t * 1.25) * word.floatAmountY;
      const rotate = Math.sin(t * 0.9) * word.rotateAmount;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 140;

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const angle = Math.atan2(dy, dx);

        const targetX = -Math.cos(angle) * force * 28;
        const targetY = -Math.sin(angle) * force * 28;

        word.repelX += (targetX - word.repelX) * 0.08;
        word.repelY += (targetY - word.repelY) * 0.08;
      } else {
        word.repelX *= 0.88;
        word.repelY *= 0.88;
      }

      const finalX = baseX + word.repelX;
      const finalY = baseY + word.repelY;

      word.el.style.transform = `translate(${finalX}px, ${finalY}px) rotate(${rotate}deg)`;
    });

    requestAnimationFrame(animateWords);
  }

  requestAnimationFrame(animateWords);
});


let gameRunning = false;
let gameFrame = null;
let player = { x: 0, y: 0 };
let enemies = [];

function resetEnemies() {
  if (!enemyKites.length) return;

  const enemyLetters = ["I", "T", "E", "L", "O", "A", "Y" ];
  const areaRect = gameArea.getBoundingClientRect();

  enemies = enemyLetters.map((letter, index) => {
    const base = enemyKites[index % enemyKites.length].cloneNode(true);
    base.classList.remove("dead");
    base.style.display = "block";
    base.style.opacity = "";
    base.style.transform = "";

    gameArea.appendChild(base);

    return {
      el: base,
      x: areaRect.width * (0.45 + Math.random() * 0.45),
      y: areaRect.height * (0.2 + Math.random() * 0.6),
      vx: (Math.random() > 0.5 ? 1 : -1) * (2.2 + Math.random() * 1.8),
      vy: (Math.random() > 0.5 ? 1 : -1) * (1.8 + Math.random() * 1.6),
      alive: true
    };
  });

  enemies.forEach((enemy) => {
    enemy.el.classList.remove("dead");
    enemy.el.style.left = `${enemy.x}px`;
    enemy.el.style.top = `${enemy.y}px`;
  });

  enemyKites.forEach((enemy) => {
    enemy.style.display = "none";
  });
}

function setPlayerPosition(clientX, clientY) {
  if (!gameArea || !playerKite) return;

  const rect = gameArea.getBoundingClientRect();

  player.x = clamp(clientX - rect.left, 60, rect.width - 60);
  player.y = clamp(clientY - rect.top, 120, rect.height - 60);

  playerKite.style.left = `${player.x}px`;
  playerKite.style.top = `${player.y}px`;
}

function touches(a, b, ra = 36, rb = 36) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy) < ra + rb;
}

function showConfetti() {
  if (!gameFeedback) return;

  gameFeedback.innerHTML = "";

  const colors = ["#ff3158", "#00a000", "#1f65ff", "#f08a00", "#8b5cf6", "#ffffff"];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${-10 - Math.random() * 20}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    gameFeedback.appendChild(piece);
  }

  setTimeout(() => {
    gameFeedback.innerHTML = "";
  }, 2200);
}

function showLoseEmoji() {
  if (!gameFeedback) return;

  gameFeedback.innerHTML = `<div class="lose-emoji">😢</div>`;

  setTimeout(() => {
    gameFeedback.innerHTML = "";
  }, 1200);
}


function loseGame() {
  gameRunning = false;
  if (gameStatus) gameStatus.textContent = "YOU LOSE";
  if (gameArea) gameArea.classList.remove("playing");
  if (gameWrap) gameWrap.classList.remove("playing");
  
  showLoseEmoji();
  cancelAnimationFrame(gameFrame);
}

function winGame() {
  gameRunning = false;
  if (gameStatus) gameStatus.textContent = "YOU WIN";
  if (gameArea) gameArea.classList.remove("playing");
  if (gameWrap) gameWrap.classList.remove("playing");
  showConfetti();
  cancelAnimationFrame(gameFrame);
}

function updateGame() {
  if (!gameRunning || !gameArea) return;

  const rect = gameArea.getBoundingClientRect();

  enemies.forEach((enemy) => {
    if (!enemy.alive) return;

    enemy.x += enemy.vx;
    enemy.y += enemy.vy;

    if (enemy.x < 60 || enemy.x > rect.width - 60) enemy.vx *= -1;
    if (enemy.y < 120 || enemy.y > rect.height - 60) enemy.vy *= -1;

    enemy.el.style.left = `${enemy.x}px`;
    enemy.el.style.top = `${enemy.y}px`;
  });

  const aliveEnemies = enemies.filter((enemy) => enemy.alive);

  for (const enemy of aliveEnemies) {
    if (touches(player, enemy, 36, 36)) {
      // K wins only if it attacks from above
      if (player.y < enemy.y - 10) {
        enemy.alive = false;
        enemy.el.classList.add("dead");
      } else {
        loseGame();
        return;
      }
    }
  }

  const stillAlive = enemies.filter((enemy) => enemy.alive);

  if (stillAlive.length === 0) {
    winGame();
    return;
  }

  gameFrame = requestAnimationFrame(updateGame);
}

function startGame() {
  if (!gameArea || !playerKite) return;

  cancelAnimationFrame(gameFrame);
  gameRunning = true;

  if (gameStatus) gameStatus.textContent = "CUT THEM FROM ABOVE";
  gameArea.classList.add("playing");
  if (gameWrap) gameWrap.classList.add("playing");

  document.querySelectorAll(".enemy-kite").forEach((enemy) => enemy.remove());

  const rect = gameArea.getBoundingClientRect();
  player.x = rect.width * 0.22;
  player.y = rect.height * 0.72;

  playerKite.style.left = `${player.x}px`;
  playerKite.style.top = `${player.y}px`;

  resetEnemies();
  gameFrame = requestAnimationFrame(updateGame);
}

if (gameArea) {
  gameArea.addEventListener("mousemove", (e) => {
    if (!gameRunning) return;
    setPlayerPosition(e.clientX, e.clientY);
  });

  gameArea.addEventListener(
    "touchmove",
    (e) => {
      if (!gameRunning || e.touches.length === 0) return;
      setPlayerPosition(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: true }
  );
}

if (startGameBtn) {
  startGameBtn.addEventListener("click", startGame);
}