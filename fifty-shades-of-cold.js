import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
  const styl = document.createElement("style");
  colors.forEach((element) => {
    let x = document.createTextNode(`.${element} {
        background: ${element};
      }`);
    styl.appendChild(x);
  });

  const head = document.querySelector("head");
  head.append(styl);
}

export function generateColdShades() {
  const body = document.querySelector("body");
  colors.forEach((element) => {
    if (
      element.includes("aqua") ||
      element.includes("blue") ||
      element.includes("turquoise") ||
      element.includes("green") ||
      element.includes("cyan") ||
      element.includes("navy") ||
      element.includes("purple")
    ) {
      const div = document.createElement("div");
      div.classList.add(element);
      div.textContent = element;
      body.append(div);
    }
  });
}

export function choseShade(params) {
  const divs = document.querySelectorAll("div");

  divs.forEach((element) => {
    element.className = params;
  });
}

