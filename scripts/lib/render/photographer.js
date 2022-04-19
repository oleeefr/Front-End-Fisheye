import { routes } from "../../config/routes.js";

export function photographerFactory(data) {
    const __PATH ='../';
    const { name, portrait, country, city, tagline, price} = data;
    const no_image = __PATH+"assets/photographers/account.png" ;
    const picture = (portrait ==null || 
                     portrait.trim().length == 0)? no_image: routes.__DIRNAME_PHOTOGRAPHER_PORTRAIT()+portrait;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
           img.setAttribute("src", picture);
           img.setAttribute("alt","Portrait photographe");
        const h2 = document.createElement( 'h2' );
            h2.textContent = name;
            h2.setAttribute("class","hidden");
            h2.setAttribute("aria-hidden","true");
        const dl = document.createElement( 'dl');
            dl.setAttribute("aria-label","Description");
        const dt = document.createElement( 'dt');
            dt.textContent = name;
        const ddLocalisation = document.createElement( 'dd');
            ddLocalisation.textContent = city+", "+country;
        const ddTagline = document.createElement( 'dd');
            ddTagline.textContent = tagline;
        const ddPrice = document.createElement( 'dd');
            ddPrice.setAttribute("class", "price");
            ddPrice.textContent = price+"€/jour";

        dl.appendChild(dt);
        dl.appendChild(ddLocalisation);
        dl.appendChild(ddTagline);
        dl.appendChild(ddPrice);

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(dl);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}