const navbar =document.getElementById("navbar");
const body = document.querySelector("body");
const slider = document.querySelector(".slider");
const yüz = document.querySelector(".yüz");
const göz = document.querySelector(".göz");
const dudak = document.querySelector(".dudak");
const oje = document.querySelector(".oje");
const kaş = document.querySelector(".kaş");
const image= document.querySelector(".slider-img");

const ballonZero= document.querySelector(".ballon-zero");
const ballonOne=document.querySelector(".ballon-one");
const ballonTwo= document.querySelector(".ballon-two");
const ballonThree=document.querySelector(".ballon-three");
const ballonFour=document.querySelector(".ballon-four");
const ballonFive=document.querySelector(".ballon-five");
const balons = document.querySelectorAll(".ballon");
const divBallons= document.querySelector(".ballons");

const mostSellersSlide = document.querySelectorAll(".product-details");

const aciklama = document.querySelector(".acıklama-text");

const showmore = document.querySelector(".showmore");



const models = [
    {          
        link : 'https://www.noteshop.com.tr/Uploads/Slider/ar-175.gif?t=20210810161959'
    },
    {
        link : 'https://www.noteshop.com.tr/Uploads/Slider/-127.jpg?t=20210506160023'
    },
    {
        link : 'https://www.noteshop.com.tr/Uploads/Slider/-134.jpg?t=20210608132412'
    },
    {
       link : 'https://www.noteshop.com.tr/Uploads/Slider/-164.jpg?t=20210727165336'
    },
    {
        link : 'https://www.noteshop.com.tr/Uploads/Slider/-176.jpg?t=20210818101702'
    },
    {
        link:'https://www.noteshop.com.tr/Uploads/Slider/-169.jpg?t=20210810155211'
    }

];

const photos= [

    {
        path:'./img/1.jpg',
        hover:'./img/1-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz1.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-1hover.jpg',
        pathGoz:'/img/gozUrunler/1.jpg',
        hoverGoz:'/img/gozUrunler/hover1.jpg',
        pathFirsat:'./img/firsatUrunler/1.jpg',
        hoverFirsat:'./img/firsatUrunler/hover1.jpg'
    },
    {
        path:'./img/8.jpg',
        hover:'./img/8-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz2.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-2hover.jpg',
        pathGoz:'/img/gozUrunler/2.jpg',
        hoverGoz:'/img/gozUrunler/hover2.jpg',
        pathFirsat:'./img/firsatUrunler/2.jpg',
        hoverFirsat:'./img/firsatUrunler/hover2.jpg'
    },
    
    {
        path:'./img/3.jpg',
        hover:'./img/3-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz3.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-3hover.jpg',
        pathGoz:'/img/gozUrunler/3.jpg',
        hoverGoz:'/img/gozUrunler/hover3.jpg',
        pathFirsat:'./img/firsatUrunler/3.jpg',
        hoverFirsat:'./img/firsatUrunler/hover3.jpg'
        
    },
    
    {
        path:'./img/4.jpg',
        hover:'./img/4-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz4.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-4hover.jpg',
        pathGoz:'/img/gozUrunler/4.jpg',
        hoverGoz:'/img/gozUrunler/hover4.jpg'
    },
    
    {
        path:'./img/5.jpg',
        hover:'./img/5-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz5.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-5hover.jpg',
        pathGoz:'/img/gozUrunler/5.jpg',
        hoverGoz:'/img/gozUrunler/hover5.jpg'
    },
    
    {
        path:'./img/6.jpg',
        hover:'./img/6-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz6.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-6hover.jpg',
        pathGoz:'/img/gozUrunler/6.jpg',
        hoverGoz:'/img/gozUrunler/hover6.jpg'
    },
    
    {
        path:'./img/7.jpg',
        hover:'./img/7-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz7.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-7hover.jpg',
        pathGoz:'/img/gozUrunler/7.jpg',
        hoverGoz:'/img/gozUrunler/hover7.jpg'
    },
    {
        path:'./img/2.jpg',
        hover:'./img/2-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz8.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-8hover.jpg',
        pathGoz:'/img/gozUrunler/8.jpg',
        hoverGoz:'/img/gozUrunler/hover8.jpg'
    },
    {
        path:'./img/9.jpg',
        hover:'./img/9-hover.jpg',
        pathYuz:'./img/yuzUrunler/yuz9.jpg',
        hoverYuz:'./img/yuzUrunler/yuz-9hover.jpg',
        pathGoz:'/img/gozUrunler/9.jpg',
        hoverGoz:'/img/gozUrunler/hover9.jpg'
    },
    
    {
        path:'./img/10.jpg',
        hover:'./img/10-hover.jpg',
        pathGoz:'/img/gozUrunler/10.jpg',
        hoverGoz:'/img/gozUrunler/hover10.jpg'
     
    }
    
   
    
    
];

image.src=models[0].link;
ballonZero.style.backgroundColor="black";


allEvents();

function allEvents(){

    startSlider();
    hover();
    
    showmore.addEventListener("click",xShowMore);
    yüz.addEventListener("mouseenter",xYüz);
    göz.addEventListener("mouseenter",xGöz);
    dudak.addEventListener("mouseenter",xDudak);
    kaş.addEventListener("mouseenter",xKaş);
    oje.addEventListener("mouseenter",xOje);
    slider.addEventListener("click",moveImage);
   

    divBallons.addEventListener("click",function(){
        clearInterval(interval);
    });


}


let x =0;
function xShowMore(e){
    x++;
    // const mystyle = document.querySelector(".q");

    aciklama.classList.toggle("mystyle");
    
    if (x%2==1) {
        showmore.textContent="Daha Az Göster";
    }
    else
    showmore.textContent="Daha Fazla Göster";
  
    e.preventDefault();
}






function hover(){

    mostSellersSlide.forEach(child=>{
       
        if (child.addEventListener("mouseenter",function(){

            
            if (child.classList.contains("productOne")) {
                
                child.children[1].attributes.src.value=photos[0].hover;
                const faHeart = document.querySelector(".kalpOne");
                faHeart.style.color="#F87171";

            }

              
            if (child.classList.contains("productTwo")) {
                
                child.children[1].attributes.src.value=photos[1].hover;
                const faHeart = document.querySelector(".kalpTwo");
                faHeart.style.color="#F87171";
            }
    
            if (child.classList.contains("productThree")) {
                
                child.children[1].attributes.src.value=photos[2].hover;
                const faHeart = document.querySelector(".kalpThree");
                faHeart.style.color="#F87171";
            }
    
            if (child.classList.contains("productFour")) {
                
                child.children[1].attributes.src.value=photos[3].hover;
                const faHeart = document.querySelector(".kalpFour");
                faHeart.style.color="#F87171";
            }
    
            if (child.classList.contains("productFive")) {
                
                child.children[1].attributes.src.value=photos[4].hover;
                const faHeart = document.querySelector(".kalpFive");
                faHeart.style.color="#F87171";
            }
    
            if (child.classList.contains("productSix")) {
                
                child.children[1].attributes.src.value=photos[5].hover;
                const faHeart = document.querySelector(".kalpSix");
                faHeart.style.color="#F87171";
            }
    
            if (child.classList.contains("productSeven")) {
                
                child.children[1].attributes.src.value=photos[6].hover;
                const faHeart = document.querySelector(".kalpSeven");
                faHeart.style.color="#F87171";
            }
    
            if (child.classList.contains("productEight")) {
                
                child.children[1].attributes.src.value=photos[7].hover;
                const faHeart = document.querySelector(".kalpEight");
                faHeart.style.color="#F87171";
            }
    
            if (child.classList.contains("productNine")) {
                
                child.children[1].attributes.src.value=photos[8].hover;
                const faHeart = document.querySelector(".kalpNine");
                faHeart.style.color="#F87171";
            }
    
            if (child.classList.contains("productTen")) {
                
                child.children[1].attributes.src.value=photos[9].hover;
                const faHeart = document.querySelector(".kalpTen");
                faHeart.style.color="#F87171";
            }

            /*******************yüz ürünleri**********************/

            if (child.classList.contains("yuzOne")) {
                child.children[1].attributes.src.value=photos[0].hoverYuz;
                const faHeart = document.querySelector(".kalpOneYuz");
                faHeart.style.color="#F87171";
                
           }

           if (child.classList.contains("yuzTwo")) {
            child.children[1].attributes.src.value=photos[1].hoverYuz;
            const faHeart = document.querySelector(".kalpTwoYuz");
            faHeart.style.color="#F87171";
            
            }

            if (child.classList.contains("yuzThree")) {
                child.children[1].attributes.src.value=photos[2].hoverYuz;
                const faHeart = document.querySelector(".kalpThreeYuz");
                faHeart.style.color="#F87171";
                
           }

           if (child.classList.contains("yuzFour")) {
            child.children[1].attributes.src.value=photos[3].hoverYuz;
            const faHeart = document.querySelector(".kalpFourYuz");
            faHeart.style.color="#F87171";
            
            }

            if (child.classList.contains("yuzFive")) {
                child.children[1].attributes.src.value=photos[4].hoverYuz;
                const faHeart = document.querySelector(".kalpFiveYuz");
                faHeart.style.color="#F87171";
                
           }

           if (child.classList.contains("yuzSix")) {
            child.children[1].attributes.src.value=photos[5].hoverYuz;
            const faHeart = document.querySelector(".kalpSixYuz");
            faHeart.style.color="#F87171";
            
            }

            if (child.classList.contains("yuzSeven")) {
                child.children[1].attributes.src.value=photos[6].hoverYuz;
                const faHeart = document.querySelector(".kalpSevenYuz");
                faHeart.style.color="#F87171";
                
            }

            if (child.classList.contains("yuzEight")) {
                child.children[1].attributes.src.value=photos[7].hoverYuz;
                const faHeart = document.querySelector(".kalpEightYuz");
                faHeart.style.color="#F87171";
                
            }
    

            if (child.classList.contains("yuzNine")) {
                child.children[1].attributes.src.value=photos[8].hoverYuz;
                const faHeart = document.querySelector(".kalpNineYuz");
                faHeart.style.color="#F87171";
                
            }
            

            /*********************göz ürünler***********************/

            if (child.classList.contains("gozOne")) {
                child.children[1].attributes.src.value=photos[0].hoverGoz;
                const faHeart = document.querySelector(".kalpOneGoz");
                faHeart.style.color="#F87171";
                
           }

           if (child.classList.contains("gozTwo")) {
            child.children[1].attributes.src.value=photos[1].hoverGoz;
            const faHeart = document.querySelector(".kalpTwoGoz");
            faHeart.style.color="#F87171";
            
            }

            if (child.classList.contains("gozThree")) {
                child.children[1].attributes.src.value=photos[2].hoverGoz;
                const faHeart = document.querySelector(".kalpThreeGoz");
                faHeart.style.color="#F87171";
            }

            if (child.classList.contains("gozFour")) {
                child.children[1].attributes.src.value=photos[3].hoverGoz;
                const faHeart = document.querySelector(".kalpFourGoz");
                faHeart.style.color="#F87171";
            }
            if (child.classList.contains("gozFive")) {
                child.children[1].attributes.src.value=photos[4].hoverGoz;
                const faHeart = document.querySelector(".kalpFiveGoz");
                faHeart.style.color="#F87171";
            }

            if (child.classList.contains("gozSix")) {
                child.children[1].attributes.src.value=photos[5].hoverGoz;
                const faHeart = document.querySelector(".kalpSixGoz");
                faHeart.style.color="#F87171";
            }

            if (child.classList.contains("gozSeven")) {
                child.children[1].attributes.src.value=photos[6].hoverGoz;
                const faHeart = document.querySelector(".kalpSevenGoz");
                faHeart.style.color="#F87171";
            }

            if (child.classList.contains("gozEight")) {
                child.children[1].attributes.src.value=photos[7].hoverGoz;
                const faHeart = document.querySelector(".kalpEightGoz");
                faHeart.style.color="#F87171";
            }

            if (child.classList.contains("gozNine")) {
                child.children[1].attributes.src.value=photos[8].hoverGoz;
                const faHeart = document.querySelector(".kalpNineGoz");
                faHeart.style.color="#F87171";
            }
            if (child.classList.contains("gozTen")) {
                child.children[1].attributes.src.value=photos[9].hoverGoz;
                const faHeart = document.querySelector(".kalpTenGoz");
                faHeart.style.color="#F87171";
            }

            /*********************firsat ürünler***********************/

            if (child.classList.contains("firsatOne")) {
                child.children[1].attributes.src.value=photos[0].hoverFirsat;
                const faHeart = document.querySelector(".kalpOneFirsat");
                faHeart.style.color="#F87171";
                
           }

           if (child.classList.contains("firsatTwo")) {
            child.children[1].attributes.src.value=photos[1].hoverFirsat;
            const faHeart = document.querySelector(".kalpTwoFirsat");
            faHeart.style.color="#F87171";
            
            }
       
          if (child.classList.contains("firsatThree")) {
            child.children[1].attributes.src.value=photos[2].hoverFirsat;
            const faHeart = document.querySelector(".kalpThreeFirsat");
            faHeart.style.color="#F87171";
        
           }
   
           

        })); 
        

        if (child.addEventListener("mouseleave",function(){

            
            if (child.classList.contains("productOne")) {
                
                child.children[1].attributes.src.value=photos[0].path;
                const faHeart = document.querySelector(".kalpOne");
                faHeart.style.color="";
            }

            if (child.classList.contains("productTwo")) {
                
                child.children[1].attributes.src.value=photos[1].path;
                const faHeart = document.querySelector(".kalpTwo");
                faHeart.style.color="";
            }

            if (child.classList.contains("productThree")) {
                
                child.children[1].attributes.src.value=photos[2].path;
                const faHeart = document.querySelector(".kalpThree");
                faHeart.style.color="";
            }
            if (child.classList.contains("productFour")) {
                
                child.children[1].attributes.src.value=photos[3].path;
                const faHeart = document.querySelector(".kalpFour");
                faHeart.style.color="";
            }
            if (child.classList.contains("productFive")) {
                
                child.children[1].attributes.src.value=photos[4].path;
                const faHeart = document.querySelector(".kalpFive");
                faHeart.style.color="";
            }
            if (child.classList.contains("productSix")) {
                
                child.children[1].attributes.src.value=photos[5].path;
                const faHeart = document.querySelector(".kalpSix");
                faHeart.style.color="";
            }
            if (child.classList.contains("productSeven")) {
                
                child.children[1].attributes.src.value=photos[6].path;
                const faHeart = document.querySelector(".kalpSeven");
                faHeart.style.color="";
            }
            if (child.classList.contains("productEight")) {
                
                child.children[1].attributes.src.value=photos[7].path;
                const faHeart = document.querySelector(".kalpEight");
                faHeart.style.color="";
            }
            if (child.classList.contains("productNine")) {
                
                child.children[1].attributes.src.value=photos[8].path;
                const faHeart = document.querySelector(".kalpNine");
                faHeart.style.color="";
            }
            if (child.classList.contains("productTen")) {
                
                child.children[1].attributes.src.value=photos[9].path;
                const faHeart = document.querySelector(".kalpTen");
                faHeart.style.color="";
            }

         
           
                    /*******************yüz ürünleri**********************/

                if (child.classList.contains("yuzOne")) {
                    child.children[1].attributes.src.value=photos[0].pathYuz; 
                    const faHeart = document.querySelector(".kalpOneYuz");
                    faHeart.style.color="";
                }
        
                if (child.classList.contains("yuzTwo")) {
                    child.children[1].attributes.src.value=photos[1].pathYuz; 
                    const faHeart = document.querySelector(".kalpTwoYuz");
                    faHeart.style.color="";   
                }
                if (child.classList.contains("yuzThree")) {
                    child.children[1].attributes.src.value=photos[2].pathYuz;
                    const faHeart = document.querySelector(".kalpThreeYuz");
                    faHeart.style.color="";   
                }
                if (child.classList.contains("yuzFour")) {
                    child.children[1].attributes.src.value=photos[3].pathYuz;
                    const faHeart = document.querySelector(".kalpFourYuz");
                    faHeart.style.color="";   
                }
                if (child.classList.contains("yuzFive")) {
                    child.children[1].attributes.src.value=photos[4].pathYuz;
                    const faHeart = document.querySelector(".kalpFiveYuz");
                    faHeart.style.color="";      
                }
                if (child.classList.contains("yuzSix")) {
                    child.children[1].attributes.src.value=photos[5].pathYuz;
                    const faHeart = document.querySelector(".kalpSixYuz");
                    faHeart.style.color="";      
                }
                if (child.classList.contains("yuzSeven")) {
                    child.children[1].attributes.src.value=photos[6].pathYuz;
                    const faHeart = document.querySelector(".kalpSevenYuz");
                    faHeart.style.color="";      
                }
                if (child.classList.contains("yuzEight")) {
                    child.children[1].attributes.src.value=photos[7].pathYuz;
                    const faHeart = document.querySelector(".kalpEightYuz");
                    faHeart.style.color="";      
                }
                if (child.classList.contains("yuzNine")) {
                    child.children[1].attributes.src.value=photos[8].pathYuz;
                    const faHeart = document.querySelector(".kalpNineYuz");
                    faHeart.style.color="";      
                }
        
                /********************goz urunler************************ */

                if (child.classList.contains("gozOne")) {
                    child.children[1].attributes.src.value=photos[0].pathGoz;
                    const faHeart = document.querySelector(".kalpOneGoz");
                    faHeart.style.color="";
                    
               }
    
               if (child.classList.contains("gozTwo")) {
                   child.children[1].attributes.src.value=photos[1].pathGoz;
                   const faHeart = document.querySelector(".kalpTwoGoz");
                faHeart.style.color="";
                
                }
    
                if (child.classList.contains("gozThree")) {
                    child.children[1].attributes.src.value=photos[2].pathGoz;
                    const faHeart = document.querySelector(".kalpThreeGoz");
                    faHeart.style.color="";
                }
    
                if (child.classList.contains("gozFour")) {
                    child.children[1].attributes.src.value=photos[3].pathGoz;
                    const faHeart = document.querySelector(".kalpFourGoz");
                    faHeart.style.color="";
                }
                if (child.classList.contains("gozFive")) {
                    child.children[1].attributes.src.value=photos[4].pathGoz;
                    const faHeart = document.querySelector(".kalpFiveGoz");
                    faHeart.style.color="";
                }
    
                if (child.classList.contains("gozSix")) {
                    child.children[1].attributes.src.value=photos[5].pathGoz;
                    const faHeart = document.querySelector(".kalpSixGoz");
                    faHeart.style.color="";
                }
    
                if (child.classList.contains("gozSeven")) {
                    child.children[1].attributes.src.value=photos[6].pathGoz;
                    const faHeart = document.querySelector(".kalpSevenGoz");
                    faHeart.style.color="";
                }
    
                if (child.classList.contains("gozEight")) {
                    child.children[1].attributes.src.value=photos[7].pathGoz;
                    const faHeart = document.querySelector(".kalpEightGoz");
                    faHeart.style.color="";
                }
    
                if (child.classList.contains("gozNine")) {
                    child.children[1].attributes.src.value=photos[8].pathGoz;
                    const faHeart = document.querySelector(".kalpNineGoz");
                    faHeart.style.color="";
                }
                
                if (child.classList.contains("gozTen")) {
                    child.children[1].attributes.src.value=photos[9].pathGoz;
                    const faHeart = document.querySelector(".kalpTenGoz");
                    faHeart.style.color="";
                }
    
             /********************Fırsat urunler************************ */


                if (child.classList.contains("firsatOne")) {
                    child.children[1].attributes.src.value=photos[0].pathFirsat;
                    const faHeart = document.querySelector(".kalpOneFirsat");
                    faHeart.style.color="";
                    
               }
    
               if (child.classList.contains("firsatTwo")) {
                child.children[1].attributes.src.value=photos[1].pathFirsat;
                const faHeart = document.querySelector(".kalpTwoFirsat");
                faHeart.style.color="";
                
                }
           
              if (child.classList.contains("firsatThree")) {
                child.children[1].attributes.src.value=photos[2].pathFirsat;
                const faHeart = document.querySelector(".kalpThreeFirsat");
                faHeart.style.color="";
            
               }
       



        })); 
        

    });

}


function moveImage(e){
   if (e.target.className==="ballon-zero ballon") {
        image.src=models[0].link;
        ballonZero.style.backgroundColor="black";
        ballonOne.style.backgroundColor="#fff";
        ballonTwo.style.backgroundColor="#fff";
        ballonThree.style.backgroundColor="#fff";
        ballonFour.style.backgroundColor="#fff";
        ballonFive.style.backgroundColor="#fff";

   }
     
    if (e.target.className==="ballon-one ballon") {
        image.src=models[1].link;
        ballonZero.style.backgroundColor="#fff";
        ballonOne.style.backgroundColor="black";
        ballonTwo.style.backgroundColor="#fff";
        ballonThree.style.backgroundColor="#fff";
        ballonFour.style.backgroundColor="#fff";
        ballonFive.style.backgroundColor="#fff";

    }

    if (e.target.className==="ballon-two ballon") {
        image.src=models[2].link;
        ballonZero.style.backgroundColor="#fff";
        ballonOne.style.backgroundColor="#fff";
        ballonTwo.style.backgroundColor="black";
        ballonThree.style.backgroundColor="#fff";
        ballonFour.style.backgroundColor="#fff";
        ballonFive.style.backgroundColor="#fff";


    }

    if (e.target.className==="ballon-three ballon"){
        image.src=models[3].link;
        ballonZero.style.backgroundColor="#fff";
        ballonOne.style.backgroundColor="#fff";
        ballonTwo.style.backgroundColor="#fff";
        ballonThree.style.backgroundColor="black";
        ballonFour.style.backgroundColor="#fff";
        ballonFive.style.backgroundColor="#fff";

    }
    if (e.target.className==="ballon-four ballon"){
        image.src=models[4].link;
        ballonZero.style.backgroundColor="#fff";
        ballonOne.style.backgroundColor="#fff";
        ballonTwo.style.backgroundColor="#fff";
        ballonThree.style.backgroundColor="#fff";
        ballonFour.style.backgroundColor="black";
        ballonFive.style.backgroundColor="#fff";

        
    }

    if (e.target.className==="ballon-five ballon") {
        image.src=models[5].link;
        ballonZero.style.backgroundColor="#fff";
        ballonOne.style.backgroundColor="#fff";
        ballonTwo.style.backgroundColor="#fff";
        ballonThree.style.backgroundColor="#fff";
        ballonFour.style.backgroundColor="#fff";
        ballonFive.style.backgroundColor="black";

    }
    clearInterval(interval);
   e.preventDefault();

}

function startSlider(){
    image.src=models[0].link;

    let curImg=0;
    interval =  setInterval(function() {
        
        if (curImg==0) {
        image.src=models[curImg].link;
        
        ballonZero.style.backgroundColor="black";
        ballonOne.style.backgroundColor="#fff";
        ballonTwo.style.backgroundColor="#fff";
        ballonThree.style.backgroundColor="#fff";
        ballonFour.style.backgroundColor="#fff";
        ballonFive.style.backgroundColor="#fff";
       
        }
        
        if (curImg==1) {

        image.src=models[curImg].link;
        ballonZero.style.backgroundColor="#fff";
        ballonOne.style.backgroundColor="black";
        ballonTwo.style.backgroundColor="#fff";
        ballonThree.style.backgroundColor="#fff";
        ballonFour.style.backgroundColor="#fff";
        ballonFive.style.backgroundColor="#fff";
       
        }
        if (curImg==2) {
            image.src=models[curImg].link;
            ballonZero.style.backgroundColor="#fff";
            ballonOne.style.backgroundColor="#fff";
            ballonTwo.style.backgroundColor="black";
            ballonThree.style.backgroundColor="#fff";
            ballonFour.style.backgroundColor="#fff";
            ballonFive.style.backgroundColor="#fff";
            
        }
        if (curImg==3) {
            image.src=models[curImg].link;
            ballonZero.style.backgroundColor="#fff";
            ballonOne.style.backgroundColor="#fff";
            ballonTwo.style.backgroundColor="#fff";
            ballonThree.style.backgroundColor="black";
            ballonFour.style.backgroundColor="#fff";
            ballonFive.style.backgroundColor="#fff";
            
        }
        if (curImg==4) {
            image.src=models[curImg].link;
            ballonZero.style.backgroundColor="#fff";
            ballonOne.style.backgroundColor="#fff";
            ballonTwo.style.backgroundColor="#fff";
            ballonThree.style.backgroundColor="#fff";
            ballonFour.style.backgroundColor="black";
            ballonFive.style.backgroundColor="#fff";
            
        }

        if (curImg==5) {
            image.src=models[curImg].link;
            ballonZero.style.backgroundColor="#fff";
            ballonOne.style.backgroundColor="#fff";
            ballonTwo.style.backgroundColor="#fff";
            ballonThree.style.backgroundColor="#fff";
            ballonFour.style.backgroundColor="#fff";
            ballonFive.style.backgroundColor="black";
            curImg=-1;
        }
        curImg++;
       
       
    },2000);


    


}
   
function xYüz(){

    const div = document.createElement("div");
    div.className="face-components";
    div.innerHTML=`<div class="face-components">
    
    <ul class="face-flex"> 
        <div class="face-one menu">
            <li>Aydınlatıcı</li>
            <li>BB Krem</li>
        </div>
        <div class="face-two menu">
            <li>Makyaj Bazı</li>
            <li>Kontör Paleti</li>
        </div>
        <div class="face-three menu">
            <li>Fondöten</li>
            <li>Pudra</li>
        </div>
        <div class="face-four menu">
            <li>Allık</li>
            <li>Kapatıcı</li>
        </div>
       
    </ul> 
    
</div>`
    div.style.position="fixed";
    div.style.backgroundColor="#fff";
    navbar.appendChild(div);
    body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img" || e.target.className=="flex-nav") {
    const faceComponents = document.querySelector(".face-components");
    faceComponents.style.display="none";
   try {
    faceComponents.remove();
   } catch (error) {
       console.log("");
   }
    
   }

});
    
}

function xGöz(){
    const div = document.createElement("div");
    div.className="face-components";
    div.innerHTML=`<div class="face-components">
    <ul class="face-flex"> 
        <div class="face-one menu">
            <li>Mascara</li>
        </div>
        <div class="face-two menu">
            <li>Eyeliner</li>
            
        </div>
        <div class="face-three menu">
            <li>Göz Farı</li>
            
        </div>
        <div class="face-four menu">
            <li>Göz kalemi</li>
            
        </div>
        
    </ul> 
</div>`

div.style.position="fixed";
div.style.backgroundColor="#fff";
navbar.appendChild(div);
body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img" || e.target.className=="flex-nav") {
    const faceComponents = document.querySelector(".face-components");
    faceComponents.style.display="none";
   try {
    faceComponents.remove();
   } catch (error) {
       console.log("");
   }
    
   }

});


}


function xDudak(){
    const div = document.createElement("div");
    div.className="face-components";
    div.innerHTML=`<div class="face-components">
    <ul class="face-flex"> 
        <div class="face-one menu">
            <li>Ruj</li>
        </div>
        <div class="face-two menu">
            <li>Dudak Parlatıcı</li>
            
        </div>
        <div class="face-three menu">
            <li>Dudak Bakım</li>
            
        </div>
        <div class="face-four menu">
            <li>Dudak Kalemi</li>
            
        </div>
        
    </ul> 
</div>`

div.style.position="fixed";
div.style.backgroundColor="#fff";
navbar.appendChild(div);
body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img" || e.target.className=="flex-nav") {
    const faceComponents = document.querySelector(".face-components");
    faceComponents.style.display="none";
   try {
    faceComponents.remove();
   } catch (error) {
       console.log("");
   }
    
   }

});
}

function xOje(){
    const div = document.createElement("div");
    div.className="face-components";
    div.innerHTML=`<div class="face-components">
    <ul class="face-flex"> 
        <div class="face-one menu">
            <li>Parlatıcı</li>
        </div>
        <div class="face-two menu">
            <li>Manikür Seti</li> 
        </div>
        <div class="face-three menu">
            <li>Tırnak Bakım Fırçası</li> 
        </div>
        

        
    </ul> 
</div>`

div.style.position="fixed";
div.style.backgroundColor="#fff";
navbar.appendChild(div);
body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img" || e.target.className=="flex-nav") {
    const faceComponents = document.querySelector(".face-components");
    faceComponents.style.display="none";
   try {
    faceComponents.remove();
   } catch (error) {
       console.log("");
   }
    
   }

});

}

function xKaş(){
    const div = document.createElement("div");
    div.className="face-components";
    div.innerHTML=`<div class="face-components">
    <ul class="face-flex"> 
        <div class="face-one menu">
            <li>Kaş Kalemi</li>
        </div>
        <div class="face-two menu">
            <li>Kaş Kiti</li> 
        </div>
       
        
    </ul> 
</div>`

div.style.position="fixed";
div.style.backgroundColor="#fff";
navbar.appendChild(div);
body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img" || e.target.className=="flex-nav") {
    const faceComponents = document.querySelector(".face-components");
    faceComponents.style.display="none";
   try {
    faceComponents.remove();
   } catch (error) {
       console.log("");
   }
    
   }

});

}

