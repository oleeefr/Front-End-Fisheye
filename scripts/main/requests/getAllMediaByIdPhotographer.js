// importation de la collection d'objet photographe et 
// et la collection d'objet des médias
import {listPhotographers, listMedia} from '../models/dao.js';

// fonction permettant extraire un objet photographe de la collection photographers 
// à partir de son Id
import {getPhotographerById} from '../../lib/requests/getPhotographerById.js';

// fonction permettant extraire toute la liste média d'un photographe à partir
// à partir de son Id
import {getMediaListByIdPhotographer} from '../../lib/requests/getMediaListByIdPhotographer.js';

// fonction pour récupérer id photographe de l'url
import {getParamPageUrl} from '../../utils/url/getPageUrl.js';

let idPhotograph = getParamPageUrl('id');
export const photograph = getPhotographerById(idPhotograph, listPhotographers);

export const listMediaByPhotograph = getMediaListByIdPhotographer(idPhotograph, listMedia);



