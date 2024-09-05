export function getArchitects() {
  const architects = document.querySelectorAll("a");
  const nonArchitects = document.querySelectorAll("span");
  return [architects, nonArchitects];
}

export function getBonannoPisano() {
  let BonannoPisano;
  const activeClassical = [];

  const architects = document.querySelectorAll("a");
  architects.forEach((element) => {
    if (
      element.classList.contains("classical") &&
      element.classList.contains("active")
    ) {
      if (element.id === "BonannoPisano") {
        BonannoPisano = element;
      } else {
        activeClassical.push(element);
      }
    }
  });
  console.log(activeClassical);
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
