// ============================
// Your published CSV link
// ============================
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgaXhuVETyxQBJCy70NNY6nJzWaIrJrSZK53YB4INIkvFAjFCmKuXxS8V8yk0ielQ1t8530n4HDa3s/pub?output=csv";

const POLL_MS = 8000;
const ROUND_SECONDS = 20; // ✅ changed to 20 seconds

const COLS = [
  "Dominant Colors",
  "Primary Object",
  "Light Type",
  "Brightness",
  "Time of Day",
  "Environment",
  "Setting",
  "Temperature Feel",
  "Emotional Tone",
  "Background Sound",
  "ImageURL"
];

// ============================
// DOM
// ============================
const elCard = document.getElementById("card");
const elClues = document.getElementById("clues");
const elTimer = document.getElementById("timer");
const elCount = document.getElementById("cardCount");

const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn2 = document.getElementById("nextBtn2");

const revealImg = document.getElementById("revealImg");
const imgFallback = document.getElementById("imgFallback");

const ratingEl = document.getElementById("rating");
const savedMsg = document.getElementById("savedMsg");

const copyBtn = document.getElementById("copyBtn");
const copyMsg = document.getElementById("copyMsg");

const exportBtn = document.getElementById("exportBtn");

// modal
const startModal = document.getElementById("startModal");
const startBtn = document.getElementById("startBtn");

// ============================
// State
// ============================
let deck = [];
let idx = 0;

let secondsLeft = ROUND_SECONDS;
let tick = null;
let poll = null;

let phase = "front";   // "front" | "back"
let canFlip = false;

let started = false;   // ✅ timer starts only after clicking “Let’s start”

// Store ratings (responses)
const SCORE_KEY = "spreadsheet_flip_ratings_v1";
let ratings = loadRatings();

// ============================
// Helpers
// ============================
function makeCardId(row, rowIndex) {
  // stable ID so ratings persist
  return [
    row["Primary Object"] || "",
    row["Time of Day"] || "",
    row["Environment"] || "",
    rowIndex
  ].join("|");
}

function splitCSVLine(line) {
  const out = [];
  let cur = "";
  let inQ = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (ch === "," && !inQ) {
      out.push(cur); cur = "";
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out;
}

function parseCSV(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter(l => l.trim().length);
  if (!lines.length) return [];
  const headers = splitCSVLine(lines[0]).map(h => h.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const cells = splitCSVLine(lines[i]);
    const row = {};
    headers.forEach((h, j) => row[h] = (cells[j] ?? "").trim());
    rows.push(row);
  }
  return rows;
}

function toDriveDirect(url) {
  if (!url) return "";
  const u = url.trim();
  const m = u.match(/\/file\/d\/([^/]+)\//);
  if (m && m[1]) return `https://lh3.googleusercontent.com/d/${m[1]}`;
  return u;
}

function escapeHTML(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ============================
// Fetch deck
// ============================
async function fetchDeck() {
  const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`CSV fetch failed: ${res.status}`);
  const text = await res.text();
  const rows = parseCSV(text);

  return rows.map((r, i) => {
    const row = {};
    for (const c of COLS) row[c] = (r[c] ?? "").trim();
    row.__id = makeCardId(row, i);
    row.__rowIndex = i;
    return row;
  }).filter(r => (r["Primary Object"] || "").trim().length > 0);
}

function startPolling() {
  if (poll) clearInterval(poll);
  poll = setInterval(async () => {
    try {
      const currentId = deck[idx]?.__id;
      const newDeck = await fetchDeck();
      deck = newDeck;

      if (!deck.length) { idx = 0; return; }

      if (currentId) {
        const newIndex = deck.findIndex(d => d.__id === currentId);
        if (newIndex >= 0) idx = newIndex;
        else if (idx >= deck.length) idx = 0;
      } else {
        idx = Math.min(idx, deck.length - 1);
      }

      // refresh UI only
      renderCardUIOnly();
    } catch (e) {
      console.warn(e);
    }
  }, POLL_MS);
}

// ============================
// Timer
// ============================
function stopTimer() {
  if (tick) clearInterval(tick);
  tick = null;
}

function startTimerFresh() {
  stopTimer();
  secondsLeft = ROUND_SECONDS;
  elTimer.textContent = String(secondsLeft);

  tick = setInterval(() => {
    secondsLeft--;
    elTimer.textContent = String(secondsLeft);

    if (secondsLeft <= 0) {
      stopTimer();
      secondsLeft = 0;
      elTimer.textContent = "0";

      // auto flip
      canFlip = true;
      flipBtn.disabled = false;
      flipToBack();
    }
  }, 1000);
}

// ============================
// Flip / phase
// ============================
function flipToBack() {
  phase = "back";
  elCard.classList.add("flipped");
}

function flipToFrontNoTimer() {
  phase = "front";
  elCard.classList.remove("flipped");
  elTimer.textContent = "0"; // timer stays done
}

// ============================
// Ratings (responses)
// ============================
function loadRatings() {
  try { return JSON.parse(localStorage.getItem(SCORE_KEY) || "{}"); }
  catch { return {}; }
}
function saveRatings(obj) {
  localStorage.setItem(SCORE_KEY, JSON.stringify(obj));
}

function buildRating(cardId) {
  ratingEl.innerHTML = "";
  const existing = ratings[cardId]?.score;

  for (let i = 0; i <= 10; i++) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "scoreBtn" + (existing === i ? " active" : "");
    b.textContent = String(i);

    b.addEventListener("click", () => {
      const row = deck[idx];
      ratings[cardId] = {
        score: i,
        timestamp: new Date().toISOString(),
        rowIndex: row.__rowIndex,
        primaryObject: row["Primary Object"] || "",
        timeOfDay: row["Time of Day"] || "",
        environment: row["Environment"] || "",
        setting: row["Setting"] || ""
      };
      saveRatings(ratings);

      [...ratingEl.querySelectorAll(".scoreBtn")].forEach(x => x.classList.remove("active"));
      b.classList.add("active");

      savedMsg.textContent = `Saved: ${i}/10`;
    });

    ratingEl.appendChild(b);
  }
}

// Export ratings as CSV (download)
function exportRatingsCSV() {
  const rows = Object.entries(ratings).map(([cardId, r]) => ({
    cardId,
    score: r.score ?? "",
    timestamp: r.timestamp ?? "",
    rowIndex: r.rowIndex ?? "",
    primaryObject: r.primaryObject ?? "",
    timeOfDay: r.timeOfDay ?? "",
    environment: r.environment ?? "",
    setting: r.setting ?? ""
  }));

  if (!rows.length) {
    alert("No ratings yet.");
    return;
  }

  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map(obj => headers.map(h => {
      const v = String(obj[h] ?? "");
      // CSV safe
      if (v.includes(",") || v.includes('"') || v.includes("\n")) {
        return `"${v.replaceAll('"', '""')}"`;
      }
      return v;
    }).join(","))
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ratings_export.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ============================
// Copy description
// ============================
function buildDescriptionText(row) {
  const lines = [
    `Dominant Colors: ${row["Dominant Colors"] || "—"}`,
    `Primary Object: ${row["Primary Object"] || "—"}`,
    `Light Type: ${row["Light Type"] || "—"}`,
    `Brightness: ${row["Brightness"] || "—"}`,
    `Time of Day: ${row["Time of Day"] || "—"}`,
    `Environment: ${row["Environment"] || "—"}`,
    `Setting: ${row["Setting"] || "—"}`,
    `Temperature Feel: ${row["Temperature Feel"] || "—"}`,
    `Emotional Tone: ${row["Emotional Tone"] || "—"}`,
    `Background Sound: ${row["Background Sound"] || "—"}`
  ];
  return lines.join(" | ");
}

async function copyCurrentDescription() {
  if (!deck.length) return;
  const row = deck[idx];
  const text = buildDescriptionText(row);

  try {
    await navigator.clipboard.writeText(text);
    copyMsg.textContent = "Copied description ✅";
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    copyMsg.textContent = "Copied description ✅";
  }
}

// ============================
// Render
// ============================
function setBackImage(row) {
  const raw = (row["ImageURL"] || "").trim();
  const imgUrl = toDriveDirect(raw);

  revealImg.removeAttribute("src");
  imgFallback.classList.add("hidden");

  if (imgUrl) {
    revealImg.src = imgUrl;
    revealImg.onload = () => imgFallback.classList.add("hidden");
    revealImg.onerror = () => {
      revealImg.removeAttribute("src");
      imgFallback.classList.remove("hidden");
    };
  } else {
    imgFallback.classList.remove("hidden");
  }
}

// render for a NEW card round (resets timer/phase)
function renderCardNewRound() {
  if (!deck.length) {
    elClues.innerHTML = `<div class="cell"><span>No data</span><b>Add rows in Google Sheets</b></div>`;
    elCount.textContent = "0/0";
    elTimer.textContent = String(ROUND_SECONDS);
    return;
  }

  const row = deck[idx];
  elCount.textContent = `${idx + 1}/${deck.length}`;

  const frontFields = [
    ["Dominant Colors", row["Dominant Colors"]],
    ["Primary Object", row["Primary Object"]],
    ["Light Type", row["Light Type"]],
    ["Brightness", row["Brightness"]],
    ["Time of Day", row["Time of Day"]],
    ["Environment", row["Environment"]],
    ["Setting", row["Setting"]],
    ["Temperature Feel", row["Temperature Feel"]],
    ["Emotional Tone", row["Emotional Tone"]],
    ["Background Sound", row["Background Sound"]],
  ];

  elClues.innerHTML = frontFields.map(([k, v]) => `
    <div class="cell">
      <span>${escapeHTML(k)}</span>
      <b>${escapeHTML(v || "—")}</b>
    </div>
  `).join("");

  setBackImage(row);
  buildRating(row.__id);

  savedMsg.textContent = "";
  copyMsg.textContent = "";

  phase = "front";
  canFlip = false;
  elCard.classList.remove("flipped");

  // flip disabled until timer ends
  flipBtn.disabled = true;

  // Start timer ONLY if game started
  if (started) startTimerFresh();
  else {
    stopTimer();
    elTimer.textContent = String(ROUND_SECONDS);
  }
}

// UI-only refresh (polling)
function renderCardUIOnly() {
  if (!deck.length) return;
  const row = deck[idx];

  elCount.textContent = `${idx + 1}/${deck.length}`;

  const frontFields = [
    ["Dominant Colors", row["Dominant Colors"]],
    ["Primary Object", row["Primary Object"]],
    ["Light Type", row["Light Type"]],
    ["Brightness", row["Brightness"]],
    ["Time of Day", row["Time of Day"]],
    ["Environment", row["Environment"]],
    ["Setting", row["Setting"]],
    ["Temperature Feel", row["Temperature Feel"]],
    ["Emotional Tone", row["Emotional Tone"]],
    ["Background Sound", row["Background Sound"]],
  ];

  elClues.innerHTML = frontFields.map(([k, v]) => `
    <div class="cell">
      <span>${escapeHTML(k)}</span>
      <b>${escapeHTML(v || "—")}</b>
    </div>
  `).join("");

  setBackImage(row);
  buildRating(row.__id);

  flipBtn.disabled = !canFlip;
}

// ============================
// Navigation
// ============================
function nextCard() {
  if (!deck.length) return;
  idx = (idx + 1) % deck.length;
  renderCardNewRound();
}

function restart() {
  idx = 0;
  renderCardNewRound();
}

// ============================
// Events
// ============================
function setupEvents() {
  // Flip unlocks only after timer ends
  flipBtn.addEventListener("click", () => {
    if (!canFlip) return;
    if (phase === "front") flipToBack();
    else flipToFrontNoTimer();
  });

  backBtn.addEventListener("click", () => {
    if (phase === "back") flipToFrontNoTimer();
  });

  nextBtn.addEventListener("click", nextCard);
  nextBtn2.addEventListener("click", nextCard);
  restartBtn.addEventListener("click", restart);

  copyBtn.addEventListener("click", copyCurrentDescription);
  exportBtn.addEventListener("click", exportRatingsCSV);

  // Modal start
  startBtn.addEventListener("click", () => {
    started = true;
    startModal.classList.add("hidden");
    renderCardNewRound(); // starts timer now
  });
}

// ============================
// Init
// ============================
async function init() {
  setupEvents();
  try {
    deck = await fetchDeck();
    renderCardNewRound();
    startPolling();
  } catch (e) {
    console.error(e);
    elClues.innerHTML = `<div class="cell"><span>Error</span><b>Could not load CSV</b></div>`;
  }
}

init();
