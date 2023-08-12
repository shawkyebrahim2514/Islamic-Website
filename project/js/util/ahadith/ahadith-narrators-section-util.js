import { createCircleLoading } from "../components.js";

let currentNarratorName;
let moreBtn = document.querySelector(".more-btn");

// Used in createNewHadithCard()

function createNarratorCard(hadith) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", hadith.id);
  card.innerHTML = `
      <h3 class="name">${hadith.name.slice(4)}</h3>
      <p class="total-number">${hadith.available}</p>
      `;
  return card;
}

// Used in addHadithCardEventListener()

function removeElementsBeforeMoreBtn() {
  while (moreBtn.previousElementSibling) {
    moreBtn.previousElementSibling.remove();
  }
}

function triggerMoreBtn() {
  moreBtn.firstElementChild.dispatchEvent(new Event("click"));
}

// Used in updateGlobalVariables()

function updateGlobalVariables(card) {
  currentNarratorName = card.querySelector(".name").textContent;
}

// Used in addMoreBtnEventListener()

function addCircleLoader() {
  let circleLoader = createCircleLoading();
  moreBtn.before(circleLoader);
}

function removeLoadingSection() {
  moreBtn.previousElementSibling.remove();
}

function updateAhadithSection(result) {
  for (let hadith of result.hadiths) {
    let hadithSection = createHadithSection(hadith);
    moreBtn.before(hadithSection);
  }
}

function createHadithSection(hadith) {
  let hadithSection = document.createElement("section");
  hadithSection.classList.add("hadith");
  hadithSection.setAttribute("data-number", hadith.number);
  hadithSection.innerHTML = `
      <h2 class="hadith-text">${hadith.arab}</h2>
      <h4 class="hadith-narrator">${currentNarratorName}</h4>
      `;
  return hadithSection;
}

// Will be executed globally

function clickOnFirstNarrator() {
  document
    .querySelector(".ahadith-narrators")
    .firstElementChild.dispatchEvent(new Event("click"));
}

export {
  removeElementsBeforeMoreBtn,
  clickOnFirstNarrator,
  createNarratorCard,
  triggerMoreBtn,
  updateGlobalVariables,
  addCircleLoader,
  removeLoadingSection,
  updateAhadithSection,
};
