const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }

  
function get(a) {
  return sourceObject[a];
}

function set(a, val) {
  sourceObject[a] = val;
  return sourceObject[a];
}


