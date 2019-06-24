const url = "./deck.json";
let jsonData;
const jsonResults = function(data){
    jsonData = data;
    writeToScreen(data)
};

$.ajax({
    dataType: "json",
    url: url,
    success:function(data){
      return  JSON.stringify(data); 
    }
  }).done(data=> jsonResults(data));


function writeToScreen(data){
    characters(data);
    tools(data);
    places(data);
}

function rollDice(num){
    return Math.floor(Math.random() * (num))+1;  
}

function characters(data){
    let charactersArray = data.characters;
    let roll = rollDice(27);
    return  $("#cardHolder").append(`<div class="card"><div class="nameTitle">${charactersArray[roll].name}</div><p>${charactersArray[roll].meaning}</p></div>`)
}

function tools(data){
    let toolsArray = data.tools;
    let roll = rollDice(47);
    return  $("#cardHolder").append(`<div class="card"><div class="nameTitle">${toolsArray[roll].name}</div><p>${toolsArray[roll].meaning}</p></div>`)
}

function places(data){
    let placesArray = data.places;
    let roll = rollDice(37);
    return  $("#cardHolder").append(`<div class="card"><div class="nameTitle">${placesArray[roll].name}</div><p>${placesArray[roll].meaning}</p></div>`)
}

$("#draw").on("click", function(){
    $(".card").remove();
    writeToScreen(jsonData);
})