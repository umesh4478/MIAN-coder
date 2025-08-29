let slides = document.querySelector(".slides");

let counter = 0;
let totalSlides = document.querySelectorAll(".slide").length;

const showSlide = () => {
  slides.style.transform = `translateX(-${counter * 100}%)`;
};

// ✅ Show first slide initially
showSlide();

// ✅ Auto play
setInterval(() => {
  counter = (counter + 1) % totalSlides;
  showSlide();
}, 5000);
