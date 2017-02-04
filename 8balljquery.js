// <!--Magic 8 Ball
//
// As a user I can enter a question on a web page and magically get an answer to my question.
//
// View
//
// Create an input tag to accept questions from the user. Give it an id of "question".
// Create a button tag to send the question to the Javascript code. Give it an id of "submit".
// Create a p tag to hold the answer the Magic 8 Ball sends back. Give it an id of "answer".
// Controller
//
// Create a click listener for the button tag, which opens up an alert.
// Make the click listener show what is in the input field. Use the jQuery function .val().
// Make the click listener show what's in the input field in the paragraph section. Use the jQuery function .text().
// Clear the input field after the button is clicked.
// Reuse your code from the previous Magic 8 Ball challenge to give a random answer.  -->
var responses = "Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, Do the opposite, Your answer here.".split(",");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //gets a random number between min and max
}

$(document).ready(function() {
//^^^ Takes a string and seperates it into an array using .split(",") to split the string with every comma
var resp = responses[getRandomInt(0, responses.length-1)]; //gets a random response from respones using the randomInt function



  $("button").on("click", function() {
    alert($("input").val());
    $("p:first").append($("input").val());
    $("#answer").append(" " + resp);
    $("input").val('');
  });
});
