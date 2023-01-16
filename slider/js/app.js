const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const slider = document.querySelectorAll(".slider");
let counter = 1;
next.addEventListener("click", function () {
  if (counter > slider.length - 1) {
    counter = 0;
  }
  sliderImage();
  counter++;
  console.log(counter);
});

previous.addEventListener("click", function () {
  if (counter < 0) {
    counter = slider.length - 1;
  }
  sliderImage();
  counter--;
  console.log(counter);
});

function sliderImage() {
  slider.forEach((el) => {
    el.style.transform = `translateX(-${counter * 100}%)`;
  });
}
