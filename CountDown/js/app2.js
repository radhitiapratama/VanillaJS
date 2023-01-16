const newYear = new Date(2024, 0, 1);
const boxWrapper = document.querySelector(".box-wrapper");
const box = document.querySelectorAll(".box-text");
const text = document.querySelector(`h1`);
console.log(text);
window.onload = () => {
  box.forEach((el) => {
    el.parentElement.style.transform = "translateY(0)";
    el.parentElement.style.opacity = "1";
  });
};

function countDown() {
  const futureMs = newYear.getTime();
  const now = new Date().getTime();
  //1s = 1000ms
  //1m = 60s
  //1h = 60m
  //1d = 24h
  //1month  = 24d

  const time = futureMs - now;
  const second = 1000;
  const minute = 1000 * 60;
  const hour = 1000 * 60 * 60;
  const day = 1000 * 60 * 60 * 24;

  let d = Math.floor(time / day);
  let h = Math.floor((time % day) / hour);
  let m = Math.floor((time % hour) / minute);
  let s = Math.floor((time % minute) / second);
  d = zero(d);
  h = zero(h);
  m = zero(m);
  s = zero(s);

  const arr = [d, h, m, s];
  for (let i = 0; i < box.length; i++) {
    box[i].textContent = arr[i];
  }

  //jika waktu lebih kecil dari 0 countdown selesai
  if (time < 0) {
    text.textContent = "Happy new Year 2024  ";
    clearInterval();
  }
}

function zero(i) {
  if (i < 10) {
    return `0${i}`;
  } else {
    return i;
  }
}
setInterval(() => {
  countDown();
}, 1000);
