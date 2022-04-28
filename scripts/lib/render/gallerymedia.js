import {mediaFactory} from './media.js';

export function displayGallery (listMedia) {
    let gallerySection = document.querySelector("section .wrapper");
        gallerySection.innerHTML="";

    listMedia.forEach(media => {
        let mediaModelDom = mediaFactory(media);
        gallerySection.appendChild(mediaModelDom);
    });


}