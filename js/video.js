import { rightSidebar } from "./sidebarPlayVideo.js";
import { fnIframe } from "./sidebarPlayVideo.js";
import {fnContIframe} from "./sidebarPlayVideo.js";
import { searchAll } from "./search.js";

/* API */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4eb061e88amsh29b8e54c662b1ecp113235jsn4118e7fbe114', // Si se acaba el api, poner la nueva key aca
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};


//searchAll(options);
let storageId = localStorage.getItem("ID");
rightSidebar(options);
fnIframe(storageId);
fnContIframe(storageId, options)

document.querySelector("#chartSearch").addEventListener("change", (e) =>{
    searchAll(e.target.value,options);
})
