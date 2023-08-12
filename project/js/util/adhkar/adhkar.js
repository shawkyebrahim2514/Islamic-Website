function clickOnFirstAdhkar() {
  document
    .querySelector(".adhkar-names")
    .firstElementChild.dispatchEvent(new Event("click"));
}

export { clickOnFirstAdhkar };

export { setAdhkarCardsSection } from "./adhkar-cards-section.js";
