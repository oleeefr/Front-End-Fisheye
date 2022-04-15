import { routes } from "../../config/routes.js";

export function photographerFactory(data) {
    const { name, portrait } = data;
    const __PATH ='../';
    const no_image = __PATH+"assets/photographers/account.png" ;
    const picture = routes.__DIRNAME_PHOTOGRAPHER_PORTRAIT()+portrait;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}