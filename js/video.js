import { rightSidebar } from "./sidebarPlayVideo.js";
import { fnIframe } from "./sidebarPlayVideo.js";
import { searchAll } from "./search.js";

/* API */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd47e8cf9fmsh4114f3dd8549dbdp1c5677jsn0a55738740b6',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

searchAll();
let storageId = localStorage.getItem("ID");
//let storageDate = localStorage.getItem("DATE");
rightSidebar();
fnIframe(storageId);