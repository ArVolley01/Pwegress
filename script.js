const fs = require('fs');

const h2 = document.createElement("h2");
h2.textContent = "this text brought to you by Javascript";
document.querySelector("body").appendChild(h2);

function addListeners () {
    function postMessage() {

        alert("here");
    
        const inputform = document.getElementById("input");
    
        const message = inputform.elements[0];
    
        fs.appendFile("./Data.txt", message.textContent);
    }
    
    const button = document.getElementById("submit button");
    
    button.addEventListener('click', postMessage);
}

addListeners();

