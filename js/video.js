import { rightSidebar } from "./sidebarPlayVideo.js";
import { fnIframe } from "./sidebarPlayVideo.js";
import {fnContIframe} from "./sidebarPlayVideo.js";
import { searchAll } from "./search.js";

/* API */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9192f0ac7mshaf138cd6b2d4880p1ad012jsn0f663843fe85',
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
