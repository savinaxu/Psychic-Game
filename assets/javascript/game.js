//short the code
let $ = function(id) {
    return document.getElementById(id)
}

//global variable
let choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let left = 9;
let guess = [];
let guessIndex = 0;
let wins = 0;
let losses = 0;
let ranNumber;
let computerChoice;

//guesses left function
function guessesLeft() {
    $("left").innerHTML = left
}

//wins function
function winsScore() {
    $("wins").innerHTML = wins
}

//losses functin
function lossesScore() {
    $("losses").innerHTML = losses
}

// resent function
function initialGame() {
    left = 9;
    guess = [];
    guessIndex = 0;
    $("guess").innerHTML = "";
    ranNumber = Math.floor(Math.random()*26);
    computerChoice = choices[ranNumber]
    guessesLeft()
}

// call initial function
initialGame()
winsScore()
lossesScore()

//user choice function
document.onkeyup = function(event) {
    let userChoice = event.key.toLowerCase();

    if (userChoice === computerChoice) {
        wins++
        winsScore()
        initialGame()
    } else {
        left--
        if (left < 1) {
            initialGame()
            losses++
            lossesScore()
        } else {
            guess.push(userChoice)
            $("guess").innerHTML += guess[guessIndex] + ", "
            guessIndex++
            guessesLeft()
        }
    }
}



