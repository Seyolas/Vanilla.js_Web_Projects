
class Exchange{



 async calculate(amount,base,ikinci){
    
    let x = parseInt(amount);
    const response = await fetch(`https://v6.exchangerate-api.com/v6/9904f3983f5126a939f56d4b/latest/${base}`);

    const data = await response.json();
    
    // console.log(data.conversion_rates[ikinci]);

    console.log(data);
    return  x*data.conversion_rates[ikinci];

    
}




}








