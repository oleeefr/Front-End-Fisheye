// importation des fonctions de render des pages
import {index, photographer, notFound404} from './render/pages.js';

export async function routeur (page) {

    switch (page) {
        case "" :
        case "index.html":
            index();
            break;

        case 'photographer.html':
            photographer();
            break;

        default :
            notFound404();         
    }
}


