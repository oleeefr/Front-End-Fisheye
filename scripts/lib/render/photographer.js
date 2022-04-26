import { routes } from "../../config/routes.js";

export function photographerFactory(data) {
    const __PATH ='../';
    const { name, id, portrait, country, city, tagline, price} = data;
    const no_image = __PATH+"assets/photographers/account.png" ;
    const picture = (portrait ==null || 
                     portrait.trim().length == 0)? no_image: routes.__DIRNAME_PHOTOGRAPHER_PORTRAIT()+portrait;
    
    /* format render (de vue) détaillé du profil */
    function getUserDescriptionDOM () {
        
        let dl = getUserCardDOMMini();
        const ddPrice = document.createElement( 'dd');
            ddPrice.textContent = price+"€/jour";

        dl.appendChild(ddPrice);
        return dl;
    }

    /* Format render (de vue) Réduit du profil*/
    function getUserCardDOMMini () {
    
        let dl = document.createElement( 'dl');
            dl.setAttribute("aria-label","Renseignements");
        let dt = document.createElement( 'dt');
            dt.setAttribute("aria-label","Nom");
            dt.textContent = name;
        let ddLocalisation = document.createElement( 'dd');
            ddLocalisation.textContent = city+", "+country;
        let ddTagline = document.createElement( 'dd');
            ddTagline.textContent = tagline;

        dl.appendChild(dt);
        dl.appendChild(ddLocalisation);
        dl.appendChild(ddTagline);
        return dl;
    }

    function getUserThumbnail () {
        
       let img = document.createElement( 'img' );
           img.setAttribute("src", picture);
           img.setAttribute("alt","Portrait "+name);
    return img;
    }

    function getUserCardDOM() {
        const ahref = document.createElement( 'a');
            ahref.setAttribute("href","photographer.html?id="+id);
            ahref.setAttribute("title","vers page "+name);
        const article = document.createElement( 'article' );
        const img = getUserThumbnail();
        const h2 = document.createElement( 'h2' );
            h2.textContent = name;
            h2.setAttribute("class","hidden");
            h2.setAttribute("aria-hidden","true");
        const dl = getUserDescriptionDOM();
        /*
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(dl);
        ahref.appendChild(article);
        return ahref;*/

        ahref.appendChild(img);
        article.appendChild(ahref);
        article.appendChild(h2);
        article.appendChild(dl);
        return article;
    }

    return { name, price, getUserCardDOM, getUserDescriptionDOM, getUserCardDOMMini, getUserThumbnail }
}