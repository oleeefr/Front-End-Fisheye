import {mediaFactory} from './media.js';
import {ticketLikesAndPrice} from './ticket.js';
import {LightBoxFactory} from './lightBox.js';

export function displayGallery (collectionMedia) {
    let gallerySection = document.querySelector("section .wrapper");
        gallerySection.innerHTML="";
    let nbreTotaleLikes =0;

    collectionMedia.forEach(media => {
        let mediaModelDom = mediaFactory(media);
        gallerySection.appendChild(mediaModelDom);
        nbreTotaleLikes += media.likes;
    });

    ticketLikesAndPrice().setLikes(nbreTotaleLikes);
    let likesBtn = document.querySelectorAll("article button");
    likesBtn.forEach((btn) =>{
        btn.addEventListener('click', function () {updateButtonLike(btn)});
    });
    LightBoxFactory(collectionMedia);
    
}

 // gestion des incrèmentations des likes des médias
function updateButtonLike (bouton) {
    let numberUpdate = parseInt(bouton.querySelector('strong').textContent);
    numberUpdate ++;
    bouton.querySelector('strong').textContent = numberUpdate;
    bouton.disabled = true;
    let SommeLikes = parseInt(ticketLikesAndPrice().getLike());
    SommeLikes++;
    ticketLikesAndPrice().setLikes(SommeLikes);
}



