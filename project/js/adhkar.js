import { getAdhkar } from "../model/adhkar.js";
import { hideLoadingOverlay } from "./util/common-functions.js";
import * as util from "./util/adhkar/adhkar.js";

let adhkar = await getAdhkar();
util.setAdhkarCardsSection(adhkar);
util.clickOnFirstAdhkar();
hideLoadingOverlay();
