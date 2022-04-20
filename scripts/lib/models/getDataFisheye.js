// Importation de la route d'accès à la base de données
import {routes} from '../../config/routes.js';

const __PATH ='../../../';

export async function getDataFisheye() {
  
    let chemin = __PATH+routes.__DIRNAME_DATA();
    let loadingData = await fetch (chemin)
        .then (
            function (response) { 
                if (response.ok) {
                    return response.json();
                };
            }
        ).then (
            function (result) {
                return result;
            }
        ).catch (
            function (error) {console.log (error)}
        );
    return loadingData;
}
