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
}