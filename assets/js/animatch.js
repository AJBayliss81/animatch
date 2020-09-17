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

let user = sessionStorage.getItem("username");
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
let scores = {
	username: name,
	score: points
};
let sortedScores = [];

/*----- Textillate -----*/

$(function () {
	$("#title").textillate({ in: {
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

/*----- Button functions -----*/

function playerChoice(animal) {
	playerArray.push(animalToNumberMapper[animal]);
}

$(".btn").hover(
	function () {
		$(this).css("background-color", "#FBBE4B");
	},
	function () {
		$(this).css("background-color", "#68A357");
	}
);

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
		gameArray.splice(0);
		$(".alertsModal").modal();
		$("#alerts").text("Sorry, better luck next time!").css("font-size", "2rem");
		$(".button").attr("disabled", true).css("background-color", "#B54D40");
		$("#start").attr("disabled", false).css("background-color", "#68A357");
		setScore();
		levelCounter = 0;
		points = 0;
	} else {
		points += levelCounter * gameArray.length * 10;
		playerArray.splice(0);
		gameArray.splice(0);
		$(".alertsModal").modal();
		$("#alerts").text("Welcome to the next level!").css("font-size", "2rem");
		$(".button").attr("disabled", true).css("background-color", "#B54D40");
	}
}

/*----- Enter username -----*/

$("#form").submit(function (event) {
	if ($("#usernameInput").val() !== "") {
		let value = document.getElementById("usernameInput").value;
		sessionStorage.setItem("username", value);
		$("#inputAlert").text("Updated...").show();
	} else {
		$("#inputAlert").text("Not valid!").show().fadeOut(1000);
		event.preventDefault();
	}
});

$(function () {
	if (user == "" || user == null) {
		$(".usernameModal").modal();
	} else {
		$("#username").text(user);
	}
});

/*----- Scoreboard -----*/

function setScore() {
	var scores = {
		username: name,
		score: points
	};
	let oldScores = JSON.parse(localStorage.getItem("scores")) || [];

	oldScores.push(scores);

	localStorage.setItem("scores", JSON.stringify(oldScores));
}

function getScores() {
	let oldScores = JSON.parse(localStorage.getItem("scores")) || [];
	sortedScores = oldScores.sort(function (first, last) {
		return last.score - first.score;
	});

	for (var i = 0; i < sortedScores.length; i++) {
		if (sortedScores[0] !== undefined) {
			$(".1st.usernameData").text(sortedScores[0].username);
			$(".1st.scoreData").text(sortedScores[0].score);
		}
		if (sortedScores[1] !== undefined) {
			$(".2nd.usernameData").text(sortedScores[1].username);
			$(".2nd.scoreData").text(sortedScores[1].score);
		}
		if (sortedScores[2] !== undefined) {
			$(".3rd.usernameData").text(sortedScores[2].username);
			$(".3rd.scoreData").text(sortedScores[2].score);
		}
		if (sortedScores[3] !== undefined) {
			$(".4th.usernameData").text(sortedScores[3].username);
			$(".4th.scoreData").text(sortedScores[3].score);
		}
		if (sortedScores[4] !== undefined) {
			$(".5th.usernameData").text(sortedScores[4].username);
			$(".5th.scoreData").text(sortedScores[4].score);
		} else if (sortedScores[i] == undefined) {
			$(".usernameData").text("");
			$(".scoreData").text("");
		}
	}
}

function checker(x) {
	if (x.matches) {
		$("#responsive").on("click", function () {
			getScores();
			$("#scoreboardModal").modal();
		});
	}
}

var x = window.matchMedia("(max-width: 992px)");
checker(x);
x.addListener(checker);