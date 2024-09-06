export function generateLetters() {
  let body = document.querySelector("body");
  let fns = 10;
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= 120; i++) {
    const letter = document.createElement("div");
    letter.style.fontSize = fns + i + "px";
    letter.textContent = letters[random(0, 25)];
    if (i <= 40) {
      letter.style.fontWeight = 300;

    } else if (i <= 80) {
      letter.style.fontWeight = 400;
    } else {
      letter.style.fontWeight = 600;

    }
    body.append(letter);
  }
}
const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
