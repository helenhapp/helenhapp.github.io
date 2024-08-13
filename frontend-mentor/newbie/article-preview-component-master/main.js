const btn = document.querySelector(".share-btn");
const links = document.querySelector(".share-links");

btn.addEventListener("click", () => {
    links.classList.toggle("show");
});
