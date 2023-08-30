import { rightSidebar } from "./sidebarPlayVideo.js";
import { fnIframe } from "./sidebarPlayVideo.js";

let storageId = localStorage.getItem("ID");
//let storageDate = localStorage.getItem("DATE");
rightSidebar();
fnIframe(storageId);