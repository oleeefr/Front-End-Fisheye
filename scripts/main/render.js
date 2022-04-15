// importation de la liste des photographes & la liste des médias
import {photographers, media} from './session.js';
console.log(photographers);
console.log(media);

// importation des methodes pour la vue
import {displayData} from '../utils/render/index.js';

async function init() {
    // Récupère les datas des photographes
    // const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

