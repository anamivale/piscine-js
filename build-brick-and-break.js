export function build(arg) {
  let i = 1;

  const intervalId = setInterval(() => {
    if (i > arg) {
      clearInterval(intervalId);
    } else {
      const brick = document.createElement("div");
      brick.id = "brick-" + i;
      if (i % 3 === 0) {
        brick.setAttribute("foundation", "true");
      }

      const body = document.querySelector("body");
      body.append(brick);
      i++;
    }
  }, 1);
}

export function repair(...ids) {
  ids.forEach((val) => {
    let el = document.getElementById(val);
    if (el.hasAttribute("foundation")) {
      el.setAttribute("repaired", "in progress");
    } else {
      el.setAttribute("repaired", "true");
    }
  });
}
export function destroy() {
  let el = document.getElementsByTagName("div");
  if (el.length > 0) {
    el[el.length - 1].remove();
  }
}
