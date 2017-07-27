let request = new XMLHttpRequest();
request.addEventListener("load", handleLoad);
request.addEventListener("error", handleError);

request.open("GET", "food.json");
request.send();

function handleLoad(event){
    let foods = JSON.parse(this.responseText);
    console.log("foods", foods);
}

function handleError(event){
    console.log("error", event);
}