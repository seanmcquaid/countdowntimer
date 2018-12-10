function updateTimer(){
    var now = new Date();
    var nowAsTimeStamp = now.getTime();
    var timeRemaining = timeStamp - nowAsTimeStamp;
}

// create variable to house date that we are counting down to
var endDate = new Date("December 25, 2018");
var timeStamp = endDate.getTime();

// divide by 1000 to give us seconds
// variables for each increment of time
var seconds = Math.floor((timeRemaining / 1000) % 60);
var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

// setInterval will: 
// 1) call the function in arg1
// 2) every arg2 seconds
setInterval(updateTimer, 1000);