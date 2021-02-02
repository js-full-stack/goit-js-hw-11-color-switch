const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

let setIntervalId = null;

refs.startBtn.addEventListener("click", changesColorBody);
refs.stopBtn.addEventListener("click", resetChangesColorBody);

function changesColorBody(event) {
  setIntervalId = setInterval(() => {
    const randomaizer = randomIntegerFromInterval(0, [colors.length - 1]);

    refs.body.style.backgroundColor = colors[randomaizer];
    console.log(randomaizer);
  }, 1000);
  event.target.disabled = true;
}

function resetChangesColorBody() {
  clearInterval(setIntervalId);
  refs.startBtn.removeAttribute("disabled");
}
