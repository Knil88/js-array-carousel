// creiamo la lista in cui immetteremo le nostre immagini
let imgList = new Array();
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");

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
    
    div.style.width = '800px';
    div.style.height = '500px';
    div.append(imgList[i]);
    cont.append(div);
    
    div.classList.add("img");
    div.classList.add("item");

   
    
      
      
     
    console.log(imgList[i]);


    


}

const divArray = document.getElementsByClassName("img");
divArray[0].classList.add("active");
let activeItem = 0 ; 

// Creiamo evento bottone 

btnDown.addEventListener("click",
    function(){
        if(activeItem  < divArray.length - 1) {
            divArray[activeItem].classList.remove("active");
            activeItem++;
            divArray[activeItem].classList.add("active");

        }
        else if(activeItem === divArray.length - 1 ){
            btnDown.classList.add("item");
            btnUp.classList.add("active");
            
            
            
        }
        
        
    }
)


btnUp.addEventListener("click",
    function(){
        if(activeItem > 0) {
            divArray[activeItem].classList.remove("active");
            activeItem--;
            divArray[activeItem].classList.add("active");
            

        }
        else if(activeItem == divArray.length + 1 ){
            btnUp.classList.add("item");
            btnDown.classList.add("active");
            

            
        }
        
        
    }
)