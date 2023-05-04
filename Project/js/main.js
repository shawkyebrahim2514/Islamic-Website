import { createFooter, createNavbar } from "./main-components.js";

function getDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

if (!sessionStorage.userLocation) {
  let location = await getLocation();
  let userLocation = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  }
  sessionStorage.userLocation = JSON.stringify(userLocation);
}

if(!sessionStorage.date) {
  let fullDate = getDate();
  let date = {
    day: fullDate.split('-')[0],
    month: fullDate.split('-')[1],
    year: fullDate.split('-')[2],
  }
  sessionStorage.date = JSON.stringify(date);
}

if(!sessionStorage.HijriCalnderPageDate) {
  sessionStorage.HijriCalnderPageDate = sessionStorage.date;
}

if(!sessionStorage.quranPage) {
  sessionStorage.quranPage = 1;
}

if(!sessionStorage.ahadith) {
  let ahadithInfo = {
    id: "bukhari",
    from: 1,
    to: 20,
  }
  sessionStorage.ahadith = JSON.stringify(ahadithInfo);
}

if(!sessionStorage.adhkar) {
  sessionStorage.adhkar = "أذكار الصباح";
}


// Define the main component
//prepend the navabar to the body
const navbar = createNavbar();
document.body.prepend(navbar);

//append the footer to the body
const footer = createFooter();
document.body.append(footer);