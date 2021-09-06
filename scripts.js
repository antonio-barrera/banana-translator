var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?text=" + text;
}

function errorHandler(error){
    console.log("error ocurred", error);
    alert("Something wrong with the server");
}

function clickEvent(){
    var textinput = inputText.value;
    fetch(getTranslationURL(textinput))
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEvent);