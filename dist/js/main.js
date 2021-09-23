let deadeline = new Date(2021, 9, 20, 19, 0, 0);
let interval;

$(document).ready(function () {
  // interval = setInterval(countdown, 1000);
  countdown()
});

function countdown() {
  let timer_ = deadeline.getTime() / 1000;
  console.log(timer_)
  let countdownDom = document.querySelector(".flipdown");
  let flipdown = new FlipDown(timer_, 'countdown', {
    theme: "light",
    headings: ["ימים", "שעות", "דקות", "שניות"],
  })
    .start()
    .ifEnded(() => {
      console.log("The countdown has ended! event begin!");
      countdownDom.innerHTML = '<H1 class="timepassed">התחלנו!!</H1>'
    });
  // 
  // let current = new Date();
  // let diff = deadeline - current;
  // let days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
  // let hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
  // let minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
  // let seconds = Math.floor((diff / (1000)) % 60) + "";

  // countdownDom.innerHTML = `
  //   <div data-content="ימים">${days.length === 1 ? `0${days}` : days}</div>
  //   <div data-content="שעות">${hours.length === 1 ? `0${hours}` : hours}</div>
  //   <div data-content="דקות">${minutes.length === 1 ? `0${minutes}` : minutes}</div>
  //   <div data-content="שניות">${seconds.length === 1 ? `0${seconds}` : seconds}</div>
  // `;

  // if (diff < 0) {
  //   clearInterval(interval);
  //   countdownDom.innerHTML = '<H1 class="timepassed">התחלנו!!</H1>'
  // }
}