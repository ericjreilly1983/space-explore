window.onload = function(){

var panels = document.getElementsByClassName('body-list-item');
for(var i = 0; i < panels.length; i++){
var buttonContainer = document.createElement('div');
buttonContainer.classList = "body-list-button";
var button = document.createElement('button');
button.innerHTML = "Read More";
panels[i].appendChild(buttonContainer);
buttonContainer.appendChild(button);
}

}