export const rightSidebar = async(id) => {
    const peticion = await fetch("../json/channelVideos.json");
    const json = await peticion.json();

    let rightSidebar = document.querySelector("#rightSidebar");
    rightSidebar.insertAdjacentHTML("beforeend", /* html */`
    ${json.contents.map((value)=>{
        return(/* html */`
            <div class="side-video-list">
                <a class="small-thumbnail" href="#">
                    <img src="${value.video.thumbnails[3].url}" alt="">
                </a>
                <div class="vid-info">
                    <a href="#">${value.video.title}</a>
                    <p>CreativeCode</p>
                    <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
                </div>
            </div>  
        `)
    }).join("")
    }
    `)

    let iframe = document.querySelector("#playVideo");
    iframe.insertAdjacentHTML("afterbegin", /* html */`
    <iframe  height="700" src="https://www.youtube.com/embed/${id}?si=RCQzQ3pyGAY5LxN1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    `)
}