const audio = new Audio();
audio.src = "./silence.mp3";
audio.loop = true;

const letters = "EAOSRNIDLCTUMPBGVYQHFZJÑXKW";
const letterElement = document.getElementById("letter");
const left = document.getElementById("tapL");
const right = document.getElementById("tapR");
// const delete = document.getElementById("delete");
// const add = document.getElementById("add");
let currentIndex = 0;

const changeLetter = (num) => {
  currentIndex = (currentIndex + num + letters.length) % letters.length;
  console.log(currentIndex)
  letterElement.textContent = letters[currentIndex];
};

window.addEventListener("click", () => {
  // letterElement.textContent = letters[0];
  audio.play();
});

left.addEventListener("click", () => {
  changeLetter(-1);
  console.log("test");
});

right.addEventListener("click", () => {
  changeLetter(1);
  console.log("test");
});

navigator.mediaSession.setActionHandler("play", () => changeLetter(1));
navigator.mediaSession.setActionHandler("pause", () => changeLetter(1));
navigator.mediaSession.setActionHandler("nexttrack", () => changeLetter(1));
navigator.mediaSession.setActionHandler("previoustrack", () =>
  changeLetter(-1)
);
