var wins = 0;
var losses = 0;
var randomNumber = 0;
var UserScore = 0;

$(".score-header").html("Your total score is: ");
$(".score-number").append(UserScore);

// random number generated everytime at start of game (between 19-120)
// this function generates our random number, upon page load and created as function so it can be called again later
function randomNumberGen() {
    randomNumber = Math.floor(Math.random() * 101) + 19;
    return randomNumber;
}

// initializing the first randomNumber, with the above function 
randomNumberGen();

// displays the random number on the front-end
$(".random-number").append(randomNumber);
console.log("UserScore A: " + UserScore);
console.log("randomNumber A: " + randomNumber);

// this function randomly generates a number (between 1-12) for the four crystal buttons
function GemNumberGen() {
    var ItsNumber = Math.floor(Math.random() * 11) + 1;
    return ItsNumber;
}

// initializing the four crystal values with random number, using function above
var gem1value = GemNumberGen();
var gem2value = GemNumberGen();
var gem3value = GemNumberGen();
var gem4value = GemNumberGen();

// start of game
$(document).ready(function() {
        
if (randomNumber > UserScore) {

// only way to find out what a crystal is worth is by clicking on it
// each time we click on a crystal, it adds that many points to the total score

$("#button1").on("click", function() {
    UserScore = gem1value + UserScore;
    $(".score-number").text(UserScore);
    console.log("UserScore B: " + UserScore);
    console.log("randomNumber B: " + randomNumber);
});
$("#button2").on("click", function() {
    UserScore = gem2value + UserScore;
    $(".score-number").text(UserScore);
    console.log("UserScore C: " + UserScore);
    console.log("randomNumber C: " + randomNumber);
});
$("#button3").on("click", function() {
    UserScore = gem3value + UserScore;
    $(".score-number").text(UserScore);
    console.log("UserScore D: " + UserScore);
    console.log("randomNumber D: " + randomNumber);
});
$("#button4").on("click", function() {
    UserScore = gem4value + UserScore;
    $(".score-number").text(UserScore);
    console.log("UserScore E: " + UserScore);
    console.log("randomNumber E: " + randomNumber);
});

// goal of game is to match your total score to the random number
// once you match the number, your Wins count increases and the total score is reset

if (UserScore === randomNumber) {
    alert("you win");
    wins++;
    UserScore = 0;
    randomNumberGen();
    gem1value = GemNumberGen();
    gem2value = GemNumberGen();
    gem3value = GemNumberGen();
    gem4value = GemNumberGen();
} 
// if you exceed the number, your Losses count increases
else if (UserScore > randomNumber) {
    alert("you lose");
    losses++;
    UserScore = 0;
    randomNumberGen();
    gem1value = GemNumberGen();
    gem2value = GemNumberGen();
    gem3value = GemNumberGen();
    gem4value = GemNumberGen();
}


$(".wins-losses").text("Wins: " + wins);

}

}); // belongs to document ready function
