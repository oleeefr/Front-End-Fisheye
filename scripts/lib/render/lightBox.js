import { routes } from "../../config/routes.js";

export function LightBoxFactory (listGallery) {

    // création de la lightBox
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

    let modalLightBox = document.querySelector(".lightBox");
        modalLightBox.appendChild(closeBtn);
        modalLightBox.appendChild(navLightBoxBtnRight);
        modalLightBox.appendChild(containerMedia);
        modalLightBox.appendChild(navLightBoxBtnLeft);

    // let closeBtn = document.querySelector(".lightBox .close");
    //let navLightBoxBtn = document.querySelectorAll(".lightBox .navBtn");
    //let navLightBoxBtnLeft = document.querySelector(".lightBox .left");
    //let navLightBoxBtnRight = document.querySelector(".lightBox .right");
    //let containerMedia = document.querySelector(".lightBox .container");
    let session =0;
    

    //indexBtnLightBox(lightBoxBtn);
    lightBoxBtn.forEach((ahref) => {
        ahref.addEventListener('click', function () {openLightBox(ahref)});
    });
    
    closeBtn.addEventListener('click', function () {closeLightBox()});

    navLightBoxBtnLeft.addEventListener('click', function () {slideLightBox(navLightBoxBtnLeft.value)});
    navLightBoxBtnRight.addEventListener('click', function () {slideLightBox(navLightBoxBtnRight.value)});        

    /*
    navLightBoxBtn.forEach((Btn)=> 
    Btn.addEventListener('click', function () {
                        slideLightBox(Btn.value);
    }));*/

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
        session = 0;
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
            // session =0;
            console.log("session à la fin de slideLightBox.."+session);
            console.log("prev :"+previousIndexMedia+" next :"+nextIndexMedia);
            console.log("------------------");
    }

    function readListMediaSort (indexImg) {
        console.log("session à l'entrée: "+session);
        console.log("index img à l'entrée: "+indexImg);
        let typeMedia;
        let indexIntImg = parseInt(indexImg);
        let nextIndexMedia, previousIndexMedia, currentMedia;
        
      // if(session ==0) {
            console.log("dans la condit if: "+session);
            console.log("current image : "+indexIntImg);
            currentMedia = listGallery[indexIntImg];
            session++;
            console.log("session après +: "+session);
        /*    } else { 
            console.log("current image : "+indexIntImg);
            indexIntImg--;
            console.log("correction image --: "+indexIntImg);
            currentMedia = listGallery[indexIntImg];
            session =0; 
            console.log("session après : "+session); 
            }*/

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

    function renderNavBtn () {

        let iconLeft = document.createElement("em");
            iconLeft.setAttribute('class', "fas fa-chevron-left");
        let boutonLeft = document.createElement('button');
            boutonLeft.setAttribute('class',"left navBtn");
        boutonLeft.appendChild(iconLeft);

        let iconRight = document.createElement("em");
            iconRight.setAttribute('class', "fas fa-chevron-left");
        let boutonRight = document.createElement('button');
            boutonRight.setAttribute('class',"left navBtn");
        boutonRight.appendChild(iconRight);

        let containerImage = doucment.createElement("div");
            containerImage.setAttribute('class',"container");

        let boutonFermer = document.createElement('button');
            boutonFermer.setAttribute('class',"close");
            boutonFermer.textContent = "X";
        /*
        <button class="close" aria-label="Fermer la fenêtre" tab>✕</button>
       
        <button class="left navBtn" aria-label="média précédent">
          <em class="fas fa-chevron-left"></em>
        </button>
        <div class="container"></div>
        <button class="right navBtn" aria-label="media suivant">
            <em class="fas fa-chevron-right"></em>
        </div>
        */
    }

}
