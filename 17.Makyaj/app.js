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

image.src=models[0].link;
ballonZero.style.backgroundColor="black";

allEvents();

function allEvents(){
    startSlider();
    yüz.addEventListener("mouseenter",xYüz);
    // yüz.addEventListener("mouseleave",xYüzClose);
    göz.addEventListener("mouseenter",xGöz);
    // göz.addEventListener("mouseout",xGözClose);
    dudak.addEventListener("mouseenter",xDudak);
    // dudak.addEventListener("mouseout",xDudakClose);
    kaş.addEventListener("mouseenter",xKaş);
    // kaş.addEventListener("mouseout",xKaşClose);
    oje.addEventListener("mouseenter",xOje);
    slider.addEventListener("click",moveImage);
   

    divBallons.addEventListener("mouseenter",function(){
        clearInterval(interval);
    });    
    divBallons.addEventListener("mouseleave",function(){
        startSlider();
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
       
       
    },4000);


    


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
    // body.insertBefore(div,slider);
    body.addEventListener("mousemove",function(e){
       if (e.target.className=="slider-img") {
        const faceComponents = document.querySelector(".face-components");
        // faceComponents.style.display="none";
       try {
        faceComponents.remove();
       } catch (error) {
           console.log("");
       }
        
       }

    });
}


// function xYüzClose(){
//     const sx = document.querySelector(".face-components");
//     sx.remove();

// }




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
// body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img") {
    const faceComponents = document.querySelector(".face-components");
    // faceComponents.style.display="none";
   try {
    faceComponents.remove();
   } catch (error) {
       console.log("");
   }
    
   }

});


}


// function xGözClose(){
//     const sx = document.querySelector(".face-components");
//     sx.remove();
// }


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
// body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img") {
    const faceComponents = document.querySelector(".face-components");
    // faceComponents.style.display="none";
   try {
    faceComponents.remove();
   } catch (error) {
       console.log("");
   }
    
   }

});
}

// function xDudakClose(){
//     const sx = document.querySelector(".face-components");
//     sx.remove();
// }

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
// body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img" || e.target.className=="flex-nav") {
    const faceComponents = document.querySelector(".face-components");
    // faceComponents.style.display="none";
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
// body.insertBefore(div,slider);
body.addEventListener("mousemove",function(e){
   if (e.target.className=="slider-img") {
    const faceComponents = document.querySelector(".face-components");
    // faceComponents.style.display="none";
   try {
    faceComponents.remove();
   } catch (error) {
       console.log("");
   }
    
   }

});
}

// function xKaşClose(){
//     const sx = document.querySelector(".face-components");
//     sx.remove();
// }


