import {photograph} from '../requests/getAllMediaByIdPhotographer.js';
import {photographerFactory} from '../../lib/render/photographer.js';

export const photographersHtml = photographerFactory(photograph);