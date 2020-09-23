// - When the page is loaded localStorage is checked
//- If there is highscore to be found it is set in the right place
// - Aside is adjusted if #highScoreDiv is shown

window.onload = function() {
  document.getElementById("highScore_id").value = localStorage.getItem("highScore");
  if ($("#highScore_id").val() != 0) {
      $("#highScoreDiv").show();
      $("aside").addClass("asideShrink");
      $("#buttonResetHighScore").removeClass("hidden");
  } else {
      $("aside").removeClass("asideShrink");
      // $("#highScoreDiv").hide();
  }
};


// - muteAudio() turns the soundeffect on and off
// - button-class is changed on every click (toggle)
// - muteAudio() is activated by clicking #buttonMute

let silence = false;

function muteAudio() {

    let allaudio = $('audio');

    if (silence) {
        for (let j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = false;
        }
        silence = false;
    } else {
        for (let j = 0; j < allaudio.length; j++) {
            allaudio[j].muted = true;
        }
        silence = true;
    }
    $('#buttonMute i').toggleClass('fa-volume-off');
}


$("#buttonMute").click(function() { 
  muteAudio();
});


// - animateValue() takes an old value and a new value
// - then the difference is animated.
// - Used in myScore() 

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  duration = 1500;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.value = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}


// - myScore() takes care of the scoreboard and the comments after each correct answer.
// - "Yes, that's it" is shown after a correct answer.
// - If the user recieved a hint and got a wrong answer, 5 points are added to te scoreboard.
// - If the user either recieved a hint or got a wrong answer, 10 points are added to te scoreboard.
// - If the user recieved no hint and didn't give a wrong answer, 15 points is added to te scoreboard.
// - With parseInt(time.text()) the seconds left on countdown() are added to the score. 

let score = $("#scoreboard");
let time = $("#countdown_id");

function myScore() {
    const obj = document.getElementById('scoreboard');
    $("#comment").removeClass("hidden").text("Yes, that's it!");
    $("#round-and-score").addClass("marginEndscore");
    let scoreMinusTwo = $("#newImage").hasClass("gotHint") && $("#newImage").hasClass("gotWrongAnswer");
    let scoreMinusOne = $("#newImage").hasClass("gotHint") || $("#newImage").hasClass("gotWrongAnswer");
    if (scoreMinusTwo) {
        var scoreBeforeFunction = parseInt(score.val());
        score.val(parseInt(score.val()) + 5 + parseInt(time.text()));
        var scoreAfterFunction = parseInt(score.val());
        animateValue(obj, scoreBeforeFunction, scoreAfterFunction, 1500); 
    } else if (scoreMinusOne) {
        var scoreBeforeFunction = parseInt(score.val());
        score.val(parseInt(score.val()) + 10 + parseInt(time.text()));
        var scoreAfterFunction = parseInt(score.val());
        animateValue(obj, scoreBeforeFunction, scoreAfterFunction, 1500); 
    } else {
        var scoreBeforeFunction = parseInt(score.val());
        score.val(parseInt(score.val()) + 15 + parseInt(time.text()));
        var scoreAfterFunction = parseInt(score.val());
        animateValue(obj, scoreBeforeFunction, scoreAfterFunction, 1500);
    }
}


// - resetHighScore() clears the localStorage so the highscore is no longer stored. 
// - After clearing localStorage the value of highScore is set to 0.
// - resetHighScore()is triggered by clicking #buttonResetHighScore (button-text: 'Reset').

$("#buttonResetHighScore").click(function() { 
    resetHighScore();
});

/*$("#buttonResetHighScore2020").click(function() { 
    resetHighScore2020()
});*/

function resetHighScore() {
    localStorage.removeItem("highScore")
    document.getElementById("highScore_id").value = 0;
    $(".highScore").addClass("hidden");
    setTimeout(function() {   
        $("#highScoreDiv").addClass("hidden");
        $("aside").removeClass("asideShrink");
    }, 250);
    $("#highScoreDiv").slideUp(800);
};

/*function resetHighScore2020() {
    localStorage.removeItem("highScore2020")
    document.getElementById("highScoreInput2020").value = 0;
    $(".highScore2020").addClass("hidden");
    if ($(".highScoreAllTime").hasClass("hidden")) {
        setTimeout(function () {   
                $("#highScoreDiv").addClass("hidden");
                $("aside").removeClass("asideShrink");
            }, 250);
        $("#highScoreDiv").slideUp(800);
    }
};*/


// - Counting the rounds the player goes through. Value starts with 1 and ends with 10, which is the value of finalRound. 
// - Every time the user clicks #buttonNext myRound() is executed and '1' is added to #round. 

let roundnr = $("#round"); 
let finalRound = 10;
let roundnrVal = 1;

function myRound() {
    roundnr.val(parseInt(roundnr.val()) +1);
    roundnrVal += 1;
    }


// - As long as 'roundnrVal' is smaller than 'finalRound': continue with the game: displayImage().
// - If roundnrVal equals 'finalRound' (10 rounds are played) the game is over. 
// - Then setHighScore() is executed.

function myRoundCounter() { 
    $("#buttonNext").addClass("hidden");
    if (roundnrVal == finalRound) {
        setHighScore()
        $("#comment, #countSp, #timeSp, #headerQuestion, .flip-card-inner").addClass("hidden");
        $("#highScoreDiv").show("slow");
        $("aside").addClass("asideShrink");
        $("#buttonReset").removeClass("hidden");
        $("#textField").val("");
        $("#scoreboard").addClass("endScoreClass").removeClass("scoreboardClass");
        $("#yourScore").removeClass("hidden");
        $('#score-div').contents().appendTo('#time-div')
    } else {
        $('#soundOfNewRound')[0].play();
        $("#comment").addClass("hidden");
        $("#buttonHint, #buttonSubmit").removeClass("hidden");
        $("#textField").removeClass("hidden").val("");
        $("#newImage").removeClass("gotHint gotRightAnswer gotWrongAnswer");
        displayImage();
    }   
};


// - setHighScore() checks whether 'yourScore' is greater than 'highScore'. If that is the case, 'yourScore' is set as the new 'highScore'.
// - Pop-up model is shown with high-score message.


function setHighScore() {
    var yourScore = parseInt($("#scoreboard").val());
    var highScore = parseInt($("#highScore_id").val());
    if ((yourScore > highScore) || ($("#highScore_id").val() == 0)) {
        localStorage.setItem("highScore", yourScore);
        $("#highScore_id").val(localStorage.getItem("highScore"));
        $("#high-score-model-score").val(localStorage.getItem("highScore"));
        modal.style.display = "block"
        $('#soundOfHighScore')[0].play();
    } else if (yourScore === highScore) {
        $("#scoreComment").removeClass("hidden"); 
        $("#scoreComment").text("You matched your own record! But is it really the best you can do?");
    } else {
        commentOnScore();
    }
};


// - commentOnScore() takes care of the comments on the score the user reached at the end of the game. The number of points scored, decide which message.

function commentOnScore() {   
    if (score.val() < 100) { 
        $("#scoreComment").text("Just keep trying...");
    } else if (score.val() < 150) { 
        $("#scoreComment").text("You're getting there!");
    } else if (score.val() < 200) { 
        $("#scoreComment").text("Nice job!");
    } else if (score.val() < 300) { 
        $("#scoreComment").text("Wow, that's impressive!");
    } else if (score.val() < 375) { 
        $("#scoreComment").text("You lengend!");
    } else if (score.val() >= 375) { 
        $("#scoreComment").text("Close to perfection, very impressive");
    } else {
        $("#scoreComment").text("Something went wrong...");
    }
}

$(".buttonAllTime").click(function() { 
    addClassAllTime()
});

function addClassAllTime() {
    $("#newImage").addClass("allTime"); 
    $(".flip-card").removeClass("hidden");
    $("#buttonStart").removeClass("hidden");
    $("#choiseOfGame").addClass("hidden");
    document.getElementById("newImage").src = "images/start-questionmarkAllTime.png";
    document.getElementById("newImageBack").src = "images/start-questionmarkAllTime.png";
    $("#headerQuestion").text("Who is this Cyclist?");
}; 

$(".button2020").click(function() { 
    addClass2020()
});

function addClass2020() {
    $("#newImage").addClass("2020"); 
    $(".flip-card").removeClass("hidden");
    $("#buttonStart").removeClass("hidden");
    $("#choiseOfGame").addClass("hidden");
    document.getElementById("newImage").src = "images/start-questionmark2020.png";
    document.getElementById("newImageBack").src = "images/start-questionmark2020.png";
    $("#headerQuestion").text("Who is this Cyclist?");
}; 

// - displayImage() runs through images-array and selects a random image out of images[]. 
// - Already used images are not used again, but stored in UserImages[], so no user gets the same image twice in the same game.
// - If a image stored in UserImages[] is selected, displayImage() is run again untill a new image is selected.
// - If usedImages[] contains 10 images, the game is done and the array is made empty.

var imagesEurope = ['images/europe/europe-01-empty.png', 'images/europe/europe-02-empty.png', 'images/europe/europe-03-empty.png', 
                     'images/europe/europe-04-empty.png', 'images/europe/europe-05-empty.png', 'images/europe/europe-06-empty.png', 
                     'images/europe/europe-07-empty.png', 'images/europe/europe-08-empty.png', 'images/europe/europe-09-empty.png', 
                     'images/europe/europe-10-empty.png', 'images/europe/europe-11-empty.png', 'images/europe/europe-12-empty.png', 
                     'images/europe/europe-13-empty.png', 'images/europe/europe-14-empty.png', 'images/europe/europe-15-empty.png',];
var images2020 = ['images/2020/cyclist-2020-1-empty.png', 'images/2020/cyclist-2020-2-empty.png', 'images/2020/cyclist-2020-3-empty.png',
                  'images/2020/cyclist-2020-4-empty.png', 'images/2020/cyclist-2020-5-empty.png', 'images/2020/cyclist-2020-6-empty.png',
                  'images/2020/cyclist-2020-7-empty.png', 'images/2020/cyclist-2020-8-empty.png', 'images/2020/cyclist-2020-9-empty.png',
                  'images/2020/cyclist-2020-10-empty.png', 'images/2020/cyclist-2020-11-empty.png', 'images/2020/cyclist-2020-12-empty.png',
                  'images/2020/cyclist-2020-13-empty.png', 'images/2020/cyclist-2020-14-empty.png', 'images/2020/cyclist-2020-15-empty.png',
                  'images/2020/cyclist-2020-16-empty.png', 'images/2020/cyclist-2020-17-empty.png', 'images/2020/cyclist-2020-18-empty.png',
                  'images/2020/cyclist-2020-19-empty.png', 'images/2020/cyclist-2020-20-empty.png'];
var usedImages = [];
var usedImagesCount = 0;

function displayImage() {
    var num = Math.floor(Math.random() *15);
    if (!usedImages[num]) {
            document.getElementById("newImage").src = imagesEurope[num];
            document.getElementById("newImageBack").src = imagesEurope[num];
        usedImages[num] = true;
        usedImagesCount++;
        if (usedImagesCount === 10) {
            usedImagesCount = 0;
            usedImages = [];
        }
    } else {
        displayImage();
    }
} 

// startCountdown() is the function that handels the timelimit.
// Every new round 'timeleft' is set at 24, because it starts after one second. In index.html 'timeleft' is hardcoded as 25.
// The color of 'timeleft' changes from green, to orange, to red, depending on the time left.
// If timeLeft is down to -1, the timer is stopped and timesUp() runs.

function startCountdown() {
    var timeLeft = 29;
    var elem = document.getElementById('countdown_id');
    $('#countdown_id').html(30).addClass("green").removeClass("orange red");
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
        }
    }
};


// timesUp() is called when the user is out of time. 
// If it's not the last image: answer is shown and user gets message.
// If it is the last image: text on button is changed aswell.

function timesUp() {
    showAnswer();
    if (roundnrVal < 11) {
        $("#newImage, #newImageBack").removeClass('blur');
        $("#comment").removeClass("hidden").text("Sorry, you're out of time. No score...");
        $("#buttonTryAgain, #buttonGiveUp").addClass("hidden");
        $("#buttonNext").removeClass("hidden");
        $("#buttonHint, #buttonSubmit, #textField").addClass("hidden");
    }
    if (roundnrVal == 10) {
        changeButtonNext();
    }
};

// After the last image is flipped, text on #buttonNext is changed to "Get to the finish".

function changeButtonNext() {   
    if (roundnrVal == 10) {
        $("#buttonNext").html("Get to the finish");
    }
};

// - The Next-Button triggers myRoundCounter(), myRound() and startCountdown(). 
// - The timeout fixes the issue with clicking really fast and the immage not changing to another rider. 
// ***NOT TESTED PROPERLY YET SEEMS TO HAVE EFFECT ON COUNTDOWN SO REMOVED. PERHAPS ONLY GIVE myRoundCounter THE TIMEOUT?***


$("#buttonNext").click(function() {  
    myRoundCounter();
    myRound(); 
    startCountdown();
});


// - startGame() starts the game and fires displayImage() and hideHeader()
// - hideHeader(): header is hidden on devices smaller than 700px (after the game starts).

function startGame(){
    displayImage();
    hideHeader();
    $("#buttonStart, #buttonHowToPlayTheGame, #headerQuestion").addClass("hidden");
    $("#buttonHint, #buttonSubmit, #textField, #round-and-score").removeClass("hidden");
    $("#buttonAllTime").addClass("hidden");
    $("#button2020").addClass("hidden");
}

function hideHeader() {
    var headerScreenSize = window.matchMedia("(max-width: 700px)");
    if (headerScreenSize.matches) { 
        $("header").addClass("hidden");
    }
};

// - The Start-Button triggers startGame().

$("#buttonStart").click(function() {
    startGame();    
    startCountdown();
});

// - Flip() is used to make the main image flip.
// - Flip() takes 600ms. 

$(function() {
    $(".flip-card-inner").flip({ 
        trigger: "manual", speed: 600
    });
});

 
// - giveHint() flips the main image.
// - The empty-image is replaced by the flag-image, which means the flag of the cyclists nation is show after flip().
// - The class 'GotHint' is added to the image, to let the scoreboard know the user got a hint (that costs a point).
// - The hint-button is hidden for the remainder of the round.
// - setTimeout() is set to 200ms to make sure the new image isn't visible before flip() is done far enough.  

function giveHint() {
    scrollToTop();
    $('#soundOfFlip')[0].play();
    var addHintToImg = $("#newImage, #newImageBack").attr('src').replace("-empty.png", "-flag.png");   
    $("#buttonHint").addClass("hidden");  
    $("#newImage").addClass("gotHint");          
    $(".flip-card-inner").flip('toggle');
        setTimeout(function () {   
            $("#newImage, #newImageBack").attr('src', addHintToImg);
        }, 200);
} 

// - The Hint Button triggers giveHint()

$("#buttonHint").click(function() {
    giveHint();
});

// - showAnswer() flips the main image.
// - clearInterval(window.timerId) stop countdown()
// - The empty-image is replaced by the image with the name of the cyclist and the flag of his nation after flip().
// - The flag-image is replaced by the image with the name of the cyclist and the flag of his nation after flip().

function showAnswer() {
    clearInterval(window.timerId);  
    $(".flip-card-inner").flip('toggle');
    setTimeout(function () {
        $("#newImage, #newImageBack").attr('src', addAnswerToImage);  
    }, 200);
    var addAnswerToImage = $("#newImage, #newImageBack").attr('src').replace("-empty", "").replace("-flag", "");
} 


// - wrongAnswer() is triggered after a wrong answer is given.
// - The image is blurred.
// - If the user has given a wrong answer twice, showAnswer() is run and message "Sorry, no score" is shown.
// - If it is the first wrong answer: "Nope, that's mot him is shown"

function wrongAnswer() { 
    $('#soundOfWrongAnswer')[0].play();
    if ($("#newImage").hasClass("gotWrongAnswer")) {
        showAnswer();
        // var timeoutTest = setTimeout(function() {   
            $("#buttonNext").removeClass("hidden"); 
        // }, 1200);
        $("#comment").removeClass("hidden").text("Sorry, no score");
    } else {
        $("#newImage").addClass("blur");
        $("#newImage").addClass("gotWrongAnswer"); 
        $("#newImageBack").addClass("blur");
        $("#comment").removeClass("hidden").text("Nope, that's not it");
        $("#buttonTryAgain, #buttonGiveUp").removeClass("hidden");
        $("#buttonNext").addClass("hidden");  
    }
}


// - scrollToTop() takes care of an issue on mobile.
// - Now after an answer is given, the user is automatically scrolled up to the top of the window.
// - This way the image is in the view.

function scrollToTop() {
    var headerScreenSize = window.matchMedia("(max-width: 700px)");
    if (headerScreenSize.matches) { 
        $(window).scrollTop(0);
    }
};


// - checkAnswer() checks the given answer against the right answer.
// - All answer are turned to uppercase, to make sure the use of upper- or lowercase doesn't have any influence.
// - If the answer is correct showAnswer() and myScore() are executed.
// - If the answer is wrong, wrongAnswer() is executed.
// - Giving a wrong answer again will make the right answer appear. No point are given.

function checkAnswer() {
    scrollToTop();
    changeButtonNext();
    $("#buttonNext").removeClass("hidden");
    $("#buttonHint, #buttonSubmit, #textField").addClass("hidden");
    let answer = $("#textField").val().toUpperCase(); 
    let imageSource = $("#newImage").attr('src');
    
    let paris = (imageSource.indexOf("europe-01-") > -1 && answer == "PARIS");
    let madrid = (imageSource.indexOf("europe-02-") > -1 && answer == "MADRID");
    let amsterdam = (imageSource.indexOf("europe-03-") > -1 && answer == "AMSTERDAM");
    let london = (imageSource.indexOf("europe-04-") > -1 && answer == "LONDON");
    let berlin = (imageSource.indexOf("europe-05-") > -1 && answer == "BERLIN");
    
    let rome = (imageSource.indexOf("europe-06-") > -1 && answer == "ROME");
    let oslo = (imageSource.indexOf("europe-07-") > -1 && answer == "OSLO");
    let lisbon = (imageSource.indexOf("europe-08-") > -1 && answer == "LISBON");
    let brussels = (imageSource.indexOf("europe-09-") > -1 && answer == "BRUSSELS");
    let bern = (imageSource.indexOf("europe-10-") > -1 && answer == "BERN");
    
    let vienna = (imageSource.indexOf("europe-11-") > -1 && answer == "VIENNA");
    let prague = (imageSource.indexOf("europe-12-") > -1 && answer == "PRAGUE");
    let warsaw = (imageSource.indexOf("europe-13-") > -1 && answer == "WARSAW");
    let kiev = (imageSource.indexOf("europe-14-") > -1 && answer == "KIEV");
    let sofia = (imageSource.indexOf("europe-15-") > -1 && answer == "SOFIA");

    if  (paris || madrid || amsterdam || london || berlin || rome || oslo || lisbon ||
        brussels || bern || vienna || prague || warsaw || kiev || sofia) {
        $('#soundOfRightAnswer')[0].play();
        showAnswer();    
        myScore();
    } else {
        wrongAnswer();
    }
};

// - The Submit Button triggers checkAnswer().

$("#buttonSubmit").click(function() {
    checkAnswer();
});

//- When the player is in the textfield, hitting 'Enter' on the key board will call checkAnswer() 

$("#textField").keypress(function(event) {
    if (event.which == 13) {
       checkAnswer();
    }
}); 

// - tryAgain() is triggered if the user wants another try after a wrong answer, by clicking #buttonTryAgain:
// - The 'blur'-class is removed.

function tryAgain() {
    $('#soundTryAgain')[0].play();
    $("#newImage, #newImageBack").removeClass('blur');
    $("#comment, #buttonTryAgain, #buttonGiveUp").addClass("hidden");
    $("#buttonSubmit, #textField").removeClass("hidden");
    if ($("#newImage").attr('src').endsWith("empty.png")) {
        $("#buttonHint").removeClass("hidden");
    } else if ($("#newImage").attr('src').endsWith("flag.png")) {
        $("#buttonHint").addClass("hidden");
    }
};

$("#buttonTryAgain").click(function() {
    tryAgain()     
});

 
// - giveUp() is triggered if the user gives up after a wrong answer, by clicking #buttonGiveUp:
// - showAnswer() is run.
// - The "Sorry, no score"-message shows.

function giveUp() {
    $('#soundOfFlip')[0].play();
    showAnswer();
    $("#newImage, #newImageBack").removeClass('blur');
    $("#comment").removeClass("hidden").text("Sorry, no score");
    $("#buttonTryAgain, #buttonGiveUp").addClass("hidden");
    $("#buttonNext").removeClass("hidden");
};

$("#buttonGiveUp").click(function() {
    giveUp();
});


// - Get the modal
var modal = document.getElementById("high-score-modal");

// - Get the button that opens the modal
var btn = document.getElementById("myBtn");

// - Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// - When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// - When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// - Reset the game after finishing it by clicking the Play Again-button

$("#buttonReset").click(function() {
    window.location.reload();
});

// - Reset the game by clicking button in the sidemenu 

$("#buttonResetMenu").click(function() {
    window.location.reload();
});

// -For Mobile only: Jump down the page for an explanation of the rules and back up again to start the game.

function explainGame() {
    window.location.href = '#sidebar';
  }

$("#buttonHowToPlayTheGame").click(function() {
    explainGame();
});

function goBackUp() {
    window.location.href = '#headerQuestion'; 
    if ($("#headerQuestion").hasClass("hidden")) {
        window.location.href = '#round-and-score';
    }
  }

$("#buttonGoBackUp").click(function() {
    goBackUp();
});
