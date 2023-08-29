/* FALTA API */

/* export const searchAll = async(id) =>{
    const peticion = await fetch("../json/channelSearch.json")
    const json = await peticion.json();
    let h=0, cont=0
    let array = json.contents.map((value, id)=>{
        if(value.playlist) return undefined;
        cont ++;
        if(cont<=10) h = 30 * cont;
        return`<li style="color: black;"><a href="https://www.youtube.com/watch?v=${value.video.videoId}" style="color: black;">${value.video.title}</a></li>`
    })
    document.querySelector("#active").style.height = `${h}px`;
    document.querySelector("#searchAll").innerHTML = null;
    document.querySelector("#searchAll").insertAdjacentHTML("beforeend", array.join(" "))
} */