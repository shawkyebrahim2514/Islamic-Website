import {
  addMenubarsEventListener,
  createFooter,
  createNavOverlay,
  createNavbar,
  createOverlay,
  createScrollToTop,
} from "./util/components.js";

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

async function getLocation() {
  let locationRequest = await fetch("https://ipinfo.io/41.44.83.12?token=87c42456f0ae82");
  return await locationRequest.json();
}

if (!localStorage.location) {
  let locationRequest = await getLocation();
  let [latitude, longitude] = locationRequest.loc.split(",");
  let userLocation = {
    latitude,
    longitude
  };
  localStorage.location = JSON.stringify(userLocation);
  location.reload();
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

if (!localStorage.quranPage) {
  localStorage.quranPage = 1;
}

if (!localStorage.quranAudio) {
  localStorage.quranAudio = "ar.alafasy";
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
