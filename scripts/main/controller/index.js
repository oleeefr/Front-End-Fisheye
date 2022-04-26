import {photographers} from '../requests/getAllPhotographers.js';
import {displayData} from '../../lib/render/listPhotographers.js'

export const photographers = displayData(photographers);