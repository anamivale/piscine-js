export function pimp(styles) {
  let btn = document.querySelector("button");
  for (let i = 0; i < styles.length-6; i++) {
    btn.classList.add(styles[i]);
    if (i === styles.length - 7) {

      btn.classList.toggle("unpimp");
    }
  }

//   for (let i = styles.length; i >= 0; i--) {

//     btn.classList.remove(styles[i]);
//   }
}
