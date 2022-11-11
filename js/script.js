// creiamo la lista in cui immetteremo le nostre immagini
let imgList = new Array();
let btnUp = document.getElementById("up");
let btnDown = document.getElementById("down");

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

for(let i=0 ; i < imgList.length; i++){
    let cont = document.getElementById("items-container");
    let div = document.createElement("div");
    div.classList.add("item");
    div.style.width = '800px';
    div.style.height = '500px';
    div.append(imgList[i]);
    cont.append(div);
    
    div.classList.add("img");
    div.classList.add(".item");
      imgList[0] = div.classList.add(".active");  
     
    console.log(imgList[i]);

    
// Creiamo l'evento che permetterà di mandare avanti le immagini
    btnDown = document.addEventListener("click",
    function(event){
        for(let i=0 ; i < imgList.length; i++){

        }
        
        

    }
    ) 

}