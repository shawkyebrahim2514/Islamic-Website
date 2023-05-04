import { getAdhkar } from "../model/adhkar.js";
let adhkar = await getAdhkar("أذكار المساء");
console.log(adhkar);