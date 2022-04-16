import {dataPhotographers} from './datas.js';

// Importation & segmentation des données photographes et média
let data = await dataPhotographers;
export const listPhotographers = [...data.photographers];
export const listMedia = [...data.media];




