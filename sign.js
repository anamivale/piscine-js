function sign(params) {
  if (params > 0) {
    return 1;
  } else if (params == 0) {
    return 0;
  }
  return -1;
}

function sameSign(param1, param2) {
  if (param1 > 0 && param2 > 0) {
    return true;
  }
  if (param1 == 0 && param2 == 0) {
    return true;
  }

  if (param1 < 0 && param2 < 0) {
    return true;
  }
  return false;
}
