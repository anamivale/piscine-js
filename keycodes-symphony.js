// Like an inspired Beethoven who's about to write his Moonlight Sonata, you're about to compose a colorful symphony of letters with your keyboard.
// Write the function compose:

//     Make it fire every time a key is pressed.
//     Create a new div with the class note when a letter
// of the lowercase alphabet is pressed. It should have a unique background
// color generated using the key of the event. It should also display the corresponding
// pressed character.
//     When Backspace is pressed, delete the last note.
//     When Escape is pressed, clear all the notes.

export function compose() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let body = document.querySelector("body");
  onkeydown = (event) => {
    let key = event.key;
    if (letters.includes(key)) {
      let div = document.createElement("div");
      div.textContent = key;
      div.className = "note";
      let colorValue = (255 / 26) * (event.key.charCodeAt(0) - 97);
      div.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

      body.append(div);
    } else if (key === "Backspace") {
      const divs = document.querySelectorAll("div");
      body.removeChild(divs[divs.length - 1]);
    } else {
      if (key === "Escape") {
        body.innerHTML = "";
      }
    }
  };
}
