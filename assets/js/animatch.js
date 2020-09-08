var gameArray = [];
var playerArray = [];
var animalArray = [
    "assets/images/cat.jpg",
    "assets/images/dog.jpg",
    "assets/images/fox.jpg",
    "assets/images/goat.jpg",
  ]; // image array

function selectImage() {

  var randomNum = Math.floor(Math.random() * animalArray.length); // random no. generator
  var randomPic = animalArray[randomNum]; // take pic from image array based on random no.

  gameArray.push(randomNum);
  $(".button").attr("disabled", true).css("background-color", "red");
  $(".image-box").html(
    `<img class="temp-image align-items-center justify-content-center" src="${randomPic}"/>`
  ); // generate new element for image
  $(".temp-image").css({
    width: "350px",
    height: "350px",
    "object-fit": "cover",
  }); // change css to fit pic inside image box

  // timer
  setTimeout(() => {
    $(".temp-image").remove(); // remove img element
    $(".button").attr("disabled", false).css("background-color", "yellow");
  }, 3000);
  

};

// button click registers
function cat() {
  playerArray.push(0);
}

function dog() {
  playerArray.push(1);
}

function fox() {
  playerArray.push(2);
}

function goat() {
  playerArray.push(3);
}
// check game array matches player array
function checkArrays() {
  if (gameArray.length !== playerArray.length) return false;
  for (var i = 0; i < gameArray.length; ++i) {
    if (gameArray[i] !== playerArray[i]) return false;
  }

  return true;
}

function nextLevel() {
    if (checkArrays() !== true) {
        gameArray = [];
        alert ("Sorry, better luck next time!");
    } else {
        
        alert ("Welcome to the next level!");
    }
};

