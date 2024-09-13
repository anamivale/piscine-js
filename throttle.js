function throttle(func, wait) {
  let timeout = true;

  return function (...args) {
    if (timeout) {
      return;
    }
    func(...args);

    setTimeout(() => {
      timeout = false;
    }, wait);
  };
}
