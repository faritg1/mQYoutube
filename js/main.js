import { fnVidList } from "./vidList.js";
import { searchAll } from "./search.js";
import { fnIframe } from "./search.js";
let menuIcon = document.querySelector("#menu");
let sidebar = document.querySelector("#sidebar");
let container = document.querySelector("#container");

/* Evento para reducir la informacion en el sidebar */
menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
} 

/* API */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd47e8cf9fmsh4114f3dd8549dbdp1c5677jsn0a55738740b6',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

/* COMENZANDO API  UC8fkwsjcI_MhralEX1g4OBw @creativecode787 */

/* ------------------- IMPORT SearchAll barra de busqueda ---------------------- */
/* document.querySelector("#chartSearch").addEventListener("change", (e) =>{
    searchAll(e.target.value);
}) */

// Videos principales 
fnVidList(options);
searchAll(options);

let storageId = localStorage.getItem("ID");
fnIframe(storageId);

