import { routes } from "../../config/routes.js";

export function mediaFactory (data) {
  
    let factory = null;
    if (data.hasOwnProperty('image')) {
        factory = imgFactory(data);
    } 
    if (data.hasOwnProperty('video')) {
        factory = videoFactory(data);
    }

    function imgFactory (data) { 
        const {id, photographerId, title, image, likes, date} = data;
        let img = document.createElement ('img');
        let lienMedia = routes.__DIRNAME_MEDIA()+photographerId+"/"+image;
            img.setAttribute('src',lienMedia);
            img.setAttribute('alt',title);
        let ahref = lienMediaDom(img);
        let containerMedia = cardMediaDom(title,likes);

        let article = document.createElement('article');
        article.appendChild(ahref);
        article.appendChild(containerMedia);
        return article;
    }
    
    function videoFactory (data) {
        const {id, photographerId, title, video, likes, date} = data;
        let videotype = document.createElement('video');
            videotype.setAttribute('class','videoMedia');
            videotype.setAttribute('aria-label',title);
        let source = document.createElement ('source');
        let lienMedia = routes.__DIRNAME_MEDIA()+photographerId+"/"+video;
            source.setAttribute('src',lienMedia);
            source.setAttribute("type","video/mp4");
        videotype.appendChild(source);
        let ahref =lienMediaDom(videotype);
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
        let heartIcon = document.createElement('i');
            heartIcon.setAttribute('class','fas fa-heart fa-2x');
            heartIcon.setAttribute('arai-label', 'likes - cliquez pour ajouter des likes');
        
        buttonLike.appendChild(nbreLikes);
        buttonLike.appendChild(heartIcon);
        divTextuel.appendChild(h2);
        divTextuel.appendChild(buttonLike);
        return divTextuel;
    }

    function lienMediaDom (balise) {
        let href = document.createElement('h2');
            href.setAttribute('src','#');
            href.setAttribute('title',"vue rapproché du média");
        href.appendChild(balise);
        return href;
    }
    return factory;
}

/*
<article>
                <a href="#" title="Agrandir le media">
                  <img src="/medias/Mimi/Animals_Rainbow.jpg" alt="Bel Oiseau sur une branche"/>
                </a>
                <div class="textuel">
                  <h2>image photos</h2> 
                  <button>
                    <strong>45</strong>
                    <i class="fas fa-heart fa-2x" aria-label="likes - cliquez pour ajouter des likes"></i>
                  </button>
                </div>
              </article>

              <video class="media__link__video" aria-label="Wooden Horse Sculpture, vue rapproché">
                        <source src="imgs/photos/82/Art_Wooden_Horse_Sculpture.mp4" type="video/mp4">
                    </video>

*/