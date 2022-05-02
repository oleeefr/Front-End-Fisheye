import { routes } from "../../config/routes.js";

export function LightBoxFactory (listGallery) {

    // création DOM de la lightBox
    let iconLeft = document.createElement("em");
        iconLeft.setAttribute('class', "fas fa-chevron-left");
    let navLightBoxBtnLeft = document.createElement('button');
        navLightBoxBtnLeft.setAttribute('class',"left navBtn");
        navLightBoxBtnLeft.appendChild(iconLeft);

    let iconRight = document.createElement("em");
        iconRight.setAttribute('class', "fas fa-chevron-right");
    let navLightBoxBtnRight = document.createElement('button');
        navLightBoxBtnRight.setAttribute('class',"right navBtn");
        navLightBoxBtnRight.appendChild(iconRight);

    let containerMedia = document.createElement("div");
    containerMedia.setAttribute('class',"container");

    let closeBtn = document.createElement('button');
    closeBtn.setAttribute('class',"close");
    closeBtn.textContent = "X";

    // Selection Dom
    let lightBoxBtn = document.querySelectorAll("article a");
        lightBoxBtn.innerHTML="";

    let modalLightBox = document.querySelector(".lightBox .wrapper");
        modalLightBox.appendChild(closeBtn);
        modalLightBox.appendChild(navLightBoxBtnRight);
        modalLightBox.appendChild(containerMedia);
        modalLightBox.appendChild(navLightBoxBtnLeft);

    lightBoxBtn.forEach((ahref) => {
        ahref.addEventListener('click', function () {openLightBox(ahref)});
    });
    
    closeBtn.addEventListener('click', function () {closeLightBox()});

    navLightBoxBtnLeft.addEventListener('click', function () {slideLightBox(navLightBoxBtnLeft.value)});
    navLightBoxBtnRight.addEventListener('click', function () {slideLightBox(navLightBoxBtnRight.value)});        

    // réindexage des boutons lightBox
    function indexBtnLightBox (bouton) {
        for (let index = 0; index < bouton.length; index++) 
            bouton[index].setAttribute ("title",index+"- vue rapprochée du média");  
    }

    // Chargement de la lightBox
    function openLightBox (balise) {
        let index = balise.id;
        console.log(index);
        dysplayLightBox(index);
    }

    function closeLightBox () {
        modalLightBox.style.visibility= "collapse";
    }

    function dysplayLightBox (index) {
        console.log(listGallery[index]);
        modalLightBox.style.visibility= "visible";
        containerMedia.innerHTML="";
        slideLightBox(index);
    }

    function slideLightBox (index) {
            const {previousIndexMedia, typeMedia, nextIndexMedia} = readListMediaSort(index);
            navLightBoxBtnLeft.value= previousIndexMedia;
            navLightBoxBtnRight.value= nextIndexMedia;
            containerMedia.innerHTML="";
            containerMedia.appendChild(typeMedia);
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
            typeMedia.appendChild(video);
        }
        console.log("prev :"+previousIndexMedia+", current :"+indexIntImg, "next :"+nextIndexMedia);
        return {previousIndexMedia, typeMedia, nextIndexMedia};
    }
}
