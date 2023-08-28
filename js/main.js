import { searchAll } from "./get";
let menuIcon = document.querySelector("#menu");
let sidebar = document.querySelector("#sidebar");
let container = document.querySelector("#container");

/* Evento para reducir la informacion en el sidebar */
menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
} 

/* COMENZANDO API  UC8fkwsjcI_MhralEX1g4OBw
@creativecode787 */

const url = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const video = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a402962d30msha03577b2e46b364p19c5cejsn28de757b6c50',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

let fnChannel = async(url,options) => {
    let peticion = await fetch(url, options);
    let res = await peticion.json();
    let profile = document.querySelector("#profile");
    profile.innerHTML = null;
    profile.insertAdjacentHTML("beforeend", /* html */`
    <div id="profile" class="d-flex">
    <img src="${res.avatar[0].url}" alt="">
        <div class="vid-info">
            <a href="./video/video.html">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, velit!</a>
            <p>Lorem, ipsum.</p>
            <p>15k Views &bull; 2 days</p>
        </div>
    </div>
    `)
}
fnChannel(url, options);

let fnVideo = async(url, options) => {
    let peticion = await fetch(url, options);
    let res = await peticion.json();
    let video = document.querySelector("#vid-list");
    video.innerHTML = null;
    video.insertAdjacentHTML("beforeend", /* html */ `
        <img class="thumbnail" src=" ${res.contents[0].video.movingThumbnails[0].url} " alt=""> 
    `)}
fnVideo(video,options);

/* ------------------- IMPORT SearchAll ---------------------- */
document.querySelector("#charSearch").addEventListener("change", (e) =>{
    searchAll(e.target.value);
})




