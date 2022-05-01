import { routes } from "../../config/routes.js";

export function LightBoxFactory (listGallery) {

    // Selection Dom
    let lightBoxBtn = document.querySelectorAll("article a");
    let modalLightBox = document.querySelector(".lightBox");
    let closeBtn = document.querySelector(".lightBox .close");
    let navLightBoxBtn = document.querySelectorAll(".lightBox .navBtn");
    let navLightBoxBtnLeft = document.querySelector(".lightBox .left");
    let navLightBoxBtnRight = document.querySelector(".lightBox .right");
    let containerMedia = document.querySelector(".lightBox .container");
    console.log(navLightBoxBtn);

    indexBtnLightBox(lightBoxBtn);
    lightBoxBtn.forEach((ahref) => {
        ahref.addEventListener('click', function () {openLightBox(ahref)});
    });

    closeBtn.addEventListener('click', function () {closeLightBox()});

    navLightBoxBtn.forEach((Btn)=> Btn.addEventListener('click', function () {slideLightBox(Btn.value)}));

    // réindexage des boutons lightBox
    function indexBtnLightBox (bouton) {
        for (let index = 0; index < bouton.length; index++) 
            bouton[index].setAttribute ("title",index+"- vue rapprochée du média");  
    }

    // Chargement de la lightBox
    function openLightBox (balise) {
        let index = balise.getAttribute("title")[0];
        console.log(index);
        dysplayLightBox(index);
    }

    function closeLightBox () {
        modalLightBox.style.visibility= "collapse";
    }

    
    function dysplayLightBox (index) {
        console.log(listGallery[index]);
        modalLightBox.style.visibility= "visible";
        slideLightBox(index);
    }

    function slideLightBox (index) {
        const {previousIndexMedia, typeMedia, nextIndexMedia} = readListMediaSort(index);
        navLightBoxBtnLeft.value= previousIndexMedia;
        navLightBoxBtnRight.value= nextIndexMedia;
        containerMedia.innerHTML="";
        containerMedia.appendChild(typeMedia);
    }

    function readListMediaSort (indexImg) {
        let typeMedia;
        let indexIntImg = parseInt(indexImg);
        let currentMedia = listGallery[indexIntImg];
        let nextIndexMedia = ((indexIntImg+1) >= listGallery.length)? 0:indexIntImg+1;
        let previousIndexMedia = ((indexIntImg-1) <0)? listGallery.length-1:indexIntImg-1;
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
            typeMedia.appendChild(video);
        }
        return {previousIndexMedia, typeMedia, nextIndexMedia};
    }

}