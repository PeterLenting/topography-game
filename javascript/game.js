window.onload = function() {
  console.log($("#highScore_id").val())
  document.getElementById("highScore_id").value = localStorage.getItem("highScore");
  if ($("#highScore_id").val() != 0) {
      $("#highScoreDiv").removeClass("hidden");
      $("#buttonResetHighScore").removeClass("hidden");
  }
};

function resetHighScore() {
    localStorage.clear();
    document.getElementById("highScore_id").value = 0;
};

$("#buttonResetHighScore").click(function() { 
    resetHighScore()
});

/*
- Counting the rounds. 
- Every time the user clicks #buttonNext myRound() is executed and '1' is added to #round. 
*/
var roundnr = $("#round"); 

function myRound() {
    roundnr.val( parseInt(roundnr.val()) +1 );
    roundnrVal += 1;
    }

/*
- If roundnr becomes bigger than 'numberOfRounds' (10 rounds are played) the game is over. 
- 'roundnrVal' starts at 2, because the counting of the round starts after the first image is shown.
- As long as 'roundnrVal' is smaller than 'numberOfRounds' continue with the game: displayImage().
*/
var numberOfRounds = 10;
var roundnrVal = 2;

function myRoundCounter() { 
    $("#buttonNext").addClass("hidden");
    if (roundnrVal > numberOfRounds) {
        commentOnScore();
        $("#comment, #countSp, #timeSp, #headerQuestion, .flip-card-inner").addClass("hidden");
        $("#highScoreDiv").removeClass("hidden");
        $("#buttonResetHighScore").addClass("hidden");
        $("#buttonReset").removeClass("hidden");
        $("#textField").val("");
        $("#scoreboard").addClass("endScoreClass").removeClass("scoreboardClass");
        $("#yourScore").removeClass("hidden");
        $('#score-div').contents().appendTo('#time-div')
        var score = $("#scoreboard").val();
        var score_int = parseInt(score);
        var highScore = $("#highScore_id").val();
        var highScore_int = parseInt(highScore);
        console.log("1 " + highScore)
        console.log(score_int);
        console.log("2 " + highScore_int)
        console.log("3 " + highScore)
            if ((score_int > highScore_int) || ($("#highScore_id").val() == 0)) {
                localStorage.setItem("highScore", score_int);
                str_highScore = localStorage.getItem("highScore");
                highScore = parseInt(str_highScore);
                document.getElementById("highScore_id").value = localStorage.getItem("highScore");
                console.log(highScore)
            }
        } else {
        $("#comment").addClass("hidden");
        $("#buttonHint, #buttonSubmit").removeClass("hidden");
        $("#textField").removeClass("hidden").val("");
        $("#newImage").removeClass("gotHint gotRightAnswer gotWrongAnswer");
        displayImage();
    }   
}

/*
- Run through images-array and show random image out of 'images'. 
- Already used images are not used again, so no user gets the same image twice in the same game.
*/
var images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 
              'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 
              'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 
              'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 
              'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png', 'images/cyclist-15-empty.png'];

var usedImages = [];
var usedImagesCount = 0;

function displayImage() {
    var num = Math.floor(Math.random() *15);
    if (!usedImages[num]) {
        document.getElementById("newImage").src = images[num];
        document.getElementById("newImageBack").src= images[num];
        usedImages[num] = true;
        usedImagesCount++;
        if (usedImagesCount === images.length) {
            usedImagesCount = 0;
            usedImages = [];
        }
    } else {
        displayImage();
    }
} 

/*
- The Next-Button triggers myRoundCounter() and myRound(). 
- myRoundCounter() starts displayImage() as long as 'roundnrVal' is smaller than 'numberOfRounds'
*/
$("#buttonNext").click(function() {  
    var timeLeft = 24;
    var elem = document.getElementById('countdown_id');
    $('#countdown_id').html(25).addClass("green").removeClass("orange red");
    window.timerId = setInterval(countdown, 1000);
    myRoundCounter();
    myRound(); 

    function countdown() {
        if (timeLeft == 25) {
            $("#countdown_id").addClass("green").removeClass("orange red");
        } if (timeLeft == 15) {
            $("#countdown_id").addClass("orange");   
        } if (timeLeft == 5) {
            $("#countdown_id").addClass("red");   
        } if (timeLeft == -1) {
            clearTimeout(window.timerId);
            timesUp();  /*Turns card to right answer and show message of timelimit*/
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    }
});

/*
clearInterval(timerId);
- functionStartGame() starts the game and shows the first random image from the images-array
- Header is hidden on devices smaller than 700px.
*/
var headerScreenSize = window.matchMedia("(max-width: 700px)");

function functionStartGame(){
    displayImage();
    $("#highScoreDiv").addClass("hidden");
    console.log(localStorage);
    $("#buttonStart, #buttonHowToPlayTheGame, #headerQuestion").addClass("hidden");
    $("#buttonHint, #buttonSubmit, #textField, #round-and-score").removeClass("hidden");
    if (headerScreenSize.matches) { 
        $("header").addClass("hidden");
    }
    /*var score = $("#scoreboard");
    var scoreCurrent = parseInt(score.val());
    console.log(scoreCurrent)
    if (scoreCurrent == 0) {
        localStorage.setItem("highscore", scoreCurrent);
        str_highScore = localStorage.getItem("highscore");
        highScore = parseInt(str_highScore);
        console.log(highScore)
        var s = document.getElementById("highScore_id");
            s.value = highScore;
            console.log(s.value);
            console.log(highScore)
    } else {
        highScore = localStorage.getItem("highScore");
        activeHighScore = highScore;
    }*/
}


function timesUp() {
    rightAnswer();
    if (roundnrVal < 12) {
        $("#newImage, #newImageBack").removeClass('blur');
        $("#comment").removeClass("hidden").text("Sorry, you're out of time. No score...");
        $("#buttonTryAgain, #buttonGiveUp").addClass("hidden");
        $("#buttonNext").removeClass("hidden");
        $("#buttonHint, #buttonSubmit, #textField").addClass("hidden");
    }
    if (roundnrVal == 11) {
        $("#buttonNext").html("Get to the finish");
    }
};


/*
- The Start-Button triggers functionStartGame
*/
$("#buttonStart").click(function() {
    functionStartGame();    
    var timeLeft = 24;
    var elem = document.getElementById('countdown_id');
    window.timerId = setInterval(countdown, 1000);
    
    function countdown() {
        if (timeLeft == 15) {
            $("#countdown_id").addClass("orange");   
        } if (timeLeft == 5) {
            $("#countdown_id").addClass("red");   
        } if (timeLeft == -1) {
            clearTimeout(window.timerId);
            timesUp();
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        /*} if ($("#newImage").hasClass("stopTimerId")){
            clearInterval(window.timerId);*/
        }
    }
});

/*
- Flip() is used to make the main image flip.
- Flip() takes 600ms. 
*/
$(function() {
    $(".flip-card-inner").flip({ 
        trigger: "manual", speed: 600
    });
});

 
/*
- functionGiveHint() flips the main image.
- The empty-image is replaced by the flag-image, which means the flag of the cyclists nation is show after flip().
- The class 'GotHint' is added to the image, to let the scoreboard know the user got a hint (that costs a point).
- The hint-button is hidden for the remainder of the round.
- setTimeout() is set to 200ms to make sure the new image isn't visible before flip() is done far enough.  
*/
function functionGiveHint() {
    var nSrcHint = $("#newImage, #newImageBack").attr('src').replace("-empty.png", "-flag.png");   
    $("#buttonHint").addClass("hidden");  
    $("#newImage").addClass("gotHint");          
    $(".flip-card-inner").flip('toggle');
        setTimeout(function () {   
            $("#newImage, #newImageBack").attr('src', nSrcHint);
        }, 200);
} 

/* 
The Hint Button triggers functionGiveHint()
*/
$("#buttonHint").click(function() {
    functionGiveHint();
});

/*
- rightAnswer() flips the main image.
- The empty-image is replaced by the image with the name of the cyclist and the flag of his nation after flip().
- The flag-image is replaced by the image with the name of the cyclist and the flag of his nation after flip().
*/
function rightAnswer() {
    clearInterval(window.timerId);
    /*$("#newImage, #newImageBack").addClass("stopTimerId");  */
    var nSrc = $("#newImage, #newImageBack").attr('src').replace("-empty", "").replace("-flag", "");  
        $(".flip-card-inner").flip('toggle');
        setTimeout(function () {
            $("#newImage, #newImageBack").attr('src', nSrc);  
        }, 200);
    } 
    
/*
- myScore takes care of the scoreboard and the comments after each correct answer.
- "Yes, that's him" is shown after a correct answer.
- If the user recieved a hint and got a wrong answer, 5 points is added to te scoreboard.
- If the user either recieved a hint or got a wrong answer, 10 points are added to te scoreboard.
- If the user recieved no hint and didn't give a wrong answer, 15 points is added to te scoreboard.
- With parseInt(time.text()) the seconds left on the timetable are added to the score. 
*/
var score = $("#scoreboard");
var time = $("#countdown_id");

function myScore() {
    $("#comment").removeClass("hidden").text("Yes, that's him!");
    $("#round-and-score").addClass("marginEndscore");
    if ($("#newImage").hasClass("gotHint") &&  $("#newImage").hasClass("gotWrongAnswer")) {
        score.val(parseInt(score.val()) + 5 + parseInt(time.text())); 
    } else if ($("#newImage").hasClass("gotHint") || $("#newImage").hasClass("gotWrongAnswer")) {
        score.val(parseInt(score.val()) + 10 + parseInt(time.text())); 
    } else {
        score.val(parseInt(score.val()) + 15 + parseInt(time.text()));
    }
}
 
/*
- runGame() checks the given answer against the right answer.
- All answer are turned to uppercase, to make sure the use of upper- or lowercase doesn't have any influence.
- If the answer is correct rightAnswer() and myScore() are executed.
- If the answer is wrong, the image is blurred and the user gets the option to try again or to give up.
- Trying again costs one point. Giving a wrong answer again will make the right answer appear. No point are given.
*/
function runGame() {
    $(window).scrollTop(0);
    $("#buttonNext").removeClass("hidden");
    if (roundnrVal == 11) {
        $("#buttonNext").html("Get to the finish");
    }
    $("#buttonHint, #buttonSubmit, #textField").addClass("hidden");
    var answer = $("#textField").val(); 
    var nSrc = $("#newImage, #newImageBack").attr('src').replace("-empty", "").replace("-flag", "");
    if ($("#newImage").attr('src').indexOf("-1-") > -1 && answer.toUpperCase() == "JACQUES ANQUETIL") {
        rightAnswer();    
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-2-") > -1 && answer.toUpperCase() == "LANCE ARMSTRONG") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-3-") > -1 && answer.toUpperCase() == "GINO BARTALI") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-4-") > -1 && answer.toUpperCase() == "FAUSTO COPPI") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-5-") > -1 && answer.toUpperCase() == "MIGUEL INDURAIN") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-6-") > -1 && answer.toUpperCase() == "BERNARD HINAULT") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-7-") > -1 && answer.toUpperCase() == "LOUISON BOBET") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-8-") > -1 && answer.toUpperCase() == "JOOP ZOETEMELK") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-9-") > -1 && answer.toUpperCase() == "EDDY MERCKX") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-10-") > -1 && answer.toUpperCase() == "SEAN KELLY") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-11-") > -1 && answer.toUpperCase() == "ALFREDO BINDA") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-12-") > -1 && answer.toUpperCase() == "RIK VAN STEENBERGEN") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-13-") > -1 && answer.toUpperCase() == "OSCAR FREIRE") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-14-") > -1 && answer.toUpperCase() == "LAURENT JALABERT") {
        rightAnswer();
        myScore();
    } else if ($("#newImage").attr('src').indexOf("-15-") > -1 && answer.toUpperCase() == "MARCO PANTANI") {
        rightAnswer();
        myScore();
    } else {
        $("#newImage").addClass('blur');
        $("#newImageBack").addClass('blur');  
        if ($("#newImage").hasClass("gotWrongAnswer")){
            $("#newImage, #newImageBack").attr('src', nSrc);
            $("#buttonNext").removeClass("hidden");
            $("#comment").removeClass("hidden").text("Sorry, no score");
            $("#newImage, #newImageBack").removeClass('blur');
            } else {
            $("#comment").removeClass("hidden").text("Nope, that's not him");
            $("#buttonTryAgain, #buttonGiveUp").removeClass("hidden");
            $("#buttonNext").addClass("hidden");
            $("#newImage").addClass("gotWrongAnswer");   
        }
    }
}

/*
The Submit Button triggers runGame().
*/
$("#buttonSubmit").click(function() {
    runGame();
});

/*
When the player is in the textfield, hitting 'Enter' on the key board will call runGame() 
*/
$("#textField").keypress(function(event) {
    if (event.which == 13) {
       runGame();
    }
  }); 

/* 
- If after a wrong answer the user wants another try:
- The 'blur'-class is removed.
*/
$("#buttonTryAgain").click(function() {
    $("#newImage, #newImageBack").removeClass('blur');
    $("#comment, #buttonTryAgain, #buttonGiveUp").addClass("hidden");
    $("#buttonSubmit, #textField").removeClass("hidden");
    if ($("#newImage").attr('src').endsWith("empty.png")) {
        $("#buttonHint").removeClass("hidden");
    } else if ($("#newImage").attr('src').endsWith("flag.png")) {
        $("#buttonHint").addClass("hidden");
    }     
});

/* 
- If after a wrong answer the user gives up:
- rightAnswer() is run.
- The "Sorry, no score"-message shows.
*/
$("#buttonGiveUp").click(function() {
    rightAnswer();
    $("#newImage, #newImageBack").removeClass('blur');
    $("#comment").removeClass("hidden").text("Sorry, no score");
    $("#buttonTryAgain, #buttonGiveUp").addClass("hidden");
    $("#buttonNext").removeClass("hidden");
});


/*
- commentOnScore() takes care of the comments on the score the user reached at the end of the game. The number of points scored, decide which message.
*/
function commentOnScore() {   
    $("#scoreComment").removeClass("hidden"); 
    if (score.val() < 100) {
        $("#scoreComment").text("Uhm, maybe you could try again?");
    } else if (score.val() < 100) { 
        $("#scoreComment").text("Not too bad!");
    } else if (score.val() < 150) { 
        $("#scoreComment").text("You're getting there!");
    } else if (score.val() < 200) { 
        $("#scoreComment").text("Nice job!");
    } else if (score.val() < 300) { 
        $("#scoreComment").text("Wow, that's impressive!");
    } else if (score.val() < 375) { 
        $("#scoreComment").text("Getting close to yellow yourself!");
    } else if (score.val() >= 375) { 
        $("#scoreComment").text("You're a true worldchampion!");
    } else {
        $("#scoreComment").text("Something went wrong...");
    }
}

/*
Reset the game after finishing it by clicking the Play Again-button. 
*/
$(function(){

    $("#buttonReset").click(function() {
        window.location.reload();
    });});

/*
For Mobile only: Jump down the page for an explanation of the rules and back up again to start the game.
*/
function explainGame() {
    window.location.href = '#sidebar';
  }

$("#buttonHowToPlayTheGame").click(function() {
    explainGame();
});

function goBackUp() {
    window.location.href = '#headerQuestion'; 
  }

$("#buttonGoBackUp").click(function() {
    goBackUp();
});

/*
Count-time Counter.
*/
