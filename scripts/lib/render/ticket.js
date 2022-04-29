export function ticketLikesAndPrice () {
    
    function setLikes (likes) {
        let domLikes = document.querySelector("#total-likes");
        domLikes.textContent = likes; 
    }

    function setPrice (price) {
        let divTicket = document.querySelector("#ticket");
        let domPrice = document.createElement ('span');
            domPrice.textContent = price+" €/ jour";
        divTicket.appendChild(domPrice);
    }

    function getLike () {
        let domLikes = document.querySelector("#total-likes");
        return domLikes.value;
    }

    return {
        setLikes,
        setPrice
    }
}