export const fnVidList = async() =>{
    const peticion = await fetch("../json/channelVideos.json");
    const json = await peticion.json();

    const p = await fetch("../json/channelDetails.json");
    const res = await p.json();

    let listContainer = document.querySelector("#list-container")
    listContainer.insertAdjacentHTML("beforeend", /* html */`
    ${json.contents.map((value)=> {
        return(/* html */`
            <div class="vid-list">
                <a href="./video/video.html"><img class="thumbnail" src="${value.video.thumbnails[3].url}" alt=""></a>
                <div id="profile" class="d-flex">
                <img src="${res.avatar[0].url}" alt="">
                    <div class="vid-info">
                        <a href="./video/video.html">${value.video.title}</a>
                        <p>${res.title}</p>
                        <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
                    </div>
                </div>
            </div>
        `)
        }).join("")
    }
    `)
}