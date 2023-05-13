import { fetchRangeOfAhadith } from "../model/ahadith.js";
import { createCircleLoading } from "../js/components.js";

let ahadithGenerator;
let currentNarratorID;
let currentNarratorName;
let moreBtn = document.querySelector(".more-btn");

function updateNarratorsSection(narratorsList) {
  var narratorsSection = document.querySelector(".ahadith-narrators");
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
      updateGlobalVariables(card, cardNarratorID);
      triggerMoreBtn();
    }
  });
}

function removeElementsBeforeMoreBtn() {
  while (moreBtn.previousElementSibling) {
    moreBtn.previousElementSibling.remove();
  }
}

function updateGlobalVariables(card, cardNarratorID) {
  currentNarratorName = card.querySelector(".name").textContent;
  currentNarratorID = cardNarratorID;
  ahadithGenerator = getRangeOfAhadith(cardNarratorID);
}

async function* getRangeOfAhadith(name) {
  let from = 1;
  let range = 10;
  while (true) {
    let to = from + range;
    let ahadith = await fetchRangeOfAhadith(name, from, to);
    if (ahadith.length === 0) break;
    yield ahadith;
    from = to + 1;
  }
}

function triggerMoreBtn() {
  moreBtn.firstElementChild.dispatchEvent(new Event("click"));
}

function addMoreBtnEventListener() {
  moreBtn.firstElementChild.addEventListener("click", async function (e) {
    e.preventDefault();
    addCircleLoader();
    let result = await ahadithGenerator.next();
    // To remove the loading section
    removeLoadingSection();
    updateAhadithSection(result.value);
  });
}

function addCircleLoader() {
  let circleLoader = createCircleLoading();
  moreBtn.before(circleLoader);
}

function removeLoadingSection() {
  moreBtn.previousElementSibling.remove();
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

function clickOnFirstNarrator() {
  document
    .querySelector(".ahadith-narrators")
    .firstElementChild.dispatchEvent(new Event("click"));
}

addMoreBtnEventListener();
export {
  updateNarratorsSection,
  removeElementsBeforeMoreBtn,
  clickOnFirstNarrator,
};
