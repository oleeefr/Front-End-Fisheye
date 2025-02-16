import { routes } from "../../config/routes.js";

export function LightBoxFactory (listGallery) {

    // création DOM de la lightBox
    let iconLeft = document.createElement("em");
        iconLeft.setAttribute('class', "fas fa-chevron-left");
    let navLightBoxBtnLeft = document.createElement('button');
        navLightBoxBtnLeft.setAttribute('class',"left navBtn");
        navLightBoxBtnLeft.setAttribute('aria-label','média précédent');
        navLightBoxBtnLeft.appendChild(iconLeft);
    let iconRight = document.createElement("em");
        iconRight.setAttribute('class', "fas fa-chevron-right");
    let navLightBoxBtnRight = document.createElement('button');
        navLightBoxBtnRight.setAttribute('class',"right navBtn");
        navLightBoxBtnRight.setAttribute('aria-label','média suivant');
        navLightBoxBtnRight.appendChild(iconRight);
    let h2 = document.createElement('h2');
    let divTextuel = document.createElement("div");
    let containerMedia = document.createElement("div");
    containerMedia.setAttribute('class',"container");
    let closeBtn = document.createElement('button');
        closeBtn.setAttribute('class',"close");
        closeBtn.setAttribute('aria-label','Fermer la fenêtre');
    closeBtn.textContent = "X";

    // Selection Dom
    let galerieMedia = document.querySelector('#gallery-media');
    let lightBoxBtn = document.querySelectorAll("article a");
        lightBoxBtn.innerHTML="";
    let divLightBox = document.querySelector(".lightBox");
    let modalLightBox = document.querySelector(".lightBox .wrapper");
        modalLightBox.appendChild(closeBtn);
        modalLightBox.appendChild(navLightBoxBtnRight);
        modalLightBox.appendChild(containerMedia);
        modalLightBox.appendChild(navLightBoxBtnLeft);

    // Affection des fonctions sur les Butons        
    lightBoxBtn.forEach((ahref) => {
        ahref.addEventListener('click', function () {openLightBox(ahref)});
    });
    
    closeBtn.addEventListener('click', function () {closeLightBox()});

    navLightBoxBtnLeft.addEventListener('click', function () {slideLightBox(navLightBoxBtnLeft.value)});
    navLightBoxBtnRight.addEventListener('click', function () {slideLightBox(navLightBoxBtnRight.value)});        

    divLightBox.addEventListener("keydown", (e) => {

        if (e.code === "Escape") 
            closeLightBox();
        
        if (e.code === "ArrowRight") 
            slideLightBox(navLightBoxBtnRight.value)
        
        if (e.code === "ArrowLeft") 
            slideLightBox(navLightBoxBtnLeft.value);
      });

    // Chargement de la lightBox
    function openLightBox (balise) {

        let index = balise.id;
        console.log(index);
        dysplayLightBox(index);
        galerieMedia.style.display = "none";
    }

    // Fermeture de la lightBox
    function closeLightBox () {

        divLightBox.style.visibility= "collapse";
        containerMedia.innerHTML="";
        galerieMedia.style.display = "block";
    }

    // Affichage de la lightBox
    function dysplayLightBox (index) {

        console.log(listGallery[index]);
        divLightBox.style.visibility= "visible";
        containerMedia.innerHTML="";
        slideLightBox(index);
        closeBtn.focus();
    }

    // 
    function slideLightBox (index) {

            const {previousIndexMedia, typeMedia, nextIndexMedia} = readListMediaSort(index);
            navLightBoxBtnLeft.value= previousIndexMedia;
            navLightBoxBtnRight.value= nextIndexMedia;
            containerMedia.innerHTML="";
            containerMedia.appendChild(typeMedia);
            containerMedia.appendChild(divTextuel);  
            console.log("prev :"+previousIndexMedia+" next :"+nextIndexMedia);
            console.log("------------------");

    }

    function readListMediaSort (indexImg) {

        console.log("index img à l'entrée: "+indexImg);
        let typeMedia;
        let indexIntImg = parseInt(indexImg);
        let nextIndexMedia, previousIndexMedia, currentMedia;
        console.log("current image : "+indexIntImg);
        currentMedia = listGallery[indexIntImg];
        nextIndexMedia = ((indexIntImg+1) >= listGallery.length)? 0:indexIntImg+1;
        previousIndexMedia = ((indexIntImg-1) <0)? listGallery.length-1:indexIntImg-1;
        let lienMedia = routes.__DIRNAME_MEDIA()+currentMedia.photographerId+"/";
        if (currentMedia.hasOwnProperty('image')) {

            typeMedia = document.createElement ('img');
                typeMedia.setAttribute('alt',currentMedia.title);
                typeMedia.setAttribute('src',lienMedia+currentMedia.image);
        } 
        if (currentMedia.hasOwnProperty('video')) {

            let video = document.createElement ('source');
                video.setAttribute('src',lienMedia+currentMedia.video);
                video.setAttribute("type","video/mp4");
            typeMedia = document.createElement('video');
                typeMedia.setAttribute('class','videoMedia');
                typeMedia.setAttribute('aria-label',currentMedia.title);
                typeMedia.setAttribute('controls',"");
                typeMedia.setAttribute('autoplay',"");
                typeMedia.setAttribute('controlslist',"nofullscreen noremoteplayback");
            typeMedia.appendChild(video);
        }

        divTextuel.innerHTML="";
        h2 = document.createElement('h2');
        h2.innerText=currentMedia.title;
        divTextuel.setAttribute('class','textuel');
        divTextuel.appendChild(h2);
        console.log("prev :"+previousIndexMedia+", current :"+indexIntImg, "next :"+nextIndexMedia);
        
        return {previousIndexMedia, typeMedia, nextIndexMedia};
    }
}
