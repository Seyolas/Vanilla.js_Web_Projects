const miktarInput = document.querySelector(".miktar");
const firsOption = document.querySelector(".select-first");
const SecondOption = document.querySelector(".select-second");
const titleOne = document.querySelector(".title-one");
const titleTwo = document.querySelector(".title-two");
const result = document.querySelector(".sonuc");


// titleOne.textContent=firsOption.options[firsOption.selectedIndex].text;
// titleTwo.textContent=SecondOption.options[SecondOption.selectedIndex].text;

titleOne.style.fontWeight="bolder";
titleTwo.style.fontWeight="bolder";

const ex1 = new Exchange();



firsOption.addEventListener("change",ayarla);
SecondOption.addEventListener("change",ayarla);
miktarInput.addEventListener("input",ayarla);


 function ayarla(){
    titleOne.textContent=firsOption.options[firsOption.selectedIndex].text;
    titleTwo.textContent=SecondOption.options[SecondOption.selectedIndex].text;
    if (titleOne.textContent === titleTwo.textContent) {
        titleOne.style.color="red";
        titleTwo.style.color="red";
        
    }
    else {
        titleOne.style.color="black";
        titleTwo.style.color ="black";
    }

    if (miktarInput.value!="") {
        ex1.calculate(miktarInput.value,firsOption.options[firsOption.selectedIndex].text,SecondOption.options[SecondOption.selectedIndex].text).then(function(response){
            result.value=response;
        });
    }
    
    


}


ayarla();