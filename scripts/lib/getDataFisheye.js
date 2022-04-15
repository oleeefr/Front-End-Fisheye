// Importation de la route d'accès à la base de données
import {routes} from '../config/routes.js';

const __PATH ='../';

export async function getDataFisheye() {
    try {
        let loadingData = await fetch (__PATH+routes.__DIRNAME_DATA()).then (
            function (response) { 
                if (response.ok) {
                    return response.json();
                };
            }
        ).then (
            function (result) {
                //console.log(result);
                return result;
            }
        ).catch (
            function (error) {console.log (error)}
        );
        return loadingData;

    } catch (error) {
        console.log("error detected : "+error);
    }
}
