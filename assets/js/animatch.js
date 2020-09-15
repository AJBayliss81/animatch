/*----- Storage -----*/



/*----- Global variables -----*/

let gameArray = []; // array to push randomly generated numbers to
let playerArray = []; // array to store player inputs and to match with gameArray
let animalArray = [
  "assets/images/cat.jpg",
  "assets/images/dog.jpg",
  "assets/images/fox.jpg",
  "assets/images/goat.jpg",
]; // image array

let animalToNumberMapper = {
    "cat": 0,
    "dog": 1,
    "fox": 2,
    "goat": 3,
}

let timer;
let levelCounter = 0;
let points = 0;

/*----- Texillate -----*/

$(function() {
$("#title").textillate({
    
    in: {
        effect: "rollIn",
        delay: 150,
        delayScale: 2.0,
        shuffle: true,
    },
    out: {
        effect: "wobble",
        delay: 150,
        delayScale: 1.0,
        shuffle: true,
    },
    loop: true,
});
});

/*----- Choose image -----*/

function selectImage() {
  let randomNum = Math.floor(Math.random() * animalArray.length); 
  gameArray.push(randomNum);

  let randomPic = animalArray[randomNum]; 

  $(".temp-image").attr("src", function() { return randomPic}).show(); 

  // timer

  timer = setTimeout(() => {
    $(".temp-image").attr("src", "").hide(); // hide image and clear
  }, 3000);
}

/*----- Main game -----*/

function imageReel() {
  if (levelCounter == 0) {
    selectImage();
    levelCounter++;
    $("#start").attr("disabled", true).css("background-color", "#B54D40");
    setTimeout(() => {
      $(".button").attr("disabled", false).css("background-color", "#68A357");
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
    $("#start").attr("disabled", true).css("background-color", "#B54D40");
    setTimeout(() => {
      $(".button").attr("disabled", false).css("background-color", "#68A357");
    }, 3000 * levelCounter);
  }
  
}

/*----- Button click registers -----*/ 

function playerChoice(animal) {
    playerArray.push(animalToNumberMapper[animal]);
}

/*----- Game reset and clear timer -----*/ 

function resetGame() {
    clearTimeout(timer);
    $(".temp-image").attr("src", "").hide()
    playerArray.splice(0);
    gameArray.splice(0);
    levelCounter = 0;
    $("#start").attr("disabled", false).css("background-color", "#68A357");
    $(".button").attr("disabled", true).css("background-color", "#B54D40");

}

/*----- Check game array matches player array -----*/ 

function checkArrays() {
  if (gameArray.length !== playerArray.length) return false;
  for (var i = 0; i < gameArray.length; ++i) {
    if (gameArray[i] !== playerArray[i]) return false;
  }
  $("#start").attr("disabled", false).css("background-color", "#68A357");

  return true;
}

/*----- Check the 2 arrays match to then progress to next level -----*/ 

function nextLevel() {
  if (checkArrays() !== true) {
    playerArray.splice(0);
    alert("Sorry, better luck next time!");
    $(".button").attr("disabled", true).css("background-color", "#B54D40");
    $("#start").attr("disabled", false).css("background-color", "#68A357");
    levelCounter = 0;
  } else {
    playerArray.splice(0);
    alert("Welcome to the next level!");
    $(".button").attr("disabled", true).css("background-color", "#B54D40");
    points += (levelCounter * gameArray.length * 10);
  }
}




// function updateScoreboard() {
//     if(points > 0) {
//         if (points > localStorage.first || localStorage.first == undefined)
//         $("#1st").text("<td>${points}</td>");
//     }
// }