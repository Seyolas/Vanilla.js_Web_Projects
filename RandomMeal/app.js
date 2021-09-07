const button = document.querySelector(".button");
const header = document.querySelector("#header");
const container = document.querySelector(".container");

const mx = document.querySelector(".mx");


allevents();


async function getapi(){
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await api.json();
    return data.meals[0];

}


function allevents(){
    button.addEventListener("click",(e)=>{

    let IngredientMeasure=[];
    
       getapi().then((response)=>{
            const div = document.createElement("div");
               
        for(let i =1 ; i<=20; i++){

            if ((response[`strIngredient${i}`])) {

            IngredientMeasure.push(`${response[`strIngredient${i}`]} - ${response[`strMeasure${i}`]}`);
                    
             }
                else
                    break;

                }
                    
                console.log(response);
                const inner=`<div class="content">
        
        
            <div class="food-details">
                <div class="malzemeler">
                    <img class="photo" src="${response.strMealThumb}" alt="">
                    <p>Category:${response.strCategory}</p>
                    <p>Area:${response.strArea}</p>
                    ${response.strTags ? `<p>Tags:${response.strTags.split(',').join(', ')}</p>` : ''}
                    <h3>Ingredients:</h3>
                    <ul>
                    ${IngredientMeasure.map(i => `<li>${i}</li>`).join("")}
                    </ul>
        
                   
        
                </div>
                
                <div class="min-area">
                    <h3>${response.strMeal}</h3>
                    <p>${response.strInstructions}</p>
        
                </div>
        
            </div>
        
            <h3>Video Recipe</h3>
            <div class="video-recip">   
                <iframe width="900" height="400" src="https://www.youtube.com/embed/${response.strYoutube.slice(-11)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           
        </div>`;
        
        
        mx.innerHTML=inner;
        
        })
       
    
        e.preventDefault();
        
    
    })






}



