//Detecting Button Press
var num = document.querySelectorAll(".drum").length;

for (var i = 0; i < num; i++) {
    //mouse click
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML; 

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    }//end func
    );
}//end loop


// Detecting keybord press
document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);

}//end func
);

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);

    }
}
        

function buttonAnimation(currentKey) { //change color of the key that press

    var activeButton = document.querySelector("." + currentKey); //.k

    activeButton.classList.add("pressed"); // add class  press from css change color to grey

    setTimeout(function () { //go back to original color
        activeButton.classList.remove("pressed"); 
     
    }, 100 ); //time that stay grey 100sc
}

    






