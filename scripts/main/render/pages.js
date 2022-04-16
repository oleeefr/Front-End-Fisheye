let ___PATH = './';

// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    // importation de la liste des photographes
    let pageModuleData = await import ('../requests/selectAllPhotographers.js');
    let photographers = pageModuleData.photographers;

    let pageModuleRender = await import(___PATH+"listPhotographers.js");
    pageModuleRender.displayData(photographers);
 }
 
 // fonction de render (de Vue) pour afficher la page Portrait Photographe
 export async function photographer () {
     let pageModuleData = await import ('../requests/selectAllMediaByIdPhotographer');
     let pageModuleRenderPhotographer = await import(___PATH+"photographer.js");
 }
 
 // fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
     console.log("erreur 404...");
 }
 