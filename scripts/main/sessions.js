import {dataPhotographers} from './datas.js';

// Importation & segmentation des données photographes et média
let data = await dataPhotographers;
export const photographers = [...data.photographers];
export const media = [...data.media];




