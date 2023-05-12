import {
  addMenubarsEventListener,
  createFooter,
  createNavOverlay,
  createNavbar,
  createOverlay,
  createScrollToTop,
} from "./components.js";

// Define the main component

//prepend the navabar to the body
const navbar = createNavbar();
document.body.prepend(navbar);

const navOverlay = createNavOverlay();
document.body.prepend(navOverlay);

addMenubarsEventListener();

//append the overlay to the body
const overlay = createOverlay();
document.body.append(overlay);

// append the scroll to top button
const upArrow = createScrollToTop();
document.body.append(upArrow);

//append the footer to the body
const footer = createFooter();
document.body.append(footer);

// common methods
let htmlDocument = document.querySelector("html");

function getDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;
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
  };
  sessionStorage.userLocation = JSON.stringify(userLocation);
}

if (!sessionStorage.date) {
  let fullDate = getDate();
  let date = {
    day: fullDate.split("-")[0],
    month: fullDate.split("-")[1],
    year: fullDate.split("-")[2],
  };
  sessionStorage.date = JSON.stringify(date);
}

if (!sessionStorage.HijriCalnderPageDate) {
  let fullDate = JSON.parse(sessionStorage.date);
  let monthYearDate = {
    month: fullDate.month,
    year: fullDate.year,
  };
  sessionStorage.HijriCalnderPageDate = JSON.stringify(monthYearDate);
}

if (!sessionStorage.quranPage) {
  sessionStorage.quranPage = 1;
}

if (!sessionStorage.ahadith) {
  let ahadithInfo = {
    id: "bukhari",
    from: 1,
    to: 20,
  };
  sessionStorage.ahadith = JSON.stringify(ahadithInfo);
}

if (!sessionStorage.adhkar) {
  sessionStorage.adhkar = "أذكار الصباح";
}

window.onscroll = function () {
  if (htmlDocument.scrollTop > window.innerHeight / 2) {
    document.querySelector(".scroll-to-top").style.bottom = "20px";
  } else {
    document.querySelector(".scroll-to-top").style.bottom = "-50px";
  }
};

document.querySelector(".scroll-to-top").onclick = function () {
  htmlDocument.scrollTop = 0;
};
