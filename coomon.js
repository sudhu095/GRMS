document.addEventListener("keydown", function(event){

if(event.key === "Enter"){

let button =
document.querySelector("button");

if(button){

event.preventDefault();

button.click();

}

}

});