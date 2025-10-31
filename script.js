const targetDate = new Date('Oct 31, 2025 20:38:20').getTime();
const successText = document.querySelector(".successText");
const mainText = document.querySelector(".mainText");
const body = document.getElementById("body");

body.classList.remove("animation");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  let distance = targetDate - now;

  if (distance <= 0) {
    body.classList.add("animation");
    successText.style.display = "block";
    mainText.innerHTML = "Days of freedom:";
    body.style.background = "red";
    body.style.backgroundColor = "green"; 
    distance = Math.abs(distance);
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('daysTime').textContent = String(days).padStart(2, '0');
  document.getElementById('hoursTime').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutesTime').textContent = String(minutes).padStart(2, '0');
  document.getElementById('secondsTime').textContent = String(seconds).padStart(2, '0');
}, 1000);
