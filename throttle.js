function throttle(func, wait) {
  let timeout = false;
  let timeoutArgs;
  const timeoutFunc = () => {
    if (timeoutArgs == null) {
      timeout = true;
    } else {
      func(...args);
      timeoutArgs = null;
      setTimeout(timeoutFunc, wait);
    }
  };
  return function (...args) {
    if (timeout) {
      timeoutArgs = args;
      return;
    }

    func(...args);

    timeout = true;
    setTimeout(timeoutFunc, wait);
  };
}
