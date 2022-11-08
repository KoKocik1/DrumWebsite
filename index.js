
var buttons=document.querySelectorAll(".drum");

buttons.forEach(btn => {
    btn.addEventListener('click', function(){ 
        playMusic(btn.innerHTML);
        animationButton(btn.innerHTML);
    });
 });

 document.addEventListener('keydown', (event) => {
    var name = event.key;
    playMusic(name);
    animationButton(name);
  }, false);

async function playMusic(letter) {

    switch(letter){
        case "w":
            new Audio("sounds/tom-4.mp3").play();
        break;
        case "a":
            new Audio("sounds/tom-3.mp3").play();
        break;
        case "s":
            new Audio("sounds/tom-2.mp3").play();
        break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
        break;
        case "j":
            new Audio("sounds/kick-bass.mp3").play();
        break;
        case "k":
            new Audio("sounds/snare.mp3").play();
        break;
        case "l":
            new Audio("sounds/crash.mp3").play();
        break;
    };
}

function animationButton(letter){

    document.querySelector("."+letter).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+letter).classList.remove("pressed");
    },200);
}