// importation de la photo
import {photographerFactory} from './photographer.js';

// function d'affichage de la liste des photographes
export async function displayData(photographers) {
    let photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        let photographerModel = photographerFactory(photographer);
        let userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};