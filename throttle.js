function throttle(func, wait) {
  let timeout = true;

  return function (...args) {
    func(...args);

    timeout = false;
    setTimeout(() => {
      func(...args);
    }, wait);
  };
}
