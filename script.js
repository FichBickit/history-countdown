const targetDate = new Date('Nov 12, 2025 12:15:00').getTime();
const successText = document.querySelector(".successText");
const mainText = document.querySelector(".mainText");
const body = document.getElementById("body");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  let distance = targetDate - now;

  // If countdown passed zero, execute your success logic once
  if (distance <= 0) {
    // Optional: run your previous "success" code here
    successText.style.display = "block";
    mainText.innerHTML = "Days of freedom:";
    body.style.background = "red";
    body.style.backgroundColor = "green"; // example

    // Now start counting up instead of down
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
