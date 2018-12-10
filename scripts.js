var endDate = new Date("December 25, 2018");
var timeStamp = endDate.getTime();

function updateTimer(){
    var now = new Date();
    var nowAsTimeStamp = now.getTime();
    var timeRemaining = timeStamp - nowAsTimeStamp;

// divide by 1000 to give us seconds
// variables for each increment of time
    var seconds = Math.floor((timeRemaining / 1000) % 60);
    var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));

// get elements by class name returns an array even if there is 0 or one thing
    document.querySelector(".weeks").innerHTML = weeks;
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

// compares values
// compares values AND data type 
    if(seconds === 0) {
        // update the dom to say "hooray another minute closer!"
        document.querySelector(".message").innerHTML = "One minute closer!!!";
    } else {
        document.querySelector(".message").innerHTML = "Keep Waiting!"
    }
}

function changeCountdown(){
    endDate = new Date("March 15, 2019");
    timeStamp = endDate.getTime();
    document.querySelector("body").style.background = "url(https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2694/s300/digitalcrafts-logo-1200x1200.jpg)";
    document.querySelector("h1").innerHTML = "Countdown to Graduation!"
    document.querySelector("h1").style.color = "white";
};


var changeButton = document.querySelector(".graduation-button");
changeButton.addEventListener("click", changeCountdown);

// create variable to house date that we are counting down to

// setInterval will: 
// 1) call the function in arg1
// 2) every arg2 seconds
// calls updatetimer for load screen so that way we get the timer the moment it loads
updateTimer();
// begins updating the timer every 1000 milliseconds
setInterval(updateTimer, 1000);