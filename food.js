let display = document.querySelector("#foods");

let request = new XMLHttpRequest();
request.addEventListener("load", handleLoad);
request.addEventListener("error", handleError);

request.open("GET", "food.json");
request.send();

function handleLoad(event){
    let foods = (JSON.parse(this.responseText)).dog_brands;
    displayFoods(foods);    
}

function handleError(event){
    console.log("error", event);
}

function displayFoods(foodData){
    foodData.forEach((brand)=>{
        console.log("brand", brand);
        display.innerHTML += `  <div class="card">
                                <h2>${brand.name}</h2>
                                <h4> type: ${brand.types[0].type}</h4>
                                <p>sizes for ${brand.types[0].type}:</p>
                                <li> ${brand.types[0].volumes[0].name}: ${brand.types[0].volumes[0].price}</li> 
                                <li> ${brand.types[0].volumes[1].name}: ${brand.types[0].volumes[1].price}</li> 
                                </div>`;

    });
}