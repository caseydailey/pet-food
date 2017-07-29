let dogsDiv = document.querySelector("#dogFoods");


let request2 = new XMLHttpRequest();
request2.addEventListener("load", handleLoad);
request2.addEventListener("error", handleError);

request2.open("GET", "dogs.json");
request2.send();

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
        dogsDiv.innerHTML += `  <div class="card">
                                <h2>${brand.name}</h2>
                                <h4> type: ${brand.types[0].type}</h4>
                                <p>sizes for ${brand.types[0].type}:</p>
                                <li> ${brand.types[0].volumes[0].name}: ${brand.types[0].volumes[0].price}</li> 
                                <li> ${brand.types[0].volumes[1].name}: ${brand.types[0].volumes[1].price}</li> 
                                </div>`;

    });
}