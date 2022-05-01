let ___PATH = '../../lib/render/';

//// fonction de render (de Vue) pour afficher la page d'accueil
export async function index () {

    let render = await import ('../controller/index.js');

    render.photographersHtml();
 }
 
 //// fonction de render (de Vue) pour afficher la page Portrait Photographe
 export async function photographer () {

    let render = await import ('../controller/photographer.js');
    let renderForm = await import ('../../utils/form/contactForm.js');

    let articlePhotographDescription = document.querySelector('.photograph-header article');
    let h2 = document.createElement( 'h2');
        h2.setAttribute('class','hidden');
        h2.innerText = render.photographersHtml.name;
    let dl = render.photographersHtml.getUserCardDOMMini();

    articlePhotographDescription.appendChild(h2);
    articlePhotographDescription.appendChild(dl);

    let thumbnailPhotograph = document.querySelector('.photograph-header article.blockPortrait');
    let img = render.photographersHtml.getUserThumbnail();
    thumbnailPhotograph.appendChild(img);
    
    
    // Chargement de la galerie par defaut ou/et s'il y a un changement de critère
    // au niveau du trie
    let trieSelectBtn = document.querySelector('#Trie');
    trieSelectBtn.addEventListener("change", render.galleryHtml);

    // Affichage de la Gallerie média du Phototraphe
    render.galleryHtml();

     // ticket price
     render.ticketHtml();

     // launch modal event
    renderForm.modalBtn.addEventListener("click", renderForm.displayModal);

    // close modal event
    renderForm.closeBtn.addEventListener("click", renderForm.closeModal);

 }
 
 //// fonction de render (de Vue) pour afficher une page 404..
 export async function notFound404 () {
     console.log("erreur 404...");
 }
 