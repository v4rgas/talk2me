window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.register("serviceWorker.js");
  }
});

const audio = new Audio();
audio.src = "./silence.mp3";
audio.loop = true;

const letters = "EAOSRNIDLCTUMPBGVYQHFZJÑXKW";
const lettersVowelsFirst = "EAOIUSRNDLCTMPBGVYQHFZJÑXKW";
let alphabet = letters;
let currentIndex = 0;

const letterElement = document.getElementById("letter");
const left = document.getElementById("tapL");
const right = document.getElementById("tapR");
const deleteBtn = document.getElementById("delete");
const addBtn = document.getElementById("add");
const footer = document.getElementById("footer");

const changeLetter = (num) => {
  currentIndex = (currentIndex + num + letters.length) % letters.length;
  letterElement.textContent = alphabet[currentIndex];
};

const writeLetter = () => {
  if ("AEIOU".includes(letterElement.textContent)) {
    alphabet = letters;
  } else {
    alphabet = lettersVowelsFirst;
  }

  footer.textContent += letterElement.textContent;
  currentIndex = 0;
  changeLetter(0);
};

const deleteLetter = () => {
  footer.textContent = footer.textContent.slice(0, -1);
};

window.addEventListener("click", () => {
  // letterElement.textContent = letters[0];
  audio.play();
});

left.addEventListener("click", () => {
  changeLetter(-1);
});

right.addEventListener("click", () => {
  changeLetter(1);
});

addBtn.addEventListener("click", writeLetter);

deleteBtn.addEventListener("click", deleteLetter);

navigator.mediaSession.setActionHandler("play", () => changeLetter(1));
navigator.mediaSession.setActionHandler("pause", () => changeLetter(1));
navigator.mediaSession.setActionHandler("previoustrack", deleteLetter);
navigator.mediaSession.setActionHandler("nexttrack", writeLetter);
console.log(add);
