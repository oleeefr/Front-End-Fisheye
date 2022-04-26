let ___PATH = '../../lib/render/';

// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    let htmlRender = await import ('../controller/index.js');

    htmlRender.photographers();
 }
 
 // fonction de render (de Vue) pour afficher la page Portrait Photographe
 export async function photographer () {

     let htmlRender = await import ('../controller/photographer.js');
     let htmlRenderForm = await import ('../../utils/form/contactForm.js');

    let articlePhotographDescription = document.querySelector('.photograph-header article');
     let h2 = document.createElement( 'h2');
         h2.setAttribute('class','hidden');
         h2.innerText = htmlRender.modulePhotographer.name;
     let dl = htmlRender.modulePhotographer.getUserCardDOMMini();

    articlePhotographDescription.appendChild(h2);
    articlePhotographDescription.appendChild(dl);

    let thumbnailPhotograph = document.querySelector('.photograph-header article.blockPortrait');
    let img = htmlRender.modulePhotographer.getUserThumbnail();
    thumbnailPhotograph.appendChild(img);
    
    // launch modal event
    htmlRenderForm.modalBtn.addEventListener("click", pageModalForm.displayModal);

    // close modal event
    htmlRenderForm.closeBtn.addEventListener("click", pageModalForm.closeModal);
 }
 
 // fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
     console.log("erreur 404...");
 }
 