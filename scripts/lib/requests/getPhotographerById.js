
// fonction renvoyant un objet Photographer  
// à partir d'une liste/Collection par son id
// s'il existe. Sinon renvoie null
export function getPhotographerById (idPhotographer, listPhotographer) {
   let ObjectPhotographer = null;

   listPhotographer.forEach(photographer => {
        if (idPhotographer == photographer.id) ObjectPhotographer = photographer;}
    );
   return ObjectPhotographer;
}