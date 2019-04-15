var number = 10;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the stop button gets clicked, run the stop function.
// $("#stop").on("click", stop);

//  When the resume button gets clicked, execute the run function.
// $("#resume").on("click", run);

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
  $("#timer").html("<h2>" + number + "</h2>");

  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    // alert("Time Up!");
  }
}

//  The stop function
// function stop() {
//  Clears our intervalId
//  We just pass the name of the interval
//  to the clearInterval function.
//   clearInterval(intervalId);
// }

//  Execute the run function.
run();
