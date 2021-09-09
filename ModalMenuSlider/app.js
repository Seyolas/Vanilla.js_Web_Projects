
const fas = document.querySelector(".fas");
const body = document.querySelector("body");

const button = document.querySelector(".button");



AllEvents = ()=> {

button.addEventListener("click",(e)=>{
    body.style.backgroundColor="rgba(0, 0, 0, 0.5)";
    e.preventDefault();
});

body.addEventListener("click",(e)=>{

      e.target.className.includes("button") ? console.log("keke") :body.style.backgroundColor="";

    
   

})





















// body.addEventListener("click",(e)=>{

// //   if (e.target.className.includes("fas")) {
// //       console.log("keje");
      
// //   }
//   e.target.className.includes("fas") ? console.log("keje") : console.log("31");

// })





}




AllEvents();
