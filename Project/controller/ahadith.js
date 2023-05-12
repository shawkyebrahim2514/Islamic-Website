import { createCircleLoading } from "../js/components.js";
import { getAhadithNarrators, getRangeOfAhadith } from "../model/ahadith.js";

let ahadithGenerator;
let currentNarratorID;
let currentNarratorName;
let moreBtn = document.querySelector(".more-btn");

async function setAdahithNarrators() {
  var narratorsSection = document.querySelector(".ahadith-narrators");
  let narratorsList = await getAhadithNarrators();
  for (let hadith of narratorsList) {
    let card = createNewHadithCard(hadith);
    narratorsSection.appendChild(card);
  }
}

function createNewHadithCard(hadith) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", hadith.id);
  card.innerHTML = `
    <h3 class="name">${hadith.name.slice(4)}</h3>
    <p class="total-number">${hadith.available}</p>
    `;
  addHadithCardEventListener(card);
  return card;
}

function addHadithCardEventListener(card) {
  card.addEventListener("click", async function () {
    let cardNarratorID = card.getAttribute("data-id");
    if (currentNarratorID != cardNarratorID) {
      removeElementsBeforeMoreBtn();
      currentNarratorID = cardNarratorID;
      currentNarratorName = card.querySelector(".name").textContent;
      ahadithGenerator = getRangeOfAhadith(cardNarratorID);
      moreBtn.firstElementChild.dispatchEvent(new Event("click"));
    }
  });
}

export function removeElementsBeforeMoreBtn() {
  while (moreBtn.previousElementSibling) {
    moreBtn.previousElementSibling.remove();
  }
}

moreBtn.firstElementChild.addEventListener("click", async function (e) {
  e.preventDefault();
  addCircleLoader();
  let result = await ahadithGenerator.next();
  // To remove the loading section
  moreBtn.previousElementSibling.remove();
  updateAhadithSection(result.value);
});

function addCircleLoader() {
  let circleLoader = createCircleLoading();
  moreBtn.before(circleLoader);
}

function updateAhadithSection(result) {
  for (let hadith of result.hadiths) {
    let hadithSection = createNewHadithSection(hadith);
    moreBtn.before(hadithSection);
  }
}

function createNewHadithSection(hadith) {
  let hadithSection = document.createElement("section");
  hadithSection.classList.add("hadith");
  hadithSection.setAttribute("data-number", hadith.number);
  hadithSection.innerHTML = `
    <h2 class="hadith-text">${hadith.arab}</h2>
    <h4 class="hadith-narrator">${currentNarratorName}</h4>
    `;
  return hadithSection;
}

await setAdahithNarrators();
document
  .querySelector(".ahadith-narrators")
  .firstElementChild.dispatchEvent(new Event("click"));
document.querySelector(".loading-overlay").style.display = "none";
