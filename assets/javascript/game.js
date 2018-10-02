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

//pick random number
function random() {
    ranNumber = Math.floor(Math.random()*26)
}

//guesses left function
function guessesLeft() {
    $("left").innerHTML = left
}
//call the function to show on the page
guessesLeft()

//wins function
function winsScore() {
    $("wins").innerHTML = wins
}
//call the function to show on the page
winsScore()

//losses functin
function lossesScore() {
    $("losses").innerHTML = losses
}
//call the function to show on the page
lossesScore()

// resent function
function reset() {
    left = 9;
    guess = [];
    guessIndex = 0;
    $("guess").innerHTML = "";
}

//user choice function
document.onkeyup = function(event) {
    let userChoice = event.key.toLowerCase();
    random()
    let computerChoice = choices[ranNumber]

    if (userChoice === computerChoice) {
        wins++
        winsScore()
        reset()
        guessesLeft()
    } else {
        left--
        if (left < 1) {
            reset()
            losses++
            lossesScore()
        } else {
            guess.push(userChoice)
            $("guess").innerHTML += guess[guessIndex] + ", "
            guessIndex++
        }

        guessesLeft()
    }
}



