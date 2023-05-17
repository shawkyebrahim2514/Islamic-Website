import * as util from "../js/ahadith.js";
import { fetchRangeOfAhadith, getAhadithNarrators } from "../model/ahadith.js";
import { hideLoadingOverlay } from "../js/common-functions.js";

let ahadithGenerator;
let moreBtn = document.querySelector(".more-btn");

async function setAdahithNarrators() {
  let narratorsList = await getAhadithNarrators();
  updateNarratorsSection(narratorsList);
}

function updateNarratorsSection(narratorsList) {
  var narratorsSection = document.querySelector(".ahadith-narrators");
  for (let hadith of narratorsList) {
    let card = createNewHadithCard(hadith);
    narratorsSection.appendChild(card);
  }
}

function createNewHadithCard(hadith) {
  let card = util.createNarratorCard(hadith);
  addHadithCardEventListener(card);
  return card;
}

function addHadithCardEventListener(card) {
  card.addEventListener("click", async function () {
    let cardNarratorID = card.getAttribute("data-id");
    util.removeElementsBeforeMoreBtn();
    updateGlobalVariables(card, cardNarratorID);
    util.triggerMoreBtn();
  });
}

function updateGlobalVariables(card, cardNarratorID) {
  util.updateGlobalVariables(card);
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

function addMoreBtnEventListener() {
  moreBtn.firstElementChild.addEventListener("click", async function (e) {
    e.preventDefault();
    util.addCircleLoader();
    let result = await ahadithGenerator.next();
    util.removeLoadingSection();
    util.updateAhadithSection(result.value);
  });
}

await setAdahithNarrators();
addMoreBtnEventListener();
util.clickOnFirstNarrator();
hideLoadingOverlay();
