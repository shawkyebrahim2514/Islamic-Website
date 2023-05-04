async function getPrayersTiming() {
  let date = JSON.parse(sessionStorage.date);
  let fullDate = `${date.day}-${date.month}-${date.year}`;
  let location = JSON.parse(sessionStorage.userLocation);
  try {
      let response = await fetch(`http://api.aladhan.com/v1/timings/${fullDate}?latitude=${location.latitude}&longitude=${location.longitude}&method=5`);
      let json = await response.json();
      return json.data;
  } catch (error) {
      return new Error(error);
  }
}

export { getPrayersTiming };