/*----- Check localStorage is available -----*/

$(function () {
  function storageAvailable(type) {
    var storage;
    try {
      storage = window[type];
      var x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  if (!storageAvailable("localStorage")) {
    $("#scoreboard-button")
      .attr("disabled", false)
      .css("background-color", "#68A357");
  }
});

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
  cat: 0,
  dog: 1,
  fox: 2,
  goat: 3,
};

let timer;
let levelCounter = 0;
let points = 0;
var scores = [{ name: "", score: "" }];
var name = [];



/*----- Textillate -----*/

$(function () {
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

  $(".temp-image")
    .attr("src", function () {
      return randomPic;
    })
    .show();

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
  $(".temp-image").attr("src", "").hide();
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
    setScore();
  } else {
    playerArray.splice(0);
    alert("Welcome to the next level!");
    $(".button").attr("disabled", true).css("background-color", "#B54D40");
    points += levelCounter * gameArray.length * 10;
  }
}

/*----- Enter username -----*/

$("#form").submit(function (event) {
  if ($("#usernameInput").val() !== "") {
    let value = document.getElementById("usernameInput").value;
    localStorage.setItem("username", value);
    $("#alert").text("Updated...").show();
    console.log(name);
  }

  $("#alert").text("Not valid!").show().fadeOut(1000);
  event.preventDefault();
});

$(function () {
  if (name.length === 0) {
    $(".username-modal").modal();
  }
  name = localStorage.getItem("username");
});

/*----- Scoreboard -----*/

function setScore() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

function getScores() {
//   var scores = JSON.parse(localStorage.getItem("scores"));
//   scores.sort(function (first, second, third, fourth, fifth) {
//     return (
//       fifth.score - fourth.score - third.score - second.score - first.score
//     );
//   });
  if (scores.score == undefined || scores.length < 5) {
    $("#1st").html(`<th scope="row">1st</th> <td></td> <td></td>`);
    $("#2nd").html(`<th scope="row">2nd</th> <td></td> <td></td>`);
    $("#3rd").html(`<th scope="row">3rd</th> <td></td> <td></td>`);
    $("#4th").html(`<th scope="row">4th</th> <td></td> <td></td>`);
    $("#5th").html(`<th scope="row">5th</th> <td></td> <td></td>`);
  } else {
    $("#1st").text(first.score);
    $("#2nd").text(second.score);
    $("#3rd").text(third.score);
    $("#4th").text(fourth.score);
    $("#5th").text(fifth.score);
  }
}

// function submitUsername() {
//     usernameValue = $("#usernameInput").value;
//     localStorage.setItem("username", usernameValue);
//     console.log(username);
// }

// function updateScoreboard() {
//     if(points > 0) {
//         if (points > localStorage.first || localStorage.first == undefined)
//         $("#1st").text("<td>${points}</td>");
//     }
// }
