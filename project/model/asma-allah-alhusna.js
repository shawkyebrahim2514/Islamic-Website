async function getAsmaAllahAlhusna() {
  try {
    let response = await fetch(`https://api.aladhan.com/v1/asmaAlHusna`);
    let json = await response.json();
    return json;
  } catch (error) {
    return new Error(error);
  }
}

export { getAsmaAllahAlhusna };
