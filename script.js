const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer as Web Devloper";
    }, 0),
    setTimeout(() => {
        text.textContent = "Backend PHP Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Backend Laravel Developer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Frontend Web Developer";
    }, 12000); 
}
textLoad();
setInterval(textLoad, 12000);