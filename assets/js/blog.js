window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('#about-section ul li a');

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.parentElement.classList.add('active');
            link.style.color = "#1e90ff"; // Blue when active
            link.style.textDecoration = "underline"; // Underline when active
        } else {
            link.style.color = "#fff"; // White when not active
            link.style.textDecoration = "none"; // No underline when not active
        }
    });
});

window.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('about-section');
    const introductionSection = document.getElementById('introduction');
    
    const scrollPosition = window.scrollY || window.pageYOffset;
    const introTop = introductionSection.offsetTop;
    const offset = 200; // 200px from the top when sticky

    // Calculate the new position for the about section
    if (scrollPosition >= introTop - offset) {
        aboutSection.style.position = 'fixed';
        aboutSection.style.top = offset + 'px';
    } else {
        aboutSection.style.position = 'absolute';
        aboutSection.style.top = '900px'; // Initially align with introduction
    }
});


document.querySelector('.pdf-btn').addEventListener('click', function() {
    window.open('./assets/images/blog_image/Video_Based_Vehicle_Detection_and_Tracking_using_Image_Processing_and_Deep_Learning.pdf', '_blank');
});

document.querySelector('.github-btn').addEventListener('click', function() {
    window.open('https://github.com/sabbirahmedAUST/Video_based_Vehicle_Detection_and_Tracking_using_Image_Processing_and_Deep-Learning', '_blank');
});

// Scroll to top functionality
const backTopBtn = document.querySelector('.back-top-btn');

backTopBtn.addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});


/**
 * Progress Bar
 */

let progressBar = document.querySelector(".progress-bar");
let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function(){
	let progress = (scrollY / documentHeight) * 100;
	progressBar.style.width = progress + "%";
}
