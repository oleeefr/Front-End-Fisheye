// importation de la liste des photographes & la liste des médias
import {photographers, media} from '../../main/sessions.js';
let ___PATH = './';

// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {
    let pageModule = await import(___PATH+"index.js");
    pageModule.displayData(photographers);
 }
 
 // fonction de render (de Vue) pour afficher la page Portrait Photographe
 export async function photographer () {
     let pageModule = await import(___PATH+"photographer.js");
 }
 
 // fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
     console.log("erreur 404...");
 }
 