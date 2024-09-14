async function getJSON(path, params) {
  let url = new URL(path);
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
