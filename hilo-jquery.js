// Hi/Lo Game
//
// Remember the Hi/Lo Game? Let's create an interactive webpage that allows a user to play.
//
// View
//
// Create an input tag for the user's guess.
// Create a button tag to send the user's guess to the Javascript code.
// Create a p tag for the game's feedback (whether the guess is too high/too low/the user has won or lost).
// Controller
//
// Create a click listener that takes in the user's guess from the input tag and displays it in an alert.
// Reuse the code from your previous Hi/Lo Game challenge to to match the user's guess to the correct set number.
// Make the p tag red when there are only two guesses left. Use the jQuery .addClass(..) function.
// Make the p tag contain the results of all the user's guesses. Use the jQuery functions .append(..) or .prepend(..) and .text(..).
// Hide the button and input tags when the game is over, using the jQuery .show(..) and .hide(..) functions.

var rand = getRandomInt(1,100);
console.log("Secret Number: " + rand);
var guesses = 7;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  function hiLo() {
    if(guesses<=0){
      $("p").text("Oh no! You lost!");
      // $("p").text("Page refreshing in 5 seconds...");

      // setTimeout(function() {
      //   window.location.reload();
      // }, 5000);

    }
    else if(parseInt($("input").val())===rand){
        console.log(parseInt($("input").val()))
        $("p").text("Oh yay! You won!");
        // $("p").text("Page refreshing in 5 seconds...");
        // guesses--;
        // $("h3").text("You have " + guesses + " guesses left");
        // setTimeout(function() {
        //   window.location.reload();
        // }, 5000);
      }
      else if(parseInt($("input").val())>rand){
        console.log(parseInt($("input").val()))
        $("p").text("You're too hi!");
        guesses--;
        $("h3").text("You have " + guesses + " guesses left");
      }
      else if(parseInt($("input").val())<rand){
        console.log("Guess: " + parseInt($("input").val()))
        $("p").text("You're too lo!");
        guesses--;
        $("h3").text("You have " + guesses + " guesses left");
      }
    if (guesses < 3) { $("button").on("click", function() {
      $("h3").addClass("red");
    });
    }
  }

$(document).ready(function() {
  $("button").on("click", function() {
    // alert($("input").val());
    hiLo();
    $("input").val('');
  });
});
