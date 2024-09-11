function filterEntries(obj, calbackfn) {
    let result = {};
  
   for (const [k,v] of Object.entries(obj)) {
    if(obj.hasOwnProperty(k)){
      let [newK , newV ] = calbackfn([k,v])
        result[newK] = newV;
    }
   
   }
    return result;
  }
  
  function mapEntries(obj, calbackfn) {
    const newObj = {}
    for (let [k,v] of Object.entries(obj)){
      if(obj.hasOwnProperty(k)){
        let [newK , newV ] = calbackfn([k,v])
          newObj[newK] = newV;
      }
    }
    return newObj
  }
  
  function reduceEntries(obj, calbackfn, initialValue) {
    let entries = Object.entries(obj);
    let acc = typeof initialValue !== "undefined" ? initialValue : entries[0];
    let start = typeof initialValue !== "undefined" ? 0 : 1;
    for (let i = start; i < entries.length; i++) {
      acc = calbackfn(acc, entries[i]);
    }
    return acc;
  }
  