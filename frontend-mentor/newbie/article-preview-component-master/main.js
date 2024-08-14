// const btn = document.querySelector(".share-btn");
// const links = document.querySelector(".share-links");

// btn.addEventListener("click", () => {
//     links.classList.toggle("show");
// });


// Make it work well when there are multiple article preview components on the page:

// Add event listener to all buttons with the class 'share-btn'
// document.querySelectorAll(".share-btn").forEach(btn => {
//     btn.addEventListener("click", (event) => {
//         // Find the closest parent container, which should contain both the button and the links
//         const parentContainer = event.currentTarget.closest('.article-preview');
        
//         // Find the share-links element within the same parent container
//         const links = parentContainer.querySelector(".share-links");

//         // Toggle the 'show' class on the links element
//         links.classList.toggle("show");
//     });
// });

