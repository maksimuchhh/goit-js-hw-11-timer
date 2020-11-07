const CountdownTimer = function ({ selector, targetDate }) {
  this.selector = selector;
  this.targetDate = targetDate;
};
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 01, 2020'),
});
const daysArea = document.querySelector('span[data-value="days"]');
const hoursArea = document.querySelector('span[data-value="hours"]');
const minsArea = document.querySelector('span[data-value="mins"]');
const secsArea = document.querySelector('span[data-value="secs"]');

setInterval(changeTime, 1000);
function changeTime() {
  const date = new Date();
  const time = timer.targetDate - date.getTime();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  addTimeInHTML(days, hours, mins, secs);
}

function addTimeInHTML(days, hours, mins, secs) {
  daysArea.innerHTML = days;
  hoursArea.innerHTML = hours;
  minsArea.innerHTML = mins;
  secsArea.innerHTML = secs;
}
