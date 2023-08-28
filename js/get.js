/* FALTA API */

export const searchAll = async(id) =>{
    const peticion = await fetch(`https://youtube138.p.rapidapi.com/channel/search/?id=UC8fkwsjcI_MhralEX1g4OBw&q=${id}&hl=en&gl=US`, options)
    //const peticion = jsonLOCAL
    const json = await peticion.json();
    let h=0, cont=0
    let array = json.contents.map((val, id)=>{
        if(val.playlist) return undefined;
        cont ++;
        if(cont<=10) h = 30 * cont;
        return `<li><a href=""></a></li>`
    })
}