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
    const active = document.querySelectorAll(":active");
    const notActive = document.querySelectorAll(":not(:active)");
    return [active, notActive];
//  
}

export function getClassical() {
  const classical = document.querySelectorAll("classical");
  const notClassical = document.querySelectorAll(":not(classical)");
  return [classical, notClassical];
}
