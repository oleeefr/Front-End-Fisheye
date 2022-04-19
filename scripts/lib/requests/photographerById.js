
// fonction renvoyant un objet Photographer  
// à partir d'une liste/Collection par son id
// s'il existe. Sinon renvoie null
export function photographerById (idPhotographer, listPhotographer) {
   let ObjectPhotographer = null;

   return ObjectPhotographer = listPhotographer.forEach(photographer => {
        if (idPhotographer == photographer.id) return photographer;}
    );
}