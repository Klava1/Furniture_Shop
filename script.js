function christmasCountdown() {
  const christmasDate = new Date("25 December, 2024, 00:00");

  const now = new Date();
  const diff = christmasDate - now;
  const msInSecond = 1000;
  const msInMinute = 1000 * 60;
  const msInHour = 1000 * 60 * 60;
  const msInDay = 1000 * 60 * 60 * 24;

  const daysLeft = Math.floor(diff / msInDay);
  document.querySelector(".days").textContent = daysLeft;

  const hoursLeft = Math.floor((diff % msInDay) / msInHour);
  document.querySelector(".hours").textContent = hoursLeft;

  const minutesLeft = Math.floor((diff % msInHour) / msInMinute);
  document.querySelector(".minutes").textContent = minutesLeft;

  const secondsLeft = Math.floor((diff % msInMinute) / msInSecond);
  document.querySelector(".seconds").textContent = secondsLeft;
  console.log(secondsLeft);

  if (diff <= 1000) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timeID);
    merryChristmas();
  }
}

let timeID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
  const heading = document.querySelector("h1");
  heading.textContent = "Yay we are open now!!!".toUpperCase();
  heading.classList.add("red");
}

const btn = document.querySelector("#playButton");
btn.addEventListener("click", function () {
  document.querySelector("#myAudio").play();
});




const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    removeFocus();
    item.classList.add("selected");
  });

  removeFocus = () => {
    items.forEach((item) => {
      item.classList.remove("selected");
    });
  };
});

