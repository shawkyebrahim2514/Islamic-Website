import * as util from "../js/ahadith.js";
import { getAhadithNarrators } from "../model/ahadith.js";

async function setAdahithNarrators() {
  let narratorsList = await getAhadithNarrators();
  util.updateNarratorsSection(narratorsList);
}

await setAdahithNarrators();
util.clickOnFirstNarrator();
