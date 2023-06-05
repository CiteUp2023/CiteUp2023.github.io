const day = document.querySelector(".day p");
const hour = document.querySelector(".hour p");
const minute = document.querySelector(".minute p");
const second = document.querySelector(".second p");

let countDownDate = new Date("June 17, 2023 00:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}, 1000);
