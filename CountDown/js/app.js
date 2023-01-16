// const Months = [
//   "Januari",
//   "Februari",
//   "Maret",
//   "April",
//   "Mei",
//   "Juni",
//   "Juli",
//   "Agustus",
//   "September",
//   "Oktober",
//   "November",
//   "Desember",
// ];

// const Days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// function zero(i) {
//   if (i < 10) {
//     return "0" + i;
//   } else {
//     return i;
//   }
// }

// const giveAway = document.querySelector(".giveaway");
// const futureDate = new Date(2023, 2, 1, 09, 0, 0);
// const year = futureDate.getFullYear();
// const month = Months[futureDate.getMonth()];
// const day = Days[futureDate.getDay()];
// const date = futureDate.getDate();
// const Hour = zero(futureDate.getHours());
// const minute = zero(futureDate.getMinutes());
// const miliSecond = zero(futureDate.getMilliseconds());
// giveAway.textContent = `Giveaway berakhir pada : ${day} ${date} ${month} ${year}  ${Hour}:${minute}:${miliSecond} `;

// //future time in ms
// const futureTime = futureDate.getTime();

// function CountDown() {
//   let now = new Date().getTime();
//   const time = futureTime - now;

//   //1s = 1000ms
//   //1m = 60s
//   //1h = 60m
//   //1d = 24h

//   const oneDay = 1000 * 60 * 60 * 24;
//   const oneHour = 1000 * 60 * 60;
//   const oneMinute = 1000 * 60;
//   const oneSecond = 1000;
//   const day = Math.floor(time / oneDay);
//   const hour = Math.floor((time % oneDay) / oneHour);
//   const minute = Math.floor((time % oneHour) / oneMinute);
//   const second = Math.floor((time % oneMinute) / oneSecond);

//   const daysText = document.querySelector(".days");
//   const hoursText = document.querySelector(".hours");
//   const minutesText = document.querySelector(".minutes");
//   const secondText = document.querySelector(".second");

//   daysText.textContent = day;
//   hoursText.textContent = hour;
//   minutesText.textContent = minute;
//   secondText.textContent = second;

//   if (time < 0) {
//     daysText.textContent = "Habis";
//   }
// }

// setInterval(() => {
//   CountDown();
// }, 100);
