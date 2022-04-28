import {photograph, listMediaByPhotograph} from '../requests/getAllMediaByIdPhotographer.js';
import {photographerFactory} from '../../lib/render/photographer.js';
import {ticketLikesAndPrice} from '../../lib/render/ticket.js';
import {sortGallery} from '../../utils/gallery/sortGallery.js';

export const photographersHtml = photographerFactory(photograph);

// Affichage du ticket Likes and Price du photographe
export const ticketHtml = function () {
    let price = photographersHtml.price;
    ticketLikesAndPrice().setLikes ("*40*"); // valeur fictive
    ticketLikesAndPrice().setPrice (price);
}

// Affichage de la galerie média
let galerieSortBySelect = sortGallery(listMediaByPhotograph);

console.log(galerieSortBySelect);
