let slides = document.querySelectorAll(".slide");
let counter = 0;


slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});


const slideimg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        slide.style.transition = "transform 3s ease-in-out"; 
    });
};


// setInterval(() => {
//     counter = (counter + 1) % slides.length; 
//     slideimg();
// }, 5000);   