//assiging audio variable for global use
var audio = new Audio("./sounds/crash.mp3");

// Function to check the key values
function makeSound(val) {
  switch (val) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
  }
}
//function to produce sound on mouse click event
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//fuction to produce sound on key board event
document.addEventListener("keypress", event => {
  makeSound(event.key);
  buttonAnimation(event.key);
});
// ON click animation added
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
