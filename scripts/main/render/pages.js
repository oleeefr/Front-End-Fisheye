let ___PATH = '../../lib/render/';

//// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    // importation de la liste des photographes
    let pageModuleData = await import ('../requests/getAllPhotographers.js');
    let photographers = pageModuleData.photographers;

    let pageModuleRender = await import(___PATH+"listPhotographers.js");
    pageModuleRender.displayData(photographers);
 }
 
 //// fonction de render (de Vue) pour afficher la page Portrait Photographe
 export async function photographer () {

     let pageModuleData = await import ('../requests/getAllMediaByIdPhotographer.js');
     let pageModuleRenderPhotographer = await import(___PATH+"photographer.js");
     let pageModalForm = await import ('../../utils/form/contactForm.js');
     let moduleLikesAndPrice = await import (___PATH+"ticket.js");

     let moduleHtmlPhotographer = pageModuleRenderPhotographer.photographerFactory(pageModuleData.photograph);

     // Affichage du Profil du photographe selectionné
     let articlePhotographDescription = document.querySelector('.photograph-header article');
     let dl = moduleHtmlPhotographer.getUserCardDOMMini();
     articlePhotographDescription.appendChild(dl);
    
    // Affichage la vignette photo du photographe selectionnée
    let thumbnailPhotograph = document.querySelector('.photograph-header article.blockPortrait');
    let img = moduleHtmlPhotographer.getUserThumbnail();
    let h2 = document.createElement( 'h2');
    h2.setAttribute('class','hidden');
    h2.innerText = moduleHtmlPhotographer.name;
    thumbnailPhotograph.appendChild(h2);
    thumbnailPhotograph.appendChild(img);

    // launch modal formulaire event
    pageModalForm.modalBtn.addEventListener("click", pageModalForm.displayModal);

    // close modal formulaire event
    pageModalForm.closeBtn.addEventListener("click", pageModalForm.closeModal);

    pageModalForm.renderTitleForm(moduleHtmlPhotographer.name);
    
    // traitement de la validation du formulaire
    let formulaire = document.querySelector("form[name=form]");
    formulaire.onsubmit = (e) => {
      e.preventDefault();
      pageModalForm.renderLog();
      formulaire.reset();
      pageModalForm.closeModal();
      };


    // Affichage du ticket Likes and Price du photographe
    let price = moduleHtmlPhotographer.price;
    moduleLikesAndPrice.ticketLikesAndPrice().setLikes ("*40*"); // valeur fictive
    moduleLikesAndPrice.ticketLikesAndPrice().setPrice (price);

      // remonté des données médias du photographe selectionné
    console.log(pageModuleData.listMediaByPhotograph);
 }
 
 //// fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
     console.log("erreur 404...");
 }
 