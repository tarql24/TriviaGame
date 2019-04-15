var right = 0;
var wrong = 0;
var unanswered = 0;
var clockRunning = false;

$(document).ready(function() {
  $(".insidebox").hide();
  $(".answerBox").hide();
});

// This initializes the button that starts the game
$("#startBtn").on("click", function() {
  // when the start button clicked, the div with the questions that was hidden is shown
  $(".insidebox").show();
  console.log("hello");

  $(this).hide();
  run();
});

// This is the button that stops clock and goes to score page and hides questions
$("#subbutton").on("click", function() {
  // when the start button clicked, the div with the questions that was hidden is shown
  $(".insidebox").hide();
  $(".startBtn").hide();
  $(".answerBox").show();

  // id="startBtn" class="startButton"

  console.log("score");

  // $(this).hide();
  stop();
});

// $("#subbutton").on("click");
var number = 10;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the stop button gets clicked, run the stop function.
//   $("#stop").on("click", stop);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX********
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#timer").html("<h2>Remaining Time: " + number + "</h2>");

  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();
    $(".insidebox").hide();
    $(".startBtn").hide();
    $(".answerBox").show();

    //  Alert the user that time is up.
    // alert("Time Up!");
  }
}

//  The stop function
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  clockRunning = false;
}

//  Execute the run function.

function makeButton() {
  $("#question").html("Which one was a member of Public Enemy?");

  //   function renderButtons() {
  var answers = ["De La Soul", "Flava Fav", "Biz Markie", "Kool G Rap"];
  // Deleting the buttons prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons").empty();

  // Looping through the array of movies
  for (var i = 0; i < answers.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie to our button
    a.addClass("choice");
    // Adding a data-attribute
    a.attr("data-name", answers[i]);
    // Providing the initial button text
    a.text(answers[i]);
    // Adding the button to the buttons-view div
    $("#buttons").append(a);
  }
}
