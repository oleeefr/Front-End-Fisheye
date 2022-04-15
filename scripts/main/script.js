import { controleur } from "./controleur.js";

let page = new URL(document.location).pathname;
// console.log(page);

controleur (page);
