const images = ['images/Araki.png', 'images/Araki2.jpg', 'images/Araki3.jpg'];
let current = 0;
const section = document.querySelector('.Araki');

function changeImage() {
    section.classList.add('animate');

    setTimeout(() => {
        section.style.background = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${images[current]}') no-repeat center center/cover`;
        section.classList.remove('animate');
        current = (current + 1) % images.length;
    }, 500); 
}

document.addEventListener("DOMContentLoaded", () => {
  const aboutBlocks = document.querySelectorAll(".about-content > div, .section-title h2");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 }); 

  aboutBlocks.forEach(block => observer.observe(block));
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutBlocks = document.querySelectorAll(".brand-content > div, .section-title h2");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 }); 

  aboutBlocks.forEach(block => observer.observe(block));
});


changeImage();
setInterval(changeImage, 3000);
