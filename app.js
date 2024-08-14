const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".openModalButton");
const closeModalButton = document.querySelector(".closeModalButton");


const openModal = () => {
    modal.classList.remove("close");
}

openModalButton.addEventListener("click", () => {
    // console.log("clicked");
    openModal();
});



// Extra written code

const closeModal = () => {
    modal.classList.add("close");
}

closeModalButton.addEventListener("click", () => {
    closeModal();
})