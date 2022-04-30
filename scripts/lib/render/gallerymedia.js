import {mediaFactory} from './media.js';
import {ticketLikesAndPrice} from './ticket.js';

export function displayGallery (listMedia) {
    let gallerySection = document.querySelector("section .wrapper");
        gallerySection.innerHTML="";
    let nbreTotaleLikes =0;

    listMedia.forEach(media => {
        let mediaModelDom = mediaFactory(media);
        gallerySection.appendChild(mediaModelDom);
        nbreTotaleLikes += media.likes;
    });

    ticketLikesAndPrice().setLikes(nbreTotaleLikes);
    let likesBtn = document.querySelectorAll("article button");
    console.log(likesBtn);
    likesBtn.forEach((btn) =>{
        btn.addEventListener('click', function () {updateButtonLike(btn)});
    });
}

 // gestion des incrèmentations des likes des médias
export function updateButtonLike (bouton) {
    let numberUpdate = parseInt(bouton.querySelector('strong').textContent);
    numberUpdate ++;
    bouton.querySelector('strong').textContent = numberUpdate;
    bouton.disabled = true;
    let SommeLikes = parseInt(ticketLikesAndPrice().getLike());
    SommeLikes++;
    ticketLikesAndPrice().setLikes(SommeLikes);
}

