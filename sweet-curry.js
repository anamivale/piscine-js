function mult2(params) {
  return function secondArd(b) {
    return params * b;
  };
}

function add3(params) {
  return function second(sec) {
    return function third(th) {
      return params + sec + th;
    };
  };
}

function add3(params) {
  return function second(sec) {
    return function third(th) {
      return function fourth(four) {
        return params - sec - th - fourth;
      };
    };
  };
}
