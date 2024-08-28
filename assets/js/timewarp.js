function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

//___________________________________________________________________________________________
// Activate header on scroll
const header = document.querySelector("[data-header]");

ScrollTrigger.create({
    trigger: header,
    start: "top -10%",
    end: "bottom top",
    onEnter: () => header.classList.add("active"),
    onLeaveBack: () => header.classList.remove("active"),
    scroller: "#main"
});
//___________________________________________________________________________________________

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
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

./assets/images/structure/a01.png
./assets/images/structure/a02.png
./assets/images/structure/a03.png
./assets/images/structure/a04.png
./assets/images/structure/a05.png
./assets/images/structure/a06.png
./assets/images/structure/a07.png
./assets/images/structure/a08.png
./assets/images/structure/a09.png
./assets/images/structure/a010.png
./assets/images/structure/a011.png
./assets/images/structure/a012.png
./assets/images/structure/a013.png
./assets/images/structure/a014.png
./assets/images/structure/a1.png
./assets/images/structure/a2.png
./assets/images/structure/a3.png
./assets/images/structure/a4.png
./assets/images/structure/a5.png
./assets/images/structure/a6.png
./assets/images/structure/a7.png
./assets/images/structure/a8.png
./assets/images/structure/a9.png
./assets/images/structure/a10.png
./assets/images/structure/a11.png
./assets/images/structure/a12.png
./assets/images/structure/a13.png
./assets/images/structure/a14.png
./assets/images/structure/a15.png
./assets/images/structure/a16.png
./assets/images/structure/a17.png
./assets/images/structure/a18.png
./assets/images/structure/a19.png
./assets/images/structure/a20.png
./assets/images/structure/a21.png
./assets/images/structure/a22.png
./assets/images/structure/a23.png
./assets/images/structure/a24.png
./assets/images/structure/a25.png
./assets/images/structure/a26.png
./assets/images/structure/a27.png
./assets/images/structure/a28.png
./assets/images/structure/a29.png
./assets/images/structure/a30.png
./assets/images/structure/a31.png
./assets/images/structure/a32.png
./assets/images/structure/a33.png
./assets/images/structure/a34.png
./assets/images/structure/a35.png
./assets/images/structure/a36.png
./assets/images/structure/a37.png
./assets/images/structure/a38.png
./assets/images/structure/a39.png
./assets/images/structure/a40.png
./assets/images/structure/a41.png
./assets/images/structure/a42.png
./assets/images/structure/a43.png
./assets/images/structure/a44.png
./assets/images/structure/a45.png
./assets/images/structure/a46.png
./assets/images/structure/a47.png
./assets/images/structure/a48.png
./assets/images/structure/a49.png
./assets/images/structure/a50.png
./assets/images/structure/a51.png
./assets/images/structure/a52.png
./assets/images/structure/a53.png
./assets/images/structure/a54.png
./assets/images/structure/a55.png
./assets/images/structure/a56.png
./assets/images/structure/a57.png
./assets/images/structure/a58.png
./assets/images/structure/a59.png
./assets/images/structure/a60.png
./assets/images/structure/a61.png
./assets/images/structure/a62.png
./assets/images/structure/a63.png
./assets/images/structure/a64.png
./assets/images/structure/a65.png
./assets/images/structure/a66.png
./assets/images/structure/a67.png
./assets/images/structure/a68.png
./assets/images/structure/a69.png
./assets/images/structure/a70.png
./assets/images/structure/a71.png
./assets/images/structure/a72.png
./assets/images/structure/a73.png
./assets/images/structure/a74.png
./assets/images/structure/a75.png
./assets/images/structure/a76.png
./assets/images/structure/a77.png
./assets/images/structure/a78.png
./assets/images/structure/a79.png
./assets/images/structure/a80.png
./assets/images/structure/a81.png
./assets/images/structure/a82.png
./assets/images/structure/a83.png
./assets/images/structure/a84.png
./assets/images/structure/a85.png
./assets/images/structure/a86.png
./assets/images/structure/a87.png
./assets/images/structure/a88.png
./assets/images/structure/a89.png
./assets/images/structure/a90.png
./assets/images/structure/a91.png
./assets/images/structure/a92.png
./assets/images/structure/a93.png
./assets/images/structure/a94.png
./assets/images/structure/a95.png
./assets/images/structure/a96.png
./assets/images/structure/a97.png
./assets/images/structure/a98.png
./assets/images/structure/a99.png
./assets/images/structure/a100.png
./assets/images/structure/a101.png
./assets/images/structure/a102.png
./assets/images/structure/a103.png
./assets/images/structure/a104.png
./assets/images/structure/a105.png
./assets/images/structure/a106.png
./assets/images/structure/a107.png
./assets/images/structure/a108.png
./assets/images/structure/a109.png
./assets/images/structure/a110.png
./assets/images/structure/a111.png
./assets/images/structure/a112.png
./assets/images/structure/a113.png
./assets/images/structure/a114.png
./assets/images/structure/a115.png
./assets/images/structure/a116.png
./assets/images/structure/a117.png
./assets/images/structure/a118.png
./assets/images/structure/a119.png
./assets/images/structure/a120.png
./assets/images/structure/a121.png
./assets/images/structure/a122.png
./assets/images/structure/a123.png
./assets/images/structure/a124.png
./assets/images/structure/a125.png
./assets/images/structure/a126.png
./assets/images/structure/a127.png
./assets/images/structure/a128.png
./assets/images/structure/a129.png
./assets/images/structure/a130.png
./assets/images/structure/a131.png
./assets/images/structure/a132.png
./assets/images/structure/a133.png
./assets/images/structure/a134.png
./assets/images/structure/a135.png
./assets/images/structure/a136.png
./assets/images/structure/a137.png
./assets/images/structure/a138.png
./assets/images/structure/a139.png
./assets/images/structure/a140.png
./assets/images/structure/a141.png
./assets/images/structure/a142.png
./assets/images/structure/a143.png
./assets/images/structure/a144.png
./assets/images/structure/a145.png
./assets/images/structure/a146.png
./assets/images/structure/a147.png
./assets/images/structure/a148.png
./assets/images/structure/a149.png
./assets/images/structure/a150.png
./assets/images/structure/a151.png
./assets/images/structure/a152.png
./assets/images/structure/a153.png
./assets/images/structure/a154.png
./assets/images/structure/a155.png
./assets/images/structure/a156.png
./assets/images/structure/a157.png
./assets/images/structure/a158.png
./assets/images/structure/a159.png
./assets/images/structure/a160.png
./assets/images/structure/a161.png
./assets/images/structure/a162.png
./assets/images/structure/a163.png
./assets/images/structure/a164.png
./assets/images/structure/a165.png
./assets/images/structure/a166.png
./assets/images/structure/a167.png
./assets/images/structure/a168.png
./assets/images/structure/a169.png
./assets/images/structure/a170.png
./assets/images/structure/a171.png
./assets/images/structure/a172.png
./assets/images/structure/a173.png
./assets/images/structure/a174.png
./assets/images/structure/a175.png
./assets/images/structure/a176.png
./assets/images/structure/a177.png
./assets/images/structure/a178.png
./assets/images/structure/a179.png
./assets/images/structure/a180.png
./assets/images/structure/a181.png
./assets/images/structure/a182.png
./assets/images/structure/a183.png
./assets/images/structure/a184.png
./assets/images/structure/a185.png
./assets/images/structure/a186.png
./assets/images/structure/a187.png
./assets/images/structure/a188.png
./assets/images/structure/a189.png
./assets/images/structure/a190.png
./assets/images/structure/a191.png
./assets/images/structure/a192.png
./assets/images/structure/a193.png
./assets/images/structure/a194.png
./assets/images/structure/a195.png
./assets/images/structure/a196.png
./assets/images/structure/a197.png
./assets/images/structure/a198.png
./assets/images/structure/a199.png
./assets/images/structure/a200.png
./assets/images/structure/a201.png
./assets/images/structure/a202.png
./assets/images/structure/a203.png
./assets/images/structure/a204.png

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
./assets/images/tw/f0.png
./assets/images/tw/f1.png
./assets/images/tw/f2.png
./assets/images/tw/f2.png
./assets/images/tw/f2.png
./assets/images/tw/f3.png
./assets/images/tw/f3.png
./assets/images/tw/f4.png
./assets/images/tw/f4.png
./assets/images/tw/f5.png
./assets/images/tw/f6.png
./assets/images/tw/f7.png
./assets/images/tw/f8.png
./assets/images/tw/f9.png
./assets/images/tw/f10.png
./assets/images/tw/f11.png
./assets/images/tw/f12.png
./assets/images/tw/f13.png
./assets/images/tw/f13.png
./assets/images/tw/f13.png
./assets/images/tw/f13.png
./assets/images/tw/f14.png
./assets/images/tw/f15.png
./assets/images/tw/f16.png
./assets/images/tw/f17.png
./assets/images/tw/f18.png
./assets/images/tw/f19.png
./assets/images/tw/f20.png
./assets/images/tw/f21.png
./assets/images/tw/f22.png
./assets/images/tw/f23.png
./assets/images/tw/f24.png
./assets/images/tw/f25.png
./assets/images/tw/f26.png
./assets/images/tw/f27.png
./assets/images/tw/f28.png
./assets/images/tw/f29.png
./assets/images/tw/f30.png
./assets/images/tw/f31.png
./assets/images/tw/f32.png
./assets/images/tw/f33.png
./assets/images/tw/f34.png
./assets/images/tw/f35.png
./assets/images/tw/f36.png
./assets/images/tw/f37.png
./assets/images/tw/f38.png
./assets/images/tw/f39.png
./assets/images/tw/f40.png
./assets/images/tw/f41.png
./assets/images/tw/f42.png

`;
return data.split("\n")[index];
}

const frameCount = 50;

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
