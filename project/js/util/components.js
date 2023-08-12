// Define the main components

function createNavbar() {
  const nav = document.createElement("nav");
  nav.innerHTML = `
      <div class="container">
        <section class="logo">
          <a href="index.html"><img src="../svg/logo.svg" alt="logo" /></a>
        </section>
        <section class="menu-bars">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </section>
        <ul class="links">
          <a href="index.html"><li>Home</li></a>
          <a href="hijri-calendar.html"><li>Hijri Calendar</li></a>
          <a href="holy-quran.html"><li>Holy Quran</li></a>
          <a href="ahadith.html"><li>Ahadith</li></a>
          <a href="adhkar.html"><li>Adhkar</li></a>
        </ul>
      </div>
    `;
  return nav;
}

function createNavOverlay() {
  const navOverlay = document.createElement("div");
  navOverlay.classList.add("nav-overlay");
  return navOverlay;
}

function addMenubarsEventListener() {
  const menuBars = document.querySelector(".menu-bars");
  const links = document.querySelector(".links");
  const navOverlay = document.querySelector(".nav-overlay");
  menuBars.addEventListener("click", () => {
    links.classList.toggle("show");
    navOverlay.classList.toggle("show");
    menuBars.classList.toggle("active");
  });
  addNavOverlayEventListener();
}

function addNavOverlayEventListener() {
  const navOverlay = document.querySelector(".nav-overlay");
  const menuBars = document.querySelector(".menu-bars");
  navOverlay.addEventListener("click", () => {
    menuBars.click();
  });
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
      <div class="developer" style="margin-bottom:10px;">
        Developed with all <i class="fa-solid fa-heart" style="color:tomato;"></i> by
        <b>Shawky Ebhraim</b>
      </div>
      <div class="links">
        <a href="https://www.facebook.com/shawky.ebrahim.ahmed/"
          ><i class="fa-brands fa-facebook fa-lg"></i
        ></a>
        <a href="https://www.linkedin.com/in/shawkyebrahim2514/"
          ><i class="fa-brands fa-linkedin fa-lg"></i
        ></a>
        <a href="https://t.me/shawkyebrahim2514"
          ><i class="fa-brands fa-telegram fa-lg"></i
        ></a>
        <a href="mailto:shawky.ebrahim2514@gmail.com"
          ><i class="fa-solid fa-at fa-lg"></i
        ></a>
      </div>
    `;
  return footer;
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("loading-overlay");
  overlay.innerHTML = `
  <div class="loading-spinner"><div class="spinner">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
  `;
  return overlay;
}

function createScrollToTop() {
  const scrollToTop = document.createElement("div");
  scrollToTop.classList.add("scroll-to-top");
  scrollToTop.innerHTML = `
  <i class="fa-solid fa-circle-up"></i>
  `;
  return scrollToTop;
}

function createCircleLoading() {
  const loading = document.createElement("section");
  loading.classList.add("loading");
  loading.innerHTML = `
  <div>
  <span class="loader"></span>
  </div>`;
  return loading;
}

export {
  createNavbar,
  addMenubarsEventListener,
  createFooter,
  createOverlay,
  createScrollToTop,
  createCircleLoading,
  createNavOverlay,
};
