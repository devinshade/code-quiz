/* 
WHEN I click the start button
THEN a timer starts and I am presented with a question
*/

// TODO: When I click the start button then a timer starts

let counter = 0;
let timeout;
let timer_on = 0;

function timedCount() {
  document.getElementById("countdown").value = counter;
  counter++;
  timeout = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(timeout);
  timer_on = 0;
}

// TODO: When I click the start button then I'm presented with a question