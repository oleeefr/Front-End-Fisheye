import {photograph} from '../requests/getAllMediaByIdPhotographer.js';
import {photographerFactory} from '../../lib/render/photographer.js';

export const modulePhotographer = photographerFactory(photograph);