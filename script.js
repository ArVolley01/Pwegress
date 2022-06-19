const h2 = document.createElement("h2");
h2.textContent = "this text brought to you by Javascript";
document.querySelector("body").appendChild(h2);

const leftbox = document.createTextNode("Left");
document.getElementById("left-box").append(leftbox);

leftbox.textContent = "test";