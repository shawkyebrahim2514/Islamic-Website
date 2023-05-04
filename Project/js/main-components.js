// Define the main components

function createNavbar() {
  const nav = document.createElement("nav");
  nav.innerHTML = `
      <div class="container">
        <section class="logo">Muslim</section>
        <ul class="links">
          <li><a href="/view/index.html">Home</a></li>
          <li><a href="/view/Hijri-calendar.html">Hijri Calendar</a></li>
          <li><a href="/view/Holy-Quran.html">Holy Quran</a></li>
          <li><a href="/view/ahadith.html">Ahadith</a></li>
          <li><a href="/view/adhkar.html">Adhkar</a></li>
        </ul>
      </div>
    `;
  return nav;
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
          ><i class="fa-brands fa-facebook"></i
        ></a>
        <a href="https://www.linkedin.com/in/shawkyebrahim2514/"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a href="https://t.me/shawkyebrahim2514"
          ><i class="fa-brands fa-telegram"></i
        ></a>
        <a href="mailto:shawky.ebrahim2514@gmail.com"
          ><i class="fa-solid fa-at"></i
        ></a>
      </div>
    `;
  return footer;
}

function createOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.innerHTML = `
  <div class="loading-spinner"><div class="spinner">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
  `;
  return overlay;
}

export { createNavbar, createFooter, createOverlay };
