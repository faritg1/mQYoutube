import { rightSidebar } from "./sidebarPlayVideo.js";

let storageId = localStorage.getItem("ID");
let storageDate = localStorage.getItem("DATE");
rightSidebar(storageId,storageDate);