


async function getapi(){


    const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
    const data = await api.json();
   
//    return {data,dataTwo};
    console.log(data.meals[4]);
    

}
getapi();

getapitwo();
async function getapitwo(){
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767");
    const data = await api.json();
   
//    return {data,dataTwo};
    console.log(data.meals[0].strInstructions);
    
}
// getapi().then(function(response.data){
//     console.log(response);
// })
