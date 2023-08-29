import { rightSidebar } from "./rightSidebarPv.js";

let storage = localStorage.getItem("ID");
console.log(storage);
rightSidebar(storage);