
//без выбора индекса акт. слайда
// const slides = document.querySelectorAll(".slide");
// const colors = [
//   "blueviolet",
//   "cyan",
//   "rgb(34, 95, 10)",
//   "rgb(43, 41, 175)",
//   "rgb(134, 108, 131)",
//   "rgb(124, 212, 22)",
//   "rgb(72, 77, 67)",
// ];

// for (const slide of slides) {
//   slide.addEventListener("click", () => {
//     clearActiveClass();
//     slide.classList.add("active");
//     slide.style.color = colors[Math.ceil(Math.random() * (colors.length - 1))];
//   });
// }


const slides = document.querySelectorAll(".slide");
    const colors = [
      "blueviolet",
      "cyan",
      "rgb(34, 95, 10)",
      "rgb(43, 41, 175)",
      "rgb(134, 108, 131)",
      "rgb(124, 212, 22)",
      "rgb(72, 77, 67)",
    ];
    
    function clearActiveClass() {
  slides.forEach((slide) => slide.classList.remove("active"));
}

//ф-ция с выбором индекса акт. слайда
function slidePlagin(activeSlide){        //moжно задать по умолчанию (activeSlide=2) 
    slides[activeSlide].classList.add("active");
    slides[activeSlide].style.color = colors[Math.ceil(Math.random() * (colors.length - 1))]; //рандомній цвет h3
    for (const slide of slides) {
      slide.addEventListener("click", () => {
        clearActiveClass();
        slide.classList.add("active");
        slide.style.color = colors[Math.ceil(Math.random() * (colors.length - 1))];
      });
    }
  }

slidePlagin(2); //запуск ф-ции с индексом 2