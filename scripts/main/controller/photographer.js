import {photograph, listMediaByPhotograph} from '../requests/getAllMediaByIdPhotographer.js';
import {photographerFactory} from '../../lib/render/photographer.js';
import {ticketLikesAndPrice} from '../../lib/render/ticket.js';
import {sortGallery} from '../../utils/gallery/sortGallery.js';
import {displayGallery} from '../../lib/render/gallerymedia.js';

export const photographersHtml = photographerFactory(photograph);

// Affichage du ticket Price du photographe
export const ticketHtml = function () {
    let price = photographersHtml.price;
   ticketLikesAndPrice().setPrice (price);
}

// Affichage de la galerie média
let galerieSortBySelect;
export const galleryHtml = function () {
    galerieSortBySelect = sortGallery(listMediaByPhotograph);
   return displayGallery(galerieSortBySelect.result);
};
