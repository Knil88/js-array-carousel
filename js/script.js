// creiamo la lista in cui immetteremo le nostre immagini
let imgList = new Array();


imgList[0] = new Image();
imgList[0].src = 'img/01.webp';

imgList[1] = new Image();
imgList[1].src = 'img/02.webp';

imgList[2] = new Image();
imgList[2].src = 'img/03.webp';

imgList[3] = new Image();
imgList[3].src = 'img/04.webp';

imgList[4] = new Image();
imgList[4].src = 'img/05.webp';

//Creiamo il ciclo

for(let i=0 ; i<imgList.length; i++){
    let cont = document.getElementById("items-container");
    let div = document.createElement("div");
    div.classList.add("item");
    div.append(imgList[i]);
    cont.append(div);
}