
const modal = document.getElementById("contact_modal");

//// Fonction permettant d'ouvrir la modale du fomulaire de contact
export function displayModal() {
    let main = document.querySelector('#main');
        main.setAttribute('aria-hidden', 'true');
        modal.setAttribute('aria-hidden','false');
    let firstFocusInput = document.querySelector("input");
        firstFocusInput.focus();
	modal.style.display = "block";
}

//// Fonction permettant de fermer la modale du fomulaire de contact
export function closeModal() {
    let main = document.querySelector('#main');
        main.setAttribute('aria-hidden', 'false');
        modal.setAttribute('aria-hidden','true');
    let formulaire = document.querySelector("form[name=form]");
    formulaire.reset ();
    modal.style.display = "none";
}

export function renderTitleForm (name) {
    let title = modal.querySelector('h2');
        title.innerHTML= "Contactez-moi<br />"+name;
}

//// Fonction permettant transmettre le resultat de la saisie du formulaire Validée
export function renderLog() {
    let nameField = document.querySelector("input[name=nom]").value;
    let emailField = document.querySelector("input[name=email]").value;
    let messageField = document.querySelector("textarea[name=message]").value;

    console.log ("Nom : "+nameField);
    console.log ("Courriel : "+emailField);
    console.log("Message : "+messageField);
}

export const modalBtn = document.querySelector(".contact_button");
export const closeBtn = document.querySelector(".close_bouton");

