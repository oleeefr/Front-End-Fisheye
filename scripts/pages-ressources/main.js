
// Importation des éléments Dom pour l'affichge de la liste des photographes
//import {photographers, media} from 'session.js';




async function init() {
    // Récupère les datas des photographes
    // const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();