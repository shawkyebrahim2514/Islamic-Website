import { hideLoadingOverlay } from "./util/common-functions.js";
import {
  addGregorianHijriOverlayEventListener,
  addNextArrowEventListener,
  addPreviousArrowEventListener,
  addDateInputEventListener,
  setHijriSectionContent,
  setDefaultDateInput
} from "./util/hijri-calendar/hijri-calender.js";


addGregorianHijriOverlayEventListener();
addNextArrowEventListener();
addPreviousArrowEventListener();
addDateInputEventListener();
setHijriSectionContent();
setDefaultDateInput();
hideLoadingOverlay();
