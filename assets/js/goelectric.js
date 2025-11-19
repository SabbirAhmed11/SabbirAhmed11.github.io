/* ========== SCROLL PROGRESS ========== */
const scrollBar = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scroll = totalHeight > 0 ? window.scrollY / totalHeight : 0;
    scrollBar.style.width = (scroll * 100) + "%";
});


/* ========== AIR QUALITY (DEMO PM + REAL LOCATION) ========== */
const pmValue = document.getElementById("pmValue");
const pmCondition = document.getElementById("pmCondition");
const userLocation = document.getElementById("userLocation");
const pmBox = document.getElementById("pmStatusBox");

function setAQI(value) {
    pmValue.textContent = value;

    if (value < 50) {
        pmCondition.textContent = "GOOD";
        pmBox.style.background = "#CFF7DA";
    } else if (value < 100) {
        pmCondition.textContent = "MODERATE";
        pmBox.style.background = "#FFF3C4";
    } else {
        pmCondition.textContent = "UNHEALTHY";
        pmBox.style.background = "#FFD2D2";
    }
}

// demo PM value for now
setAQI(62);

// reverse geocode to city, state using OpenStreetMap Nominatim
function fetchLocationName(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

    fetch(url, {
        headers: {
            "Accept-Language": "en"
        }
    })
    .then(res => res.json())
    .then(data => {
        const address = data.address || {};
        const city = address.city || address.town || address.village || address.hamlet;
        const state = address.state || address.region;

        if (city && state) {
            userLocation.textContent = `${city}, ${state}`;
        } else if (state) {
            userLocation.textContent = state;
        } else {
            userLocation.textContent = "Your location";
        }
    })
    .catch(() => {
        userLocation.textContent = "Your location";
    });
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        pos => {
            const { latitude, longitude } = pos.coords;
            fetchLocationName(latitude, longitude);
        },
        () => {
            // permission denied or error
            userLocation.textContent = "Bakersfield, California";
        }
    );
} else {
    userLocation.textContent = "Bakersfield, California";
}


/* ========== SLIDER (MOBILE 1, DESKTOP 2) ========== */
const slider = document.getElementById("dykSlider");
const dotsContainer = document.getElementById("dykDots");
let slides = Array.from(document.querySelectorAll(".slide"));

let currentIndex = 0;
let slidesPerView = 1;
let maxIndex = 0;

function computeConfig() {
    slidesPerView = window.innerWidth >= 768 ? 2 : 1;
    maxIndex = Math.max(0, Math.ceil(slides.length / slidesPerView) - 1);
    if (currentIndex > maxIndex) currentIndex = maxIndex;
}

function createDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement("div");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll("div");
    dots.forEach(d => d.classList.remove("active"));
    const active = dots[currentIndex];
    if (active) active.classList.add("active");
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function autoSlide() {
    if (maxIndex <= 0) return;
    currentIndex = (currentIndex + 1) % (maxIndex + 1);
    updateSlider();
}

computeConfig();
createDots();
updateSlider();

window.addEventListener("resize", () => {
    computeConfig();
    createDots();
    updateSlider();
});

let sliderTimer = setInterval(autoSlide, 3000);

// swipe support
let startX = 0;

slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    clearInterval(sliderTimer);
});

slider.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff < -50 && currentIndex < maxIndex) {
        currentIndex++;
    } else if (diff > 50 && currentIndex > 0) {
        currentIndex--;
    }

    updateSlider();
    sliderTimer = setInterval(autoSlide, 3000);
});


/* ========== MYTH ACCORDION ========== */
const toggles = document.querySelectorAll(".myth-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;
        const arrow = toggle.querySelector(".arrow-icon");
        const item = toggle.closest(".myth-item");

        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
            item.classList.remove("open");
        } else {
            content.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
            item.classList.add("open");
        }
    });
});




/* ========== FUEL COST CALCULATOR ========== */

const fuelBtn = document.getElementById("fuelCalculateBtn");
const fuelResultEl = document.getElementById("fuelResult");

if (fuelBtn) {
    fuelBtn.addEventListener("click", () => {
        const gasPrice = parseFloat(document.getElementById("gasPrice").value);
        const mpg = parseFloat(document.getElementById("vehicleMpg").value);
        const miles = parseFloat(document.getElementById("annualMiles").value);

        if (!gasPrice || !mpg || !miles || gasPrice <= 0 || mpg <= 0 || miles <= 0) {
            fuelResultEl.textContent = "Please fill in all fields with valid numbers.";
            return;
        }

        // Gas car annual cost
        const gallonsPerYear = miles / mpg;
        const gasCost = gallonsPerYear * gasPrice;

        // Simple EV estimate (you can tweak later)
        const evKWhPerMile = 0.30;       // 30 kWh per 100 miles
        const electricityPrice = 0.14;   // $0.14 per kWh (demo)
        const evCost = miles * evKWhPerMile * electricityPrice;

        const savings = gasCost - evCost;

        const gasStr = gasCost.toFixed(0);
        const evStr = evCost.toFixed(0);
        const saveStr = Math.abs(savings).toFixed(0);

        if (savings > 0) {
            fuelResultEl.textContent =
                `You spend about $${gasStr} per year on fuel. ` +
                `Switching to an EV could cost around $${evStr} per year and save roughly $${saveStr}.`;
        } else if (savings < 0) {
            fuelResultEl.textContent =
                `You spend about $${gasStr} per year on fuel. ` +
                `With our simple assumptions, an EV might cost around $${evStr} per year (about $${saveStr} more).`;
        } else {
            fuelResultEl.textContent =
                `You spend about $${gasStr} per year on fuel. ` +
                `With our simple assumptions, the yearly cost looks similar for an EV.`;
        }
    });
}



/* ========== EV CHARGING FINDER ========== */
const chargingBtn = document.getElementById("chargingFindBtn");
const chargingInput = document.getElementById("chargingQuery");
const chargingSummary = document.getElementById("chargingSummary");

if (chargingBtn) {
    chargingBtn.addEventListener("click", () => {
        const query = (chargingInput.value || "").trim();
        if (!query) {
            chargingSummary.textContent = "Please type a city or location first.";
            return;
        }

        chargingSummary.textContent = "Looking up charging stations near " + query + "...";

        // 1) Open Google Maps in a new tab so user can see stations visually
        const mapsUrl = "https://www.google.com/maps/search/" +
            encodeURIComponent("EV charging stations near " + query);
        window.open(mapsUrl, "_blank");

        // 2) Try to estimate station count using OpenChargeMap (optional, demo)
        //    You can add your own API key if you have one.
        const geocodeUrl = "https://nominatim.openstreetmap.org/search?format=json&q=" +
            encodeURIComponent(query);

        fetch(geocodeUrl, { headers: { "Accept-Language": "en" } })
            .then(res => res.json())
            .then(geo => {
                if (!geo || !geo[0]) {
                    chargingSummary.textContent =
                        "Showing EV charging stations near " + query + " on the map.";
                    return;
                }

                const lat = geo[0].lat;
                const lon = geo[0].lon;

                const ocmUrl =
                    `https://api.openchargemap.io/v3/poi/?output=json&latitude=${lat}&longitude=${lon}&distance=20&maxresults=100`;

                return fetch(ocmUrl);
            })
            .then(res => res ? res.json() : null)
            .then(stations => {
                if (!stations) return;

                const count = stations.length;
                chargingSummary.textContent =
                    `We found about ${count} charging points within ~20 km of ${query}. ` +
                    `Check the map tab for exact locations.`;
            })
            .catch(() => {
                chargingSummary.textContent =
                    "Showing EV charging stations near " + query + " on the map.";
            });
    });
}


/* ========== SHARE BUTTON + SOCIAL ICONS ========== */

const shareBtn = document.getElementById("shareBtn");
const socialButtons = document.querySelectorAll(".social-icon-btn");

const STICKER_IMAGE_PATH = "./assets/images/sticker.jpg";
const PAGE_URL = window.location.href;

const SHARE_TITLE = "Drive Electric, Breathe Better";
const SHARE_TEXT =
    "Switching to electric vehicles helps cut air pollution. Scan the sticker to learn why EVs matter. #GoElectric #CleanAir #DriveEV";

/* main Share button: try to share image + text + URL */
if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
        try {
            // attempt full image share on supported mobile browsers
            const response = await fetch(STICKER_IMAGE_PATH);
            const blob = await response.blob();
            const file = new File([blob], "sticker.jpg", { type: blob.type });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: SHARE_TITLE,
                    text: SHARE_TEXT + "\n\n" + PAGE_URL,
                    files: [file]
                });
                return;
            }
        } catch (err) {
            console.warn("Image share unsupported or failed:", err);
        }

        // fallback: text + URL only
        if (navigator.share) {
            navigator.share({
                title: SHARE_TITLE,
                text: SHARE_TEXT,
                url: PAGE_URL
            }).catch(() => {});
        } else {
            alert(
                "Your browser doesn't support direct sharing.\n\n" +
                "You can manually share this message:\n\n" +
                SHARE_TITLE + "\n" + SHARE_TEXT + "\n" + PAGE_URL
            );
        }
    });
}

/* individual social icons */
function getShareUrl(platform) {
    const url = encodeURIComponent(PAGE_URL);
    const text = encodeURIComponent(SHARE_TEXT);
    const img = encodeURIComponent(STICKER_IMAGE_PATH);

    switch (platform) {
        case "facebook":
            return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        case "twitter": // X
            return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        case "linkedin":
            return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        case "pinterest":
            return `https://pinterest.com/pin/create/button/?url=${url}&media=${img}&description=${text}`;
        case "instagram":
            // Instagram doesn't have a normal web share URL; open app/site.
            return "https://www.instagram.com/";
        case "tiktok":
            // Same story for TikTok: open site/app.
            return "https://www.tiktok.com/";
        default:
            return PAGE_URL;
    }
}

if (socialButtons.length) {
    socialButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const platform = btn.dataset.platform;
            const shareUrl = getShareUrl(platform);
            window.open(shareUrl, "_blank", "noopener");
        });
    });
}
