
export function getPageUrl (pathname) {

    const url = pathname.split("/");

    return url[url.length-1];
}