import { fnVidList } from "./vidList.js";
import { searchAll } from "./search.js";
import { fnIframe } from "./sidebarPlayVideo.js";
import {fnContIframe} from "./sidebarPlayVideo.js";
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
		'X-RapidAPI-Key': '4eb061e88amsh29b8e54c662b1ecp113235jsn4118e7fbe114',// Si se acaba el api, poner la nueva key aca
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

/* COMENZANDO API  UC8fkwsjcI_MhralEX1g4OBw @creativecode787 */

/* ------------------- IMPORT SearchAll barra de busqueda ---------------------- */
document.querySelector("#chartSearch").addEventListener("change", (e) =>{
    searchAll(e.target.value,options);
})

fnVidList(options);
//searchAll(options);

let storageId = localStorage.getItem("ID");
fnIframe(storageId); 
fnContIframe(storageId, options)
