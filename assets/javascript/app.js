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

// This is the button that stops clock and goes to score page and hides questions
// $("#subbutton").on("click", function() {
//   // when the start button clicked, the div with the questions that was hidden is shown
//   // $(".insidebox").hide();
//   // $(".startBtn").hide();
//   // $(".answerBox").show();

//   // id="startBtn" class="startButton"

//   console.log("score");

//   // $(this).hide();
//   stop();
//   score();
// });

function handleClick() {
  var amountCorrect = 0;
  for (var i = 1; i <= 7; i++) {
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
  console.log((unanswered = 7 - amountCorrect - amountWrong));
  $("#right").html("<h2>Right: " + amountCorrect + "</h2>");
  $("#wrong").html("<h2>Wrong: " + amountWrong + "</h2>");
  $("#unanswered").html("<h2>Unanswered: " + unanswered + "</h2>");
}

// $("#subbutton").on("click");
var number = 35;

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
    handleClick();
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

// function score() {
//   if ($("input[name=group1]:checked").val() === "right") {
//     console.log("meow");
//     right++;
//   } else if ($("input[name=group1]:checked").val() === "wrong") {
//     wrong++;
//   } else {
//     unanswered++;
//   }
//   console.log(right);
//   console.log(wrong);
// }
// $("#right").html("<h2>Right: " + amountCorrect + "</h2>");
// $("#wrong").html("<h2>Wrong: " + amountWrong + "</h2>");
// $("#unanswered").html("<h2>Unanswered: " + unanswered + "</h2>");
// $("#right").text("<h2>Right: " + amountCorrect + "</h2>");
// $("#wrong").text("<h2>Wrong: " + amountWrong + "</h2>");
// $("#unanswered").text("<h2>Unanswered: " + unanswered + "</h2>");
//  Execute the run function.
