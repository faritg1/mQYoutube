let menuIcon = document.querySelector("#menu");
let sidebar = document.querySelector("#sidebar");
let container = document.querySelector("#container");

/* Evento para reducir la informacion en el sidebar */
menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
} 

