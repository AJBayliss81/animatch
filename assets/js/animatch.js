var gameArray = []; // array to push randomly generated numbers to
var playerArray = []; // array to store player inputs and to match with gameArray
var animalArray = [
  "assets/images/cat.jpg",
  "assets/images/dog.jpg",
  "assets/images/fox.jpg",
  "assets/images/goat.jpg",
]; // image array

var levelCounter = 0;

function selectImage() {
  var randomNum = Math.floor(Math.random() * animalArray.length); // random no. generator
  gameArray.push(randomNum);

  var randomPic = animalArray[randomNum]; // take pic from image array based on random no.

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
  }, 3000);
}

function imageReel() {
  if (levelCounter == 0) {
    selectImage();
    levelCounter++;
    $("#start").attr("disabled", true).css("background-color", "red");
    setTimeout(() => {
      $(".button").attr("disabled", false).css("background-color", "yellow");
    }, 3000);
  } else {
    gameArray.splice(0);
    levelCounter++;
    function recall(func, num, delay) {
      if (!num) return;
      func();
      setTimeout(function () {
        recall(func, num - 1, delay);
      }, delay);
    }
    recall(selectImage, levelCounter, 3500);
    $("#start").attr("disabled", true).css("background-color", "red");
    setTimeout(() => {
      $(".button").attr("disabled", false).css("background-color", "yellow");
    }, 3000 * levelCounter);
  }
  
}

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
  $("#start").attr("disabled", false).css("background-color", "yellow");

  return true;
}

// check the 2 arrays match to then progress to next level
function nextLevel() {
  if (checkArrays() !== true) {
    playerArray.splice(0);
    alert("Sorry, better luck next time!");
    $(".button").attr("disabled", true).css("background-color", "red");
  } else {
    playerArray.splice(0);
    alert("Welcome to the next level!");
    $(".button").attr("disabled", true).css("background-color", "red");
  }
}
