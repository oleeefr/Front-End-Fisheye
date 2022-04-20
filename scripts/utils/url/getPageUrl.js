
// fonction permettant de récuperer le nom de la page 
// à partir du lien de Url
export function getPageUrl (pathname) {

    const url = pathname.split("/");

    return url[url.length-1];
}