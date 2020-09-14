/*----- Storage -----*/

if (typeof (Storage) !== "undefined") {
    $("#1st").text(localStorage.first);
    $("#2nd").text(localStorage.second);
    $("#3rd").text(localStorage.third);
    $("#4th").text(localStorage.fourth);
    $("#5th").text(localStorage.fifth);
} else {
    alert("<h5>Unable to save scores with current browser</h5>");
}

/*----- Global variables -----*/

let gameArray = []; // array to push randomly generated numbers to
let playerArray = []; // array to store player inputs and to match with gameArray
let animalArray = [
  "assets/images/cat.jpg",
  "assets/images/dog.jpg",
  "assets/images/fox.jpg",
  "assets/images/goat.jpg",
]; // image array

let levelCounter = 0;
let points = 0;

function selectImage() {
  var randomNum = Math.floor(Math.random() * animalArray.length); // random no. generator
  gameArray.push(randomNum);

  var randomPic = animalArray[randomNum]; // take pic from image array based on random no.

  $(".image-box").html(
    `<img class="temp-image align-items-center justify-content-center" src="${randomPic}"/>`
  ); // generate new element for image
  $(".temp-image").css({
    width: "500px",
    height: "500px",
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
    $("#start").attr("disabled", false).css("background-color", "yellow");
    levelCounter = 0;
  } else {
    playerArray.splice(0);
    alert("Welcome to the next level!");
    $(".button").attr("disabled", true).css("background-color", "red");
    points += (levelCounter * gameArray.length * 10);
    console.log(points);
  }
}

// function updateScoreboard() {
//     if(points > 0) {
//         if (points > localStorage.first || localStorage.first == undefined)
//         $("#1st").text("<td>${points}</td>");
//     }
// }