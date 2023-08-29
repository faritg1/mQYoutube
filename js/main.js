//import { searchAll } from "./search.js";
import { fnVidList } from "./vidList.js";
let menuIcon = document.querySelector("#menu");
let sidebar = document.querySelector("#sidebar");
let container = document.querySelector("#container");

/* Evento para reducir la informacion en el sidebar */
menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
} 

/* COMENZANDO API  UC8fkwsjcI_MhralEX1g4OBw @creativecode787 */

/* ------------------- IMPORT SearchAll ---------------------- */
/* document.querySelector("#chartSearch").addEventListener("change", (e) =>{
    searchAll(e.target.value);
}) */

// Videos principales 
fnVidList();

//Barra Buscar
//searchAll();
