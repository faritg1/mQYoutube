export const rightSidebar = async(id, date) => {
    const peticion = await fetch("../json/channelVideos.json");
    const json = await peticion.json();

    /* Agregando contenido en la barra lateral */
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
    const videoPeticion = await fetch("../json/videoDetails.json");
    const jsonVideo = await videoPeticion.json();
    console.log(date);

    /* Redireccionamiento video e informacion */
    let iframe = document.querySelector("#playVideo");
    iframe.insertAdjacentHTML("beforeend", /* html */`
        <iframe height="700" src="https://www.youtube.com/embed/${id}?si=RCQzQ3pyGAY5LxN1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>${jsonVideo.title}</h3>
        <div class="play-video-info">
            <p>${jsonVideo.stats.views} Veiws &bull; ${date}</p>
            <div>
                <a href="#"><img src="../img/like.png" alt="">125</a>
                <a href="#"><img src="../img/dislike.png" alt="">2</a>
                <a href="#"><img src="../img/share.png" alt=""> Share</a>
                <a href="#"><img src="../img/save.png" alt="">Save</a>
            </div>
        </div>
        <hr>
        <div class="plublisher">
            <img src="../img/Jack.png" alt="">
            <div>
                <p>Easy Tutorials</p>
                <span>500K Subscribers</span>
            </div>
            <button type="button">Subscribe</button>
        </div>
        <div class="vid-description">
            <p>Channel that makes learning easy</p>
            <p>Subscribe Easy Tutorials to watch more tutorials on wev Development</p>
            <hr>
            <h4>100 Comments</h4>
            <div class="add-comment">
                <img src="../img/Jack.png" alt="">
                <input type="text" placeholder="Write comments...">
            </div>
            <div class="old-comment">
                <img src="../img/Jack.png" alt="">
                <div>
                    <h3>Jack <span>2 days ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta exercitationem odio aspernatur totam. Id repellat quibusdam quia, minus in sed.</p>
                    <div class="acomment-action">
                        <img src="../img/like.png" alt="">
                        <span>244</span>
                        <img src="../img/dislike.png" alt="">
                        <span>2</span>
                        <span>Reply</span>
                        <a href="#">All Replies</a>
                    </div>
                </div>
            </div>
            <div class="old-comment">
                <img src="../img/Jack.png" alt="">
                <div>
                    <h3>Jack <span>2 days ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta exercitationem odio aspernatur totam. Id repellat quibusdam quia, minus in sed.</p>
                    <div class="acomment-action">
                        <img src="../img/like.png" alt="">
                        <span>244</span>
                        <img src="../img/dislike.png" alt="">
                        <span>2</span>
                        <span>Reply</span>
                        <a href="#">All Replies</a>
                    </div>
                </div>
            </div>
        </div>
    `)
}