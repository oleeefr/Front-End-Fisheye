let ___PATH = '../../lib/render/';

// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    // importation de la liste des photographes
    let pageModuleData = await import ('../requests/getAllPhotographers.js');
    let photographers = pageModuleData.photographers;

    let pageModuleRender = await import(___PATH+"listPhotographers.js");
    pageModuleRender.displayData(photographers);
 }
 
 // fonction de render (de Vue) pour afficher la page Portrait Photographe
 export async function photographer () {
     let pageModuleData = await import ('../requests/getAllMediaByIdPhotographer.js');
     let pageModuleRenderPhotographer = await import(___PATH+"photographer.js");

     // console.log (pageModuleData.photograph);
     let moduleHtmlPhotographer = pageModuleRenderPhotographer.photographerFactory(pageModuleData.photograph);
    console.log(moduleHtmlPhotographer);

    let articlePhotographDescription = document.querySelector('.photograph-header article');
     // console.log(articlePhotographDescription);
     let h2 = document.createElement( 'h2');
         h2.setAttribute('class','hidden');
        h2.innerText = moduleHtmlPhotographer.name;
     let dl = moduleHtmlPhotographer.getUserCardDOMMini();

    articlePhotographDescription.appendChild(h2);
    articlePhotographDescription.appendChild(dl);

    let thumbnailPhotograph = document.querySelector('.photograph-header article.blockPortrait');
    //console.log(thumbnailPhotograph);
    let img = moduleHtmlPhotographer.getUserThumbnail();
    thumbnailPhotograph.appendChild(img);
 }
 
 // fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
     console.log("erreur 404...");
 }
 