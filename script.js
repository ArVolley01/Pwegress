
const h2 = document.createElement("h2");
h2.textContent = "This text brought to you by Javascript";
document.querySelector("body").appendChild(h2);

function addListeners () {
    function postMessage() {
        const message = document.getElementById("input");

        const line = document.createElement("p");
        line.textContent = message.value;
        
        document.getElementById("g3").append(line);
    }
    
    const button = document.getElementById("submit button");
    
    button.addEventListener('click', postMessage);
}

addListeners();

