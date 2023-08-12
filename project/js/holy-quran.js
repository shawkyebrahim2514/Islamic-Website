import { hideLoadingOverlay } from "./util/common-functions.js";
import {
  setQuranPlayer,
  updateTafsirSection,
  setHeaderSVG,
  toggleSelectionSettings,
  toggleQuranSelections,
  addNextArrowEventListener,
  addPreviousArrowEventListener,
} from "./util/holy-quran/holy-quran.js";


setHeaderSVG();
toggleSelectionSettings();
toggleQuranSelections();
addNextArrowEventListener();
addPreviousArrowEventListener();
await setQuranPlayer();
await updateTafsirSection(1, 1);
hideLoadingOverlay();
