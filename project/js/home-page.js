import { getBasmalaSVG } from "./util/svg-elements.js";
import { setHijriSectionContent } from "./util/hijri-timing.js";
import { hideLoadingOverlay } from "./util/common-functions.js";

// Set header's content
async function setHeaderContent() {
    let headerText = document.querySelector("header .container");
    let basmalaSVG = await getBasmalaSVG();
    headerText.prepend(basmalaSVG);
}

await setHeaderContent();
await setHijriSectionContent();
hideLoadingOverlay();
