// public/javascripts/timeUpdater.js
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call to display time immediately