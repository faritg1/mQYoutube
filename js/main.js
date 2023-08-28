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
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a402962d30msha03577b2e46b364p19c5cejsn28de757b6c50',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

let fnYoutube = async() => {
    try {
        let peticion = await fetch(url, options);
        let res = await peticion.json();
        console.log(res);
    } catch (error) {
        console.error(error);
    }   
}



