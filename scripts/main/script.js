import { routeur } from "./routeur.js";
import {getPageUrl} from "../utils/url/getPageUrl.js";

let page = getPageUrl (new URL(document.location).pathname);
// console.log(page);

routeur (page);
