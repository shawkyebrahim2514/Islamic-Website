async function getAdhkar() {
  try {
    let response = await fetch(
      `https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`
    );
    let json = await response.json();
    return json;
  } catch (error) {
    return new Error(error);
  }
}

export { getAdhkar };
