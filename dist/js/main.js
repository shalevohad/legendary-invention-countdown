let deadeline = new Date(2023, 2, 20, 19, 0, 0);
let interval;

$(document).ready(function () {
  // interval = setInterval(countdown, 1000);
  countdown()
});

function countdown() {
  let timer_ = deadeline.getTime() / 1000;
  let countdownDom = document.querySelector(".flipdown");
  let flipdown = new FlipDown(timer_, 'countdown', {
    theme: "light",
    headings: ["ימים", "שעות", "דקות", "שניות"],
  })
    .start()
    .ifEnded(() => {
      console.log("The countdown has ended! event begin!");
      countdownDom.innerHTML = '<H1 class="timepassed">התחלנו!!!</H1>'
    });
}
