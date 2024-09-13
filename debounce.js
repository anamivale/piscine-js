function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

function opDebounce(func, wait, options = {}) {
  let timeout, lastCallTime, result, lastArgs, lastThis;
  let { leading = true, trailing = false, maxWait } = options;

  function invokeFunc() {
    result = func.apply(lastThis, lastArgs);
    lastArgs = lastThis = null; // Reset the context and arguments after execution
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0
    );
  }

  function startTimer(pendingFunc, delay) {
    timeout = setTimeout(pendingFunc, delay);
  }

  function trailingEdge(time) {
    timeout = null; // No more pending calls

    if (trailing && lastArgs) {
      invokeFunc();
    }
  }

  function leadingEdge(time) {
    lastCallTime = time;
    if (leading) {
      invokeFunc();
    }

    // Start the timer for the trailing edge.
    startTimer(trailingEdge, wait);
  }

  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeRemaining = wait - timeSinceLastCall;
    return timeRemaining;
  }

  function maxingEdge(time) {
    if (maxWait && shouldInvoke(time)) {
      invokeFunc();
    }
    clearTimeout(timeout);
  }

  function debounced(...args) {
    const now = Date.now();
    const isInvoking = shouldInvoke(now);

    lastArgs = args;
    lastThis = this;
    lastCallTime = now;

    if (isInvoking) {
      if (!timeout) {
        leadingEdge(now);
      }
    } else if (!timeout) {
      startTimer(trailingEdge, remainingWait(now));
    }

    if (maxWait) {
      const timeSinceLastCall = now - lastCallTime;
      if (timeSinceLastCall >= maxWait) {
        maxingEdge(now);
      }
    }
  }

  debounced.cancel = function () {
    clearTimeout(timeout);
    lastCallTime = timeout = lastArgs = lastThis = null;
  };

  return debounced;
}
