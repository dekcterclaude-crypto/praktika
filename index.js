const counterEl = document.getElementById('counter');
const body = document.body;

let minutes = 0;
let seconds = 0;
let interval = null;

function updateCounterDisplay() {
  const minStr = String(minutes).padStart(2, '0');
  const secStr = String(seconds).padStart(2, '0');
  counterEl.textContent = `${minStr}:${secStr}`;
}

function startCounter(speedMs) {
  clearInterval(interval);
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateCounterDisplay();
  }, speedMs);
}

document.getElementById('speedPlus').addEventListener('click', () => {
  startCounter(500); 
  body.style.backgroundColor = '#ccffcc'; 
  counterEl.style.color = '#ff9999'; 
});

document.getElementById('speedMinus').addEventListener('click', () => {
  startCounter(1500);  
  body.style.backgroundColor = '#ffcccc'; 
  counterEl.style.color = '#99ff99'; 
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  updateCounterDisplay();
  body.style.backgroundColor = '#ccc';   
  counterEl.style.color = 'black';  
});

updateCounterDisplay();
