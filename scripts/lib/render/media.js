import { routes } from "../../config/routes.js";

export function mediaFactory (data,idaHref) {
  
    let factory = null; let typeMedia; 
    if (data.hasOwnProperty('image')) {
        factory = imgFactory(data,idaHref, "Image");
    } 
    if (data.hasOwnProperty('video')) {
        factory = videoFactory(data,idaHref, "Vidéo");
    }

    function imgFactory (data,idaHref, typeMedia) { 
        const {id, photographerId, title, image, likes, date} = data;
        let img = document.createElement ('img');
        let lienMedia = routes.__DIRNAME_MEDIA()+photographerId+"/"+image;
            img.setAttribute('src',lienMedia);
            img.setAttribute('alt',title);
        let ahref = lienMediaDom(img,idaHref, typeMedia);
        let containerMedia = cardMediaDom(title,likes);

        let article = document.createElement('article');
        article.appendChild(ahref);
        article.appendChild(containerMedia);
        return article;
    }
    
    function videoFactory (data,idaHref, typeMedia) {
        const {id, photographerId, title, video, likes, date} = data;
        let videotype = document.createElement('video');
            videotype.setAttribute('class','videoMedia');
            videotype.setAttribute('aria-label',title);
           // videotype.setAttribute('controls',"");
            videotype.setAttribute('muted',"");
            //videotype.setAttribute('controlslist',"nodownload nofullscreen noremoteplayback");
        let lienMedia = routes.__DIRNAME_MEDIA()+photographerId+"/"+video;
        let source = document.createElement ('source');
            source.setAttribute('src',lienMedia);
            source.setAttribute("type","video/mp4");
        videotype.appendChild(source);
        let ahref =lienMediaDom(videotype,idaHref, typeMedia);
        let containerMedia = cardMediaDom(title,likes);

        let article = document.createElement('article');
        article.appendChild(ahref);
        article.appendChild(containerMedia);
        return article;
    }

    function cardMediaDom (title,likes) {
        let divTextuel = document.createElement('div');
            divTextuel.setAttribute('class','textuel');
        let h2 = document.createElement ('h2');
            h2.innerText = title;
        let buttonLike = document.createElement('button');
        let nbreLikes = document.createElement('strong');
            nbreLikes.innerText =  likes;
        let heartIcon = document.createElement('em');
            heartIcon.setAttribute('class','fas fa-heart fa-2x');
            heartIcon.setAttribute('aria-label', 'likes - cliquez pour ajouter des likes');
        
        buttonLike.appendChild(nbreLikes);
        buttonLike.appendChild(heartIcon);
        divTextuel.appendChild(h2);
        divTextuel.appendChild(buttonLike);
        return divTextuel;
    }

    function lienMediaDom (balise,id, media) {
        let href = document.createElement('a');
            href.setAttribute('href','#');
            href.setAttribute('title',"Obtenir "+media+" - vue rapprochée");
            href.setAttribute('id',id);
        href.appendChild(balise);
        return href;
    }
    return factory;
}