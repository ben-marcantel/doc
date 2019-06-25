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

function cardHtml(roll,arrayType){
    return `<button class = "card" data-type = "${arrayType[roll].type}" data-roll = "${roll}">
                <div class = "nameTitle">${arrayType[roll].name}</div>
            </button>`
    ;
}

function buildDataKeyString(roll,type){
    let dataKey = `${type}s`;
    let dataArray = jsonData[dataKey];
    let meaning = dataArray[roll].meaning;
    return meaning;
}

function meaningText(roll,type){
    let meaningText = buildDataKeyString(roll,type);
    return `<div class="meaningText" data-type = "${type}s" data-roll = "${roll}">${meaningText}</div>`;
}

function characters(data){
    let charactersArray = data.characters;
    let roll = rollDice(27);
    return  $("#cardHolder").append(cardHtml(roll,charactersArray));
}

function tools(data){
    let toolsArray = data.tools;
    let roll = rollDice(46);
    return  $("#cardHolder").append(cardHtml(roll,toolsArray));
}

function places(data){
    let placesArray = data.places;
    let roll = rollDice(36);
    return  $("#cardHolder").append(cardHtml(roll,placesArray));
}

function resetDraw(){
    $(".card").remove();
    $("#meaning").hide();
    $(".meaningText").remove();
}

function resetMeaningText(){
    $(".meaningText").remove();
    $("#meaning").show();
}

$("#draw").on("click", function(){
    resetDraw();
    writeToScreen(jsonData);
})

$("body").on("click", '.card',function(){
    let roll = $(this).data("roll");
    let type = $(this).data("type");
    resetMeaningText();
    return  $("#meaning").append(meaningText(roll,type));
})