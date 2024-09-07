import { styles } from "./pimp-my-style.data.js";
var counter = 0;

export function pimp() {
  var btn = document.querySelector("button.button");
  if (!btn.classList.contains("unpimp")) {
    btn.classList.add(styles[counter]);
    counter++;
  } else {
    counter--;
    btn.classList.remove(styles[counter]);
    if (counter === 0) {
      button.classList.toggle("unpimp");
    }
  }

  if (counter === styles.length) {
    btn.classList.toggle("unpimp");
  }
  console.log("counter", counter);
}
