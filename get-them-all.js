export function getArchitects() {
  const architects = document.querySelectorAll("a");
  const nonArchitects = document.querySelectorAll("span");
  return [architects, nonArchitects];
}

export function getBonannoPisano() {
  const BonannoPisano = document.getElementById("BonannoPisano");
  const activeClassical = document.querySelectorAll(".classical:active");
  return [BonannoPisano, activeClassical];
}

export function getActive() {
  const active = [];
  const notActive = [];
  const architects = document.querySelectorAll("a");
  architects.forEach((element) => {
    if (
      element.classList.contains("classical") &&
      element.classList.contains("active")
    ) {
      active.push(element);
    } else {
      notActive.push(element);
    }
  });
  console.log(active);
  return [active, notActive];
  //
}

export function getClassical() {
  const architects = document.querySelectorAll("a");
  const classical = [];
  const notClassical = [];
  architects.forEach((element) => {
    if (element.classList.contains("classical")) {
      classical.push(element);
    } else {
      notClassical.push(element);
    }
  });

  return [classical, notClassical];
}
