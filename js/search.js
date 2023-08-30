/* FALTA API */

export const searchAll = async() =>{
    const peticion = await fetch("../json/channelSearch.json")
    const json = await peticion.json();
    let h=0, cont=0
    let array = json.contents.map((value, id)=>{
        if(value.playlist) return undefined;
        cont ++;
        if(cont<=10) h = 30 * cont;
        return /* html */`<li class="search" idSearch=${value.video.videoId}  style="color: black;"><a href="../video/video.html" style="color: black;">${value.video.title}</a></li>`
    })
    document.querySelector("#active").style.height = `${h}px`;
    document.querySelector("#searchAll").innerHTML = null;
    document.querySelector("#searchAll").insertAdjacentHTML("beforeend", array.join(""))

    const search = document.querySelectorAll(".search")
    search.forEach(sear => {
        sear.addEventListener("click", () => {
            let idSear = sear.getAttribute("idSearch")
            localStorage.setItem("ID",idSear)
        })
    })
}