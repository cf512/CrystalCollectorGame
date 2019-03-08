var wins = 0;
var losses = 0;
var randomNumber = 0;
var UserScore = 0;

// start of game
$(document).ready(function() {

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
        console.log("UserScore: " + UserScore);
        console.log("randomNumber: " + randomNumber);
        console.log("---------------------");

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
        console.log("gem1value: " + gem1value);
        console.log("gem2value: " + gem2value);
        console.log("gem3value: " + gem3value);
        console.log("gem4value: " + gem4value);
        console.log("---------------------");

        //wins and losses counter functions

        function winsUp() {
            wins++;
            return wins;
        }

        function lossesUp() {
            losses++;
            return losses;
        }

        // button actions
        // only way to find out what a crystal is worth is by clicking on it
        // each time we click on a crystal, it adds that many points to the total score

        $("#button1").on("click", function() {
            UserScore = gem1value + UserScore;
            $(".score-number").text(UserScore);
            console.log("button1 pressed -- UserScore: " + UserScore);
            console.log("button1 pressed -- randomNumber: " + randomNumber);
            console.log("---------------------");
            checkIfWin();
        });
        $("#button2").on("click", function() {
            UserScore = gem2value + UserScore;
            $(".score-number").text(UserScore);
            console.log("button2 pressed -- UserScore: " + UserScore);
            console.log("button2 pressed -- randomNumber: " + randomNumber);
            console.log("---------------------");
            checkIfWin();
        });
        $("#button3").on("click", function() {
            UserScore = gem3value + UserScore;
            $(".score-number").text(UserScore);
            console.log("button3 pressed -- UserScore: " + UserScore);
            console.log("button3 pressed -- randomNumber: " + randomNumber);
            console.log("---------------------");
            checkIfWin();
        });
        $("#button4").on("click", function() {
            UserScore = gem4value + UserScore;
            $(".score-number").text(UserScore);
            console.log("button4 pressed -- UserScore: " + UserScore);
            console.log("button4 pressed -- randomNumber: " + randomNumber);
            console.log("---------------------");
            checkIfWin();
        });

        // goal of game is to match your total score to the random number
        // once you match the number, your Wins count increases and the total score is reset

        function checkIfWin() {
        if (UserScore === randomNumber) {
            console.log("you win");
            winsUp();
            UserScore = 0;
            randomNumberGen();
            gem1value = GemNumberGen();
            gem2value = GemNumberGen();
            gem3value = GemNumberGen();
            gem4value = GemNumberGen();
            console.log("gem1value: " + gem1value);
            console.log("gem2value: " + gem2value);
            console.log("gem3value: " + gem3value);
            console.log("gem4value: " + gem4value);
            console.log("---------------------");
            $(".wins-losses").html("Wins: " + wins + "<br>" + "<br>" + " Losses: " + losses);
            $(".random-number").html(randomNumber);   
            $(".score-number").html("You won!" + "<br>" + "Click any crystal to play again!");      
            } 

        // if you exceed the number, your Losses count increases
        else if (UserScore > randomNumber) {
            console.log("you lose");
            lossesUp();
            UserScore = 0;
            randomNumberGen();
            gem1value = GemNumberGen();
            gem2value = GemNumberGen();
            gem3value = GemNumberGen();
            gem4value = GemNumberGen();
            console.log("gem1value: " + gem1value);
            console.log("gem2value: " + gem2value);
            console.log("gem3value: " + gem3value);
            console.log("gem4value: " + gem4value);
            console.log("---------------------");
            $(".wins-losses").html("Wins: " + wins + "<br>" + "<br>" + " Losses: " + losses);
            $(".random-number").html(randomNumber);
            $(".score-number").html("You lost!" + "<br>" + "Click any crystal to play again!");
            }
        }

$(".score-header").html("Your total score is: ");
$(".score-number").append(UserScore);
$(".wins-losses").html("Wins: " + wins + "<br>" + "<br>" + " Losses: " + losses);

}); // belongs to document ready function