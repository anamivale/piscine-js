async function getJSON(path, params) {
  console.log(path);
  console.log(params);
  let url = path;

  try {
    url = new URL(path);
  } catch (error) {
    return error;
  }
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
