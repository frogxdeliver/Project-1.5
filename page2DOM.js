'use strict';

let clickerText = document.getElementById("BtnTxt");
let clickerBtn = document.getElementById("clickableBtn");

//clickerText.innerText = "";

let counter = 0;
clickerBtn.addEventListener("click", () =>{
    counter = counter + 1;
    clickerText.innerText = `Button clicked: ${counter} times`;
});