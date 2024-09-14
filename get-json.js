async function getJSON(path, params) {
  let url = path;

  try {
    url = new URL(path);
  } catch (error) {
    return error;
  }
  console.log(param);
  let param = URLSearchParams(url.search);

  param.append(params);

  try {
    const res = await fetch(param);

    if (!res.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = res.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
console.log(getJSON("/test", { query: "hello world", b: 5 }));
