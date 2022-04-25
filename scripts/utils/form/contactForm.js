

export function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    let formulaire = document.querySelector("form[name=form]");
    formulaire.reset ();
    modal.style.display = "none";
}

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

