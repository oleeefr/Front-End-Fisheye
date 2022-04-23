
export function getMediaListByIdPhotographer (idPhotograph, listdata) {
    let medias = [];
    listdata.forEach(media => {
       if (media.photographerId == idPhotograph) medias.push(media);
    });

    return medias;
}