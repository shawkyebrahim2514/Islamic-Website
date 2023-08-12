import * as util from "./ahadith-narrators-section-util.js";
import { fetchRangeOfAhadith, getAhadithNarrators } from "../../../model/ahadith.js";

let ahadithGenerator;

async function setAdahithNarrators() {
    let narratorsList = await getAhadithNarrators();
    updateNarratorsSection(narratorsList);
}

function updateNarratorsSection(narratorsList) {
    let narratorsSection = document.querySelector(".ahadith-narrators");
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
    let moreBtn = document.querySelector(".more-btn");
    moreBtn.firstElementChild.addEventListener("click", async function (e) {
        e.preventDefault();
        util.addCircleLoader();
        let result = await ahadithGenerator.next();
        util.removeLoadingSection();
        util.updateAhadithSection(result.value);
    });
}

export {
    setAdahithNarrators,
    addMoreBtnEventListener,
}