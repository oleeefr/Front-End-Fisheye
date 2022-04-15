// importation des fonctions de render des pages
import {index, photographer, notFound404} from '../utils/render/pages.js';

export async function controleur (page) {

    switch (page) {
        case '/index.html':
            index();
            break;

        case '/photographer.html':
            photographer();
            break;

        default :
            notFound404();         
    }
}


