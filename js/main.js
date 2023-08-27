let menuIcon = document.querySelector("#menu")
let sidebar = document.querySelector("#sidebar")

/* Evento para reducir la informacion en el sidebar */
menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
} 

