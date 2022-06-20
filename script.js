
const h2 = document.createElement("h2");
h2.textContent = "This text brought to you by Javascript";
document.querySelector("body").appendChild(h2);

function addListeners () {
    function postMessage() {
        message = document.getElementById("input");

        document.getElementById("data").append(message.value + "\n");
    }
    
    const button = document.getElementById("submit button");
    
    button.addEventListener('click', postMessage);
}

addListeners();

