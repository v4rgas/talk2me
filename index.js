const audio = new Audio();
audio.src = "./silence.mp3";
audio.loop = true;

const letters = "EAOSRNIDLCTUMPBGVYQHFZJÑXKW";
const letterElement = document.getElementById("letter");
const left = document.getElementById("tapL");
const right = document.getElementById("tapR");
const deleteBtn = document.getElementById("delete");
const addBtn = document.getElementById("add");
const footer = document.getElementById("footer");
let currentIndex = 0;

const changeLetter = (num) => {
  currentIndex = (currentIndex + num + letters.length) % letters.length;
  console.log(currentIndex);
  letterElement.textContent = letters[currentIndex];
};

const writeLetter = () => {
  footer.textContent += letterElement.textContent;
  console.log("test");
  currentIndex = 0;
  changeLetter(0);
};

const deleteLetter = () => {
  footer.textContent = footer.textContent.slice(0, -1);
  console.log("test");
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

addBtn.addEventListener("click", writeLetter);

deleteBtn.addEventListener("click", deleteLetter);

navigator.mediaSession.setActionHandler("play", () => changeLetter(1));
navigator.mediaSession.setActionHandler("pause", () => changeLetter(1));
navigator.mediaSession.setActionHandler("nexttrack", () => writeLetter);
navigator.mediaSession.setActionHandler("previoustrack", () => deleteLetter());

console.log(add);
