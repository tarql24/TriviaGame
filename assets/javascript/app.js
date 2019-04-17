var amountCorrect = 0;
var amountWrong = 0;
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

function scoreTotal() {
  var amountCorrect = 0;
  for (var i = 1; i <= 3; i++) {
    var radios = document.getElementsByName("group" + i);
    for (var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if (radio.value == "correct" && radio.checked) {
        amountCorrect++;
      } else if (radio.value == "wrong" && radio.checked) {
        amountWrong++;
      }
      // else {
      //   unanswered++;
      // }
    }
  }
  $(".insidebox").hide();
  $(".answerBox").show();
  console.log(radio.length);
  // alert("Correct Responses: " + amountCorrect);
  console.log(amountCorrect);
  console.log(amountWrong);
  // console.log(unanswered);
  console.log((unanswered = 3 - amountCorrect - amountWrong));
  $("#right").html("<h2>Right: " + amountCorrect + "</h2>");
  $("#wrong").html("<h2>Wrong: " + amountWrong + "</h2>");
  $("#unanswered").html("<h2>Unanswered: " + unanswered + "</h2>");
  stop();
}

// $("#subbutton").on("click");
var number = 20;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

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
    scoreTotal();
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
