
window.onload = function() {
    var highScoreInput2020 = localStorage.getItem("highScore2020");
    document.getElementById("highScoreInput2020").value = highScoreInput2020
    var highScoreInputAllTime = localStorage.getItem("highScoreAllTime");
    document.getElementById("highScoreInputAllTime").value = highScoreInputAllTime
  if (highScoreInput2020 || highScoreInputAllTime ) {
      $("#highScoreDiv").removeClass("hidden");
      $("aside").addClass("asideShrink");
      if (highScoreInput2020) {
          $(".highScore2020").removeClass("hidden");
      }
      if (highScoreInputAllTime) {
          $(".highScoreAllTime").removeClass("hidden");
      }
  } else {
      $("aside").removeClass("asideShrink");
      $("#highScoreDiv").addClass("hidden");
  }
};


// - resetHighScore() clears the localStorage so the highscore is no longer stored. 
// - After clearing localStorage the value of highScore is set to 0.
// - resetHighScore()is triggered by clicking #buttonResetHighScore (button-text: 'Reset').

$("#buttonResetHighScoreAllTime").click(function() { 
    resetHighScoreAllTime()
});

$("#buttonResetHighScore2020").click(function() { 
    resetHighScore2020()
});

function resetHighScoreAllTime() {
    localStorage.removeItem("highScoreAllTime")
    document.getElementById("highScoreInputAllTime").value = 0;
    $(".highScoreAllTime").addClass("hidden");
    if ($(".highScore2020").hasClass("hidden")) {
        setTimeout(function () {   
                $("#highScoreDiv").addClass("hidden");
                $("aside").removeClass("asideShrink");
            }, 250);
        $("#highScoreDiv").slideUp(800);
    }
};

function resetHighScore2020() {
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
};


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
    if ($("#newImage").hasClass("allTime")) {
        var yourScoreAllTime = parseInt($("#scoreboard").val());
        var highScoreAllTime = parseInt($("#highScoreInputAllTime").val());
        if ((yourScoreAllTime > highScoreAllTime) || ($("#highScoreInputAllTime").val() == 0)) {
            $(".highScoreAllTime").removeClass("hidden");
            localStorage.setItem("highScoreAllTime", yourScoreAllTime);
            $("#highScoreInputAllTime").val(localStorage.getItem("highScoreAllTime"));
            $("#high-score-model-score").val(localStorage.getItem("highScoreAllTime"));
            modal.style.display = "block" 
        } else if (yourScoreAllTime === highScoreAllTime) {
        $("#scoreComment").removeClass("hidden"); 
        $("#scoreComment").text("You matched your own record! But is it really the best you can do?");
        } else {
            commentOnScore();
        }
    } else if ($("#newImage").hasClass("2020")) {
        var yourScore2020 = parseInt($("#scoreboard").val());
        var highScore2020 = parseInt($("#highScoreInput2020").val());
        if ((yourScore2020 > highScore2020) || ($("#highScoreInput2020").val() == 0)) {
            $(".highScore2020").removeClass("hidden");
            localStorage.setItem("highScore2020", yourScore2020);
            $("#highScoreInput2020").val(localStorage.getItem("highScore2020"));
            $("#high-score-model-score").val(localStorage.getItem("highScore2020"));
            modal.style.display = "block" 
        } else if (yourScore2020 === highScore2020) {
        $("#scoreComment").removeClass("hidden"); 
        $("#scoreComment").text("You matched your own record! But is it really the best you can do?");
        } else {
            commentOnScore();
        }
    }
};


// - commentOnScore() takes care of the comments on the score the user reached at the end of the game. The number of points scored, decide which message.

function commentOnScore() {   
    /*yourScore = parseInt($("#scoreboard").val());
    highScore = parseInt($("#highScoreInput").val());
    $("#scoreComment").removeClass("hidden"); 
    if (highScore - yourScore < 25) {
        $("#scoreComment").text("So close! Give it another go!");
    } else*/ if (score.val() < 100) { 
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

var imagesAllTime = ['images/alltime/cyclist-alltime-1-empty.png', 'images/alltime/cyclist-alltime-2-empty.png', 'images/alltime/cyclist-alltime-3-empty.png', 
                     'images/alltime/cyclist-alltime-4-empty.png', 'images/alltime/cyclist-alltime-5-empty.png', 'images/alltime/cyclist-alltime-6-empty.png', 
                     'images/alltime/cyclist-alltime-7-empty.png', 'images/alltime/cyclist-alltime-8-empty.png', 'images/alltime/cyclist-alltime-9-empty.png', 
                     'images/alltime/cyclist-alltime-10-empty.png', 'images/alltime/cyclist-alltime-11-empty.png', 'images/alltime/cyclist-alltime-12-empty.png', 
                     'images/alltime/cyclist-alltime-13-empty.png', 'images/alltime/cyclist-alltime-14-empty.png', 'images/alltime/cyclist-alltime-15-empty.png',
                     'images/alltime/cyclist-alltime-16-empty.png', 'images/alltime/cyclist-alltime-17-empty.png', 'images/alltime/cyclist-alltime-18-empty.png',
                     'images/alltime/cyclist-alltime-19-empty.png', 'images/alltime/cyclist-alltime-20-empty.png'];
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
    var num = Math.floor(Math.random() *20);
    if (!usedImages[num]) {
        if ($("#newImage").hasClass("allTime")) {
            document.getElementById("newImage").src = imagesAllTime[num];
            document.getElementById("newImageBack").src = imagesAllTime[num];
        }
        else if($("#newImage").hasClass("2020")) {
            document.getElementById("newImage").src = images2020[num];
            document.getElementById("newImageBack").src = images2020[num];
        }
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
    
// - myScore() takes care of the scoreboard and the comments after each correct answer.
// - "Yes, that's him" is shown after a correct answer.
// - If the user recieved a hint and got a wrong answer, 5 points are added to te scoreboard.
// - If the user either recieved a hint or got a wrong answer, 10 points are added to te scoreboard.
// - If the user recieved no hint and didn't give a wrong answer, 15 points is added to te scoreboard.
// - With parseInt(time.text()) the seconds left on countdown() are added to the score. 

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
 
// - checkAnswer() checks the given answer against the right answer.
// - All answer are turned to uppercase, to make sure the use of upper- or lowercase doesn't have any influence.
// - If the answer is correct showAnswer() and myScore() are executed.
// - If the answer is wrong, wrongAnswer() is executed.
// - Giving a wrong answer again will make the right answer appear. No point are given.
/*
function showAnswer() {
    let flipToAnswer = $("#newImage, #newImageBack").attr('src').replace("-empty", "").replace("-flag", "");
    clearInterval(window.timerId); 
    $(".flip-card-inner").flip('toggle');
    setTimeout(function () {
        $("#newImage, #newImageBack").attr('src', flipToAnswer);  
    }, 200);
} 
*/

// - wrongAnswer() is triggered after a wrong answer is given.
// - The image is blurred.
// - If the user has given a wrong answer twice, showAnswer() is run and message "Sorry, no score" is shown.
// - If it is the first wrong answer: "Nope, that's mot him is shown"


function wrongAnswer() {  
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
        $("#comment").removeClass("hidden").text("Nope, that's not him");
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


function checkAnswer() {
    scrollToTop();
    changeButtonNext();
    $("#buttonNext").removeClass("hidden");
    $("#buttonHint, #buttonSubmit, #textField").addClass("hidden");
    let answer = $("#textField").val().toUpperCase(); 
    let imageSource = $("#newImage").attr('src');
    
    let jacquesAnquetil = (imageSource.indexOf("alltime-1-") > -1 && answer == "JACQUES ANQUETIL");
    let lanceArmstrong = (imageSource.indexOf("alltime-2-") > -1 && answer == "LANCE ARMSTRONG");
    let ginoBartali = (imageSource.indexOf("alltime-3-") > -1 && answer == "GINO BARTALI");
    let faustoCoppi = (imageSource.indexOf("alltime-4-") > -1 && answer == "FAUSTO COPPI");
    let miguelIndurain = (imageSource.indexOf("alltime-5-") > -1 && answer == "MIGUEL INDURAIN");
    
    let bernardHinault = (imageSource.indexOf("alltime-6-") > -1 && answer == "BERNARD HINAULT");
    let louisonBobet = (imageSource.indexOf("alltime-7-") > -1 && answer == "LOUISON BOBET");
    let joopZoetemelk = (imageSource.indexOf("alltime-8-") > -1 && answer == "JOOP ZOETEMELK");
    let eddyMerckx = (imageSource.indexOf("alltime-9-") > -1 && answer == "EDDY MERCKX");
    let seanKelly = (imageSource.indexOf("alltime-10-") > -1 && answer == "SEAN KELLY");
    
    let alfredoBinda = (imageSource.indexOf("alltime-11-") > -1 && answer == "ALFREDO BINDA");
    let rikVanSteenbergen = (imageSource.indexOf("alltime-12-") > -1 && answer == "RIK VAN STEENBERGEN");
    let oscarFreire = (imageSource.indexOf("alltime-13-") > -1 && answer == "OSCAR FREIRE");
    let laurentJalabert = (imageSource.indexOf("alltime-14-") > -1 && answer == "LAURENT JALABERT");
    let marcoPantani = (imageSource.indexOf("alltime-15-") > -1 && answer == "MARCO PANTANI");
    
    let gregLemond = (imageSource.indexOf("alltime-16-") > -1 && answer == "GREG LEMOND");
    let laurentFignon = (imageSource.indexOf("alltime-17-") > -1 && answer == "LAURENT FIGNON");
    let janJanssen = (imageSource.indexOf("alltime-18-") > -1 && answer == "JAN JANSSEN");
    let rogerDeVlaeminck = (imageSource.indexOf("alltime-19-") > -1 && answer == "ROGER DE VLAEMINCK");
    let federicoBahamontes = (imageSource.indexOf("alltime-20-") > -1 && answer == "FEDERICO BAHAMONTES");

    let julianAlaphilippe = (imageSource.indexOf("2020-1-") > -1 && answer == "JULIAN ALAPHILIPPE");
    let eganBernal = (imageSource.indexOf("2020-2-") > -1 && answer == "EGAN BERNAL");
    let arnaudDemare = (imageSource.indexOf("2020-3-") > -1 && answer == "ARNAUD DEMARE");
    let madsPedersen = (imageSource.indexOf("2020-4-") > -1 && answer == "MADS PEDERSEN");
    let jakobFuglsang = (imageSource.indexOf("2020-5-") > -1 && answer == "JAKOB FUGLSANG");  
    
    let stevenKruijswijk = (imageSource.indexOf("2020-6-") > -1 && answer == "STEVEN KRUIJSWIJK");
    let vincenzoNibali = (imageSource.indexOf("2020-7-") > -1 && answer == "VINCENZO NIBALI");
    let primozRoglic = (imageSource.indexOf("2020-8-") > -1 && answer == "PRIMOZ ROGLIC");
    let mathieuVanDerPoel = (imageSource.indexOf("2020-9-") > -1 && answer == "MATHIEU VAN DER POEL");
    let gregVanAvermaet = (imageSource.indexOf("2020-10-") > -1 && answer == "GREG VAN AVERMAET");  

    let peterSagan = (imageSource.indexOf("2020-11-") > -1 && answer == "PETER SAGAN");
    let tadejPogacar = (imageSource.indexOf("2020-12-") > -1 && answer == "TADEJ POGACAR");
    let woutVanAert = (imageSource.indexOf("2020-13-") > -1 && answer == "WOUT VAN AERT");
    let samBennett = (imageSource.indexOf("2020-14-") > -1 && answer == "SAM BENNETT");
    let tomDumoulin = (imageSource.indexOf("2020-15-") > -1 && answer == "TOM DUMOULIN"); 

    let calebEwan = (imageSource.indexOf("2020-16-") > -1 && answer == "CALEB EWAN");
    let remcoEvenepoel = (imageSource.indexOf("2020-17-") > -1 && answer == "REMCO EVENEPOEL");
    let alexanderKristoff = (imageSource.indexOf("2020-18-") > -1 && answer == "ALEXANDER KRISTOFF");
    let baukeMollema = (imageSource.indexOf("2020-19-") > -1 && answer == "BAUKE MOLLEMA");
    let mikelLanda = (imageSource.indexOf("2020-20-") > -1 && answer == "MIKEL LANDA"); 

    if  ($("#newImage").hasClass("allTime") && jacquesAnquetil || lanceArmstrong || ginoBartali || faustoCoppi || miguelIndurain || bernardHinault ||
        louisonBobet || joopZoetemelk || eddyMerckx || seanKelly || alfredoBinda || rikVanSteenbergen || oscarFreire || laurentJalabert || marcoPantani ||
        gregLemond || laurentFignon || janJanssen || rogerDeVlaeminck || federicoBahamontes) {
        showAnswer();    
        myScore();
        }
    else if ($("#newImage").hasClass("2020") && julianAlaphilippe || eganBernal || arnaudDemare || madsPedersen || jakobFuglsang || stevenKruijswijk || vincenzoNibali || primozRoglic ||
        mathieuVanDerPoel || gregVanAvermaet || peterSagan || tadejPogacar || woutVanAert || samBennett || tomDumoulin || calebEwan || remcoEvenepoel ||
        alexanderKristoff || baukeMollema || mikelLanda) {
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


// - Reset the game after finishing it by clicking the Play Again-button. 

    $("#buttonReset").click(function() {
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
