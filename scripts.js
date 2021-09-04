var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");

function clickEvent(){
    console.log(inputText.value);

}

btnTranslate.addEventListener("click", clickEvent);