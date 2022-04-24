
export function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

export const modalBtn = document.querySelector(".contact_button");

export const closeBtn = document.querySelector(".close_bouton");