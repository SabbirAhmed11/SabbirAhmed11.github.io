
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // Add ScrollTrigger for the footer
  ScrollTrigger.create({
      trigger: "footer",
      start: "top bottom-=50", // Trigger when the footer is about to come into view
      end: "bottom bottom",
      scroller: "#main",
      onEnter: () => console.log("Footer entered viewport"),
  });
}
loco();



gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
      const videoElement = document.querySelector("#page>video");
      videoElement.play();
    }
})





gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})


gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page-bottom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity:0
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl.to("#page1>h1",{
    top:`-50%`
})






var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl1.to("#page2>h1",{
    top:`-50%`
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl2.to("#page4>#center-page4",{
    top:`-50%`
})



function canvas(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `

./assets/images/timewarp_image/wireframe/a001.png
./assets/images/timewarp_image/wireframe/a002.png
./assets/images/timewarp_image/wireframe/a003.png
./assets/images/timewarp_image/wireframe/a004.png
./assets/images/timewarp_image/wireframe/a005.png
./assets/images/timewarp_image/wireframe/a006.png
./assets/images/timewarp_image/wireframe/a007.png
./assets/images/timewarp_image/wireframe/a008.png
./assets/images/timewarp_image/wireframe/a009.png
./assets/images/timewarp_image/wireframe/a010.png
./assets/images/timewarp_image/wireframe/a011.png
./assets/images/timewarp_image/wireframe/a012.png
./assets/images/timewarp_image/wireframe/a013.png
./assets/images/timewarp_image/wireframe/a014.png
./assets/images/timewarp_image/wireframe/a015.png
./assets/images/timewarp_image/wireframe/a016.png
./assets/images/timewarp_image/wireframe/a017.png
./assets/images/timewarp_image/wireframe/a018.png
./assets/images/timewarp_image/wireframe/a019.png
./assets/images/timewarp_image/wireframe/a020.png
./assets/images/timewarp_image/wireframe/a021.png
./assets/images/timewarp_image/wireframe/a022.png
./assets/images/timewarp_image/wireframe/a023.png
./assets/images/timewarp_image/wireframe/a024.png
./assets/images/timewarp_image/wireframe/a025.png
./assets/images/timewarp_image/wireframe/a026.png
./assets/images/timewarp_image/wireframe/a027.png
./assets/images/timewarp_image/wireframe/a028.png
./assets/images/timewarp_image/wireframe/a029.png
./assets/images/timewarp_image/wireframe/a030.png
./assets/images/timewarp_image/wireframe/a031.png
./assets/images/timewarp_image/wireframe/a032.png
./assets/images/timewarp_image/wireframe/a033.png
./assets/images/timewarp_image/wireframe/a034.png
./assets/images/timewarp_image/wireframe/a035.png
./assets/images/timewarp_image/wireframe/a036.png
./assets/images/timewarp_image/wireframe/a037.png
./assets/images/timewarp_image/wireframe/a038.png
./assets/images/timewarp_image/wireframe/a039.png
./assets/images/timewarp_image/wireframe/a040.png
./assets/images/timewarp_image/wireframe/a041.png
./assets/images/timewarp_image/wireframe/a042.png
./assets/images/timewarp_image/wireframe/a043.png
./assets/images/timewarp_image/wireframe/a044.png
./assets/images/timewarp_image/wireframe/a045.png
./assets/images/timewarp_image/wireframe/a046.png
./assets/images/timewarp_image/wireframe/a047.png
./assets/images/timewarp_image/wireframe/a048.png
./assets/images/timewarp_image/wireframe/a049.png
./assets/images/timewarp_image/wireframe/a050.png
./assets/images/timewarp_image/wireframe/a051.png
./assets/images/timewarp_image/wireframe/a052.png
./assets/images/timewarp_image/wireframe/a053.png
./assets/images/timewarp_image/wireframe/a054.png
./assets/images/timewarp_image/wireframe/a055.png
./assets/images/timewarp_image/wireframe/a056.png
./assets/images/timewarp_image/wireframe/a057.png
./assets/images/timewarp_image/wireframe/a058.png
./assets/images/timewarp_image/wireframe/a059.png
./assets/images/timewarp_image/wireframe/a060.png
./assets/images/timewarp_image/wireframe/a061.png
./assets/images/timewarp_image/wireframe/a062.png
./assets/images/timewarp_image/wireframe/a063.png
./assets/images/timewarp_image/wireframe/a064.png
./assets/images/timewarp_image/wireframe/a065.png
./assets/images/timewarp_image/wireframe/a066.png
./assets/images/timewarp_image/wireframe/a067.png
./assets/images/timewarp_image/wireframe/a068.png
./assets/images/timewarp_image/wireframe/a069.png
./assets/images/timewarp_image/wireframe/a070.png
./assets/images/timewarp_image/wireframe/a071.png
./assets/images/timewarp_image/wireframe/a072.png
./assets/images/timewarp_image/wireframe/a073.png
./assets/images/timewarp_image/wireframe/a074.png
./assets/images/timewarp_image/wireframe/a075.png
./assets/images/timewarp_image/wireframe/a076.png
./assets/images/timewarp_image/wireframe/a077.png
./assets/images/timewarp_image/wireframe/a078.png
./assets/images/timewarp_image/wireframe/a079.png
./assets/images/timewarp_image/wireframe/a080.png
./assets/images/timewarp_image/wireframe/a081.png
./assets/images/timewarp_image/wireframe/a082.png
./assets/images/timewarp_image/wireframe/a083.png
./assets/images/timewarp_image/wireframe/a084.png
./assets/images/timewarp_image/wireframe/a085.png
./assets/images/timewarp_image/wireframe/a086.png
./assets/images/timewarp_image/wireframe/a087.png
./assets/images/timewarp_image/wireframe/a088.png
./assets/images/timewarp_image/wireframe/a089.png
./assets/images/timewarp_image/wireframe/a090.png
./assets/images/timewarp_image/wireframe/a091.png
./assets/images/timewarp_image/wireframe/a092.png
./assets/images/timewarp_image/wireframe/a093.png
./assets/images/timewarp_image/wireframe/a094.png
./assets/images/timewarp_image/wireframe/a095.png
./assets/images/timewarp_image/wireframe/a096.png
./assets/images/timewarp_image/wireframe/a097.png
./assets/images/timewarp_image/wireframe/a098.png
./assets/images/timewarp_image/wireframe/a099.png
./assets/images/timewarp_image/wireframe/a100.png
./assets/images/timewarp_image/wireframe/a101.png
./assets/images/timewarp_image/wireframe/a102.png
./assets/images/timewarp_image/wireframe/a103.png
./assets/images/timewarp_image/wireframe/a104.png
./assets/images/timewarp_image/wireframe/a105.png
./assets/images/timewarp_image/wireframe/a106.png
./assets/images/timewarp_image/wireframe/a107.png
./assets/images/timewarp_image/wireframe/a108.png
./assets/images/timewarp_image/wireframe/a109.png
./assets/images/timewarp_image/wireframe/a110.png
./assets/images/timewarp_image/wireframe/a111.png
./assets/images/timewarp_image/wireframe/a112.png
./assets/images/timewarp_image/wireframe/a113.png
./assets/images/timewarp_image/wireframe/a114.png
./assets/images/timewarp_image/wireframe/a115.png
./assets/images/timewarp_image/wireframe/a116.png
./assets/images/timewarp_image/wireframe/a117.png
./assets/images/timewarp_image/wireframe/a118.png
./assets/images/timewarp_image/wireframe/a119.png
./assets/images/timewarp_image/wireframe/a120.png
./assets/images/timewarp_image/wireframe/a121.png
./assets/images/timewarp_image/wireframe/a122.png
./assets/images/timewarp_image/wireframe/a123.png
./assets/images/timewarp_image/wireframe/a124.png
./assets/images/timewarp_image/wireframe/a125.png
./assets/images/timewarp_image/wireframe/a126.png
./assets/images/timewarp_image/wireframe/a127.png
./assets/images/timewarp_image/wireframe/a128.png
./assets/images/timewarp_image/wireframe/a129.png
./assets/images/timewarp_image/wireframe/a130.png
./assets/images/timewarp_image/wireframe/a131.png
./assets/images/timewarp_image/wireframe/a132.png
./assets/images/timewarp_image/wireframe/a133.png
./assets/images/timewarp_image/wireframe/a134.png
./assets/images/timewarp_image/wireframe/a135.png
./assets/images/timewarp_image/wireframe/a136.png
./assets/images/timewarp_image/wireframe/a137.png
./assets/images/timewarp_image/wireframe/a138.png
./assets/images/timewarp_image/wireframe/a139.png
./assets/images/timewarp_image/wireframe/a140.png
./assets/images/timewarp_image/wireframe/a141.png
./assets/images/timewarp_image/wireframe/a142.png
./assets/images/timewarp_image/wireframe/a143.png
./assets/images/timewarp_image/wireframe/a144.png
./assets/images/timewarp_image/wireframe/a145.png
./assets/images/timewarp_image/wireframe/a146.png
./assets/images/timewarp_image/wireframe/a147.png
./assets/images/timewarp_image/wireframe/a148.png
./assets/images/timewarp_image/wireframe/a149.png
./assets/images/timewarp_image/wireframe/a150.png
./assets/images/timewarp_image/wireframe/a151.png
./assets/images/timewarp_image/wireframe/a152.png
./assets/images/timewarp_image/wireframe/a153.png
./assets/images/timewarp_image/wireframe/a154.png
./assets/images/timewarp_image/wireframe/a155.png
./assets/images/timewarp_image/wireframe/a156.png
./assets/images/timewarp_image/wireframe/a157.png
./assets/images/timewarp_image/wireframe/a158.png
./assets/images/timewarp_image/wireframe/a159.png
./assets/images/timewarp_image/wireframe/a160.png
./assets/images/timewarp_image/wireframe/a161.png
./assets/images/timewarp_image/wireframe/a162.png
./assets/images/timewarp_image/wireframe/a163.png
./assets/images/timewarp_image/wireframe/a164.png
./assets/images/timewarp_image/wireframe/a165.png
./assets/images/timewarp_image/wireframe/a166.png
./assets/images/timewarp_image/wireframe/a167.png
./assets/images/timewarp_image/wireframe/a168.png
./assets/images/timewarp_image/wireframe/a169.png
./assets/images/timewarp_image/wireframe/a170.png
./assets/images/timewarp_image/wireframe/a171.png
./assets/images/timewarp_image/wireframe/a172.png
./assets/images/timewarp_image/wireframe/a173.png
./assets/images/timewarp_image/wireframe/a174.png
./assets/images/timewarp_image/wireframe/a175.png
./assets/images/timewarp_image/wireframe/a176.png
./assets/images/timewarp_image/wireframe/a177.png
./assets/images/timewarp_image/wireframe/a178.png
./assets/images/timewarp_image/wireframe/a179.png
./assets/images/timewarp_image/wireframe/a180.png
./assets/images/timewarp_image/wireframe/a181.png
./assets/images/timewarp_image/wireframe/a182.png
./assets/images/timewarp_image/wireframe/a183.png
./assets/images/timewarp_image/wireframe/a184.png
./assets/images/timewarp_image/wireframe/a185.png
./assets/images/timewarp_image/wireframe/a186.png
./assets/images/timewarp_image/wireframe/a187.png
./assets/images/timewarp_image/wireframe/a188.png
./assets/images/timewarp_image/wireframe/a189.png
./assets/images/timewarp_image/wireframe/a190.png
./assets/images/timewarp_image/wireframe/a191.png
./assets/images/timewarp_image/wireframe/a192.png
./assets/images/timewarp_image/wireframe/a193.png
./assets/images/timewarp_image/wireframe/a194.png
./assets/images/timewarp_image/wireframe/a195.png
./assets/images/timewarp_image/wireframe/a196.png
./assets/images/timewarp_image/wireframe/a197.png
./assets/images/timewarp_image/wireframe/a198.png
./assets/images/timewarp_image/wireframe/a199.png
./assets/images/timewarp_image/wireframe/a200.png
./assets/images/timewarp_image/wireframe/a201.png
./assets/images/timewarp_image/wireframe/a202.png
./assets/images/timewarp_image/wireframe/a203.png
./assets/images/timewarp_image/wireframe/a204.png
./assets/images/timewarp_image/wireframe/a205.png
./assets/images/timewarp_image/wireframe/a206.png
./assets/images/timewarp_image/wireframe/a207.png
./assets/images/timewarp_image/wireframe/a208.png
./assets/images/timewarp_image/wireframe/a209.png
./assets/images/timewarp_image/wireframe/a210.png
./assets/images/timewarp_image/wireframe/a211.png
./assets/images/timewarp_image/wireframe/a212.png
./assets/images/timewarp_image/wireframe/a213.png
./assets/images/timewarp_image/wireframe/a214.png
./assets/images/timewarp_image/wireframe/a215.png
./assets/images/timewarp_image/wireframe/a216.png
./assets/images/timewarp_image/wireframe/a217.png
./assets/images/timewarp_image/wireframe/a218.png


 `;
  return data.split("\n")[index];
}

const frameCount = 218;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();



function canvas1(){
  const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./assets/images/tw_screens/f001.png
./assets/images/tw_screens/f002.png
./assets/images/tw_screens/f003.png
./assets/images/tw_screens/f004.png
./assets/images/tw_screens/f005.png
./assets/images/tw_screens/f006.png
./assets/images/tw_screens/f007.png
./assets/images/tw_screens/f008.png
./assets/images/tw_screens/f009.png
./assets/images/tw_screens/f010.png
./assets/images/tw_screens/f011.png
./assets/images/tw_screens/f012.png
./assets/images/tw_screens/f013.png
./assets/images/tw_screens/f014.png
./assets/images/tw_screens/f015.png
./assets/images/tw_screens/f016.png
./assets/images/tw_screens/f017.png
./assets/images/tw_screens/f018.png
./assets/images/tw_screens/f019.png
./assets/images/tw_screens/f020.png
./assets/images/tw_screens/f021.png
./assets/images/tw_screens/f022.png
./assets/images/tw_screens/f023.png
./assets/images/tw_screens/f024.png
./assets/images/tw_screens/f025.png
./assets/images/tw_screens/f026.png
./assets/images/tw_screens/f027.png
./assets/images/tw_screens/f028.png
./assets/images/tw_screens/f029.png
./assets/images/tw_screens/f030.png
./assets/images/tw_screens/f031.png
./assets/images/tw_screens/f032.png
./assets/images/tw_screens/f033.png
./assets/images/tw_screens/f034.png
./assets/images/tw_screens/f035.png
./assets/images/tw_screens/f036.png
./assets/images/tw_screens/f037.png
./assets/images/tw_screens/f038.png
./assets/images/tw_screens/f039.png
./assets/images/tw_screens/f040.png
./assets/images/tw_screens/f041.png
./assets/images/tw_screens/f042.png
./assets/images/tw_screens/f043.png
./assets/images/tw_screens/f044.png
./assets/images/tw_screens/f045.png
./assets/images/tw_screens/f046.png
./assets/images/tw_screens/f047.png
./assets/images/tw_screens/f048.png
./assets/images/tw_screens/f049.png
./assets/images/tw_screens/f050.png
./assets/images/tw_screens/f051.png
./assets/images/tw_screens/f052.png
./assets/images/tw_screens/f053.png
./assets/images/tw_screens/f054.png
./assets/images/tw_screens/f055.png


`;
return data.split("\n")[index];
}

const frameCount = 56;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page18`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#troff",{
  opacity:0
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#snroff",{
  opacity:0
})



gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
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
 * Custom cursor
 */

document.addEventListener('DOMContentLoaded', function() {
  const cursors = document.querySelectorAll("[data-cursor]");
  const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

  window.addEventListener("mousemove", function (event) {
      const posX = event.clientX;
      const posY = event.clientY;

      // Cursor dot position
      cursors[0].style.left = `${posX}px`;
      cursors[0].style.top = `${posY}px`;

      // Cursor outline position with a slight delay
      setTimeout(function () {
          cursors[1].style.left = `${posX}px`;
          cursors[1].style.top = `${posY}px`;
      }, 80);
  });

  hoveredElements.forEach((el) => {
      el.addEventListener("mouseenter", function () {
          cursors[0].classList.add("hovered");
          cursors[1].classList.add("hovered");
      });

      el.addEventListener("mouseleave", function () {
          cursors[0].classList.remove("hovered");
          cursors[1].classList.remove("hovered");
      });
  });
});
