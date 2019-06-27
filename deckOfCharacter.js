
//data
const url = "./deck.json";
let jsonData;
const jsonResults = function(data){
    jsonData = data;
};

$.ajax({
    dataType: "json",
    url: url,
    success:function(data){
      return  JSON.stringify(data); 
    }
  }).done(data=> jsonResults(data));




function buildDataKeyString(roll,type){
    let dataKey = `${type}s`;
    let dataArray = jsonData[dataKey];
    let dataGroup = dataArray[roll];
    return dataGroup;
}

function rollDice(num){
    return Math.floor(Math.random() * (num))+1;  
}

function meaningText(roll,type){
    let dataGroup = buildDataKeyString(roll,type);
    let meaning = dataGroup.meaning;
    let name = dataGroup.name;
return `<div class="meaningText" data-type = "${type}s" data-roll = "${roll}">${type}: ${name}<p>${meaning}</p></div>`;
}

function resetDraw(){

}

function resetMeaningText(){
    $(".meaningText").remove();
    $("#meaning").show();
}

function lookUpPatternData(pattern){
    $("#viewAttachment").empty();

    switch(pattern){
        case "basicRow": $("#viewAttachment").append( `  
            <div id="cardHolder">
                <div class="row">
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button>  
                </div>
            </div>`);

        break;

        case "basicGrid": $("#viewAttachment").append(`    
            <div id="cardHolder">
                <div class="row">
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button> 
                </div>
                <div class="row">
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button> 
                </div>
                <div class="row">
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button> 
                </div>
            </div>`)
        break;

        case "jury":$("#viewAttachment").append(`
        <div id="cardHolder">
            <div class="row">
                <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                <button class = "card" data-type ="character"  data-roll = "" id=""></button> 
                <button class = "card" data-type ="character"  data-roll = "" id=""></button> 

            </div>
            <div class="line"></div>
            <div class="row">
                <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                <button class = "card" data-type ="place"  data-roll = "" id=""></button>
            </div>
        </div>`);
        break;

        case "squareOfLife":$("#viewAttachment").append(`

            <div class="row">
                    <button class = "card" data-type = "character"  data-roll = "" id=""></button>
                    <button class = "card" data-type = "tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type = "place"  data-roll = "" id=""></button>
            </div>
            <div class="row" style="justify-content:space-evenly">
            
            <div class="col">
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
            </div>
            
            <div class="col">
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button>
            </div>
            </div>
            <div class="row">
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button>
            </div>`);
        break;

        case "oneTwoPunch":$("#viewAttachment").append(`
            <div id="cardHolder">
                <div class="row">
                    <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
                </div>
   
            </div>`);
        break;

        case "iAmWhole":$("#viewAttachment").append(`
            <div class="row" style="justify-content: center">
                <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
            </div>
            <div class="row"  style="justify-content: space-evenly">
                <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
                <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
            </div>
            <div class="row"  style="justify-content: space-evenly">
                <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
                <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
            </div>
            <div class="row"  style="justify-content: center">
                <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
            </div>`);
        break;

        case "crossroads":$("#viewAttachment").append(`
            <div id="cardHolder">
                <div class="row">
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button> 
                </div>
                <div class="row">
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button> 
                </div>
                <div class="row">
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button> 
                </div>
            </div>`);
        break;

        case "cycle":$("#viewAttachment").append(`
            <div id="cardHolder">
                <div class="row" style="justify-content: space-evenly">
                    <button class = "card" data-type ="place"  data-roll = "" id="" data-order="6"></button>
                    <button class = "card" data-type ="character"  data-roll = "" id="" data-order="1"></button>
                </div>
                <div class="row"  style="justify-content: space-around">
                    <button class = "card" data-type ="tool"  data-roll = "" id="5"></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id="2"></button>
                </div>
                <div class="row" style="justify-content: space-evenly">
                    <button class = "card" data-type ="character"  data-roll = "" id="4"></button>
                    <button class = "card" data-type ="place"  data-roll = "" id="3"></button>
                </div>
            </div>`);
        break;

        case "backupCard":  $("#viewAttachment").append(`
                <div id="cardHolder">
                    <div class="row">
                        <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
                     </div>
                    <div class="row">
                        <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
                        <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button>
                        <button class = "card" data-type ="${randomCategory()}"  data-roll = "" id=""></button> 
                    </div>
                </div>`);
        break;



        default:$("#viewAttachment").append( `   
            <div id="cardHolder">
                <div class="row">
                    <button class = "card" data-type ="character"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="tool"  data-roll = "" id=""></button>
                    <button class = "card" data-type ="place"  data-roll = "" id=""></button>  
                </div>
            </div>`)
    }
}

//click events
$("[data-formName]").on("click",function(){
    $("[data-formName]").removeClass( "activePattern" );
    $(this).addClass("activePattern");
    let pattern = $(this).data("formname");
    lookUpPatternData(pattern)
})

function currentPattern(){
   let pattern;
   $("[data-formName]").each(function(){
        if($(this).hasClass('activePattern')){
            pattern = $(this).data('formname')
        }
    })
    return pattern;
}


function addText(type,num,array){
    $(array).each(function(){
        let roll = rollDice(num);
        $(this).text(jsonData[`${type}s`][roll].name).data("roll",roll);
    })
}

function randomCategory(){
    let array = ["character","tool","place"];
   return array[rollDice(3)-1];
}

function renderCard(type,array){
    numOfCards = type.length
    console.log(type)
    switch(type){
        case "character": addText(type,27,array);
        break; 
        case "tool": addText(type,46,array);
        break; 
        case "place": addText(type,36,array);
        break;
        default: randomCategory();
    }
}


function drawCards(){

    let characters = $("[data-type = 'character']");
    let tools = $("[data-type ='tool']");
    let places = $("[data-type = 'place']");
    
    let typeArray = [characters,tools,places];
    $(typeArray).each(function(){
        let array = this;
        $(this).each(function(){
            renderCard($(this).data("type"), array);
        })
    })
}



$("#menuDraw").on("click", function(){
    resetMeaningText()
    $(".menu").removeClass("activeMenu");
    $(this).addClass("activeMenu");
    $('#viewAttachment').show();
    $('.formationMenu').hide();
    drawCards();
});

$("#menuFormation").on("click", function(){
    $('.card').text('');
    resetMeaningText()
    $(".menu").removeClass("activeMenu");
    $(this).addClass("activeMenu");
    $('.formationMenu').show();
})

$("body").on("click", '.card',function(){
    let roll = $(this).data("roll");
    let type = $(this).data("type");
    resetMeaningText();
    return  $("#meaning").append(meaningText(roll,type));
})

$("#meaning").on("click",function(){
    $("#meaning").hide();
})