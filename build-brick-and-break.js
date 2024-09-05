export function build(arg) {
  let i = 1;

  const intervalId = setInterval(() => {
    if (i > arg) {
      clearInterval(intervalId);
    } else {
      const brick = document.createElement("div");
      brick.id = "brick-" + i;
      if (i % 3 === 2) {
        // brick.setAttribute("foundation", "true");
        brick.dataset.foundation = "true";
        console.log(brick);
        brick.textContent = "middle";
      }

      const body = document.querySelector("body");
      body.append(brick);
      i++;
    }
  }, 100);
}

export function repair(...ids) {
  ids.forEach((val) => {
    let el = document.getElementById(val);
    if (el.hasAttribute("foundation")) {
      el.dataset.repaired = "in progress";
      el.textContent = "in progress";
    } else {
      el.dataset.repaired = "true";
    }
  });
}
export function destroy() {
  let el = document.getElementsByTagName("div");
  if (el.length > 0) {
    el[el.length - 1].remove();
  }
}
