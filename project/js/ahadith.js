import { hideLoadingOverlay } from "./util/common-functions.js";

import { 
  setAdahithNarrators, 
  addMoreBtnEventListener, 
  clickOnFirstNarrator 
} from "./util/ahadith/ahadith.js";

await setAdahithNarrators();
addMoreBtnEventListener();
clickOnFirstNarrator();
hideLoadingOverlay();
