import {mediaFactory} from './media.js';

export function displayGallery (listMedia) {
    let gallerySection = document.querySelector("section .wrapper");

    listMedia.forEach(media => {
        let mediaModelDom = mediaFactory(media);
        gallerySection.appendChild(mediaModelDom);
    });


}