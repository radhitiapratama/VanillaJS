const imgPreview = document.querySelector(".img-preview img");
const img = document.querySelectorAll(".box img");
img.forEach((el) => {
  el.addEventListener("click", function () {
    const src = this.getAttribute("src");
    imgPreview.setAttribute("src", src);
    const active = document.querySelector(".box .active");

    if (active) {
      active.classList.remove("active");
    }

    this.classList.add("active");
  });
});
