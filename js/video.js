import { rightSidebar } from "./sidebarPlayVideo.js";
import { fnIframe } from "./sidebarPlayVideo.js";
import { searchAll } from "./search.js";

searchAll();
let storageId = localStorage.getItem("ID");
//let storageDate = localStorage.getItem("DATE");
rightSidebar();
fnIframe(storageId);