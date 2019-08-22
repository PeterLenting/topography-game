jQuery(document).ready();

var score = $("#scoreboard");

/*COUNTING THE ROUNDS */
var roundnr = $("#round"); 

function myRound() {
    roundnr.val( parseInt(roundnr.val()) +1 );
    roundnrVal += 1;
    }

/*IF ROUNDS COUNTED IS BIGGER THAN 10, STOP displayImage() */

var numberOfRounds = 10;
var roundnrVal = 2;

function myRoundCounter() { 
    $("#buttonNext").addClass("hidden");
    if (roundnrVal > numberOfRounds) {
        commentOnScore();
        $("#comment").addClass("hidden");
        $("#buttonReset").removeClass("hidden");
        $("#textField").val("");
        $("#count").addClass("hidden");
        $(".flip-card-inner").addClass("hidden");
        $("#headerQuestion").addClass("hidden");
        $("#scoreboard").addClass("endScoreClass").removeClass("scoreboardClass");
        $("#yourScore").removeClass("hidden");
        $("#scoreboardSp").css("color", "#FEE801");
        } else {
        $("#comment").addClass("hidden");
        $("#buttonHint").removeClass("hidden");
        $("#buttonNextImage").removeClass("hidden");
        $("#textField").removeClass("hidden").val("");
        $("#newImage").removeClass("gotHint gotRightAnswer gotWrongAnswer");
        displayImage();
    }   
}

var images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 
              'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 
              'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 
              'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 
              'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png', 'images/cyclist-15-empty.png'];

var usedImages = [];
var usedImagesCount = 0;

/*Run through images-array and show random image until 10 (out of 15) are shown. */

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

/*Next Button*/
$("#buttonNext").click(function() {
    myRoundCounter();
    myRound();    
});

/*Show the first random image from the images-array*/
function functionStartGame(){
    var headerScreenSize = window.matchMedia("(max-width: 700px)");
        displayImage();
        $("#buttonStart").addClass("hidden");
        $("#buttonHint").removeClass("hidden");
        $("#buttonNextImage").removeClass("hidden");
        $("#textField").removeClass("hidden");
        $("#scoreboardSp").removeClass("hidden");
        $("#count").removeClass("hidden");
        $("#round").removeClass("hidden");
        $("#buttonHowToPlayTheGame").addClass("hidden");
        if (headerScreenSize.matches) { 
            $("header").addClass("hidden");
          } else {
}
}

/*Clicking the Start Button*/
$("#buttonStart").click(function() {
    functionStartGame();        
});

/*Flip-function is used to make the image flip when click on #buttonHint and when the right answer is given*/
$(function() {
    $(".flip-card-inner").flip({ 
        trigger: "manual", speed: 600
    });
});
 
/*functionGiveHint*/
function functionGiveHint() {
    var nSrcHint = $("#newImage").attr('src').replace("-empty.png", "-flag.png");   
    var nSrcBHint = $("#newImageBack").attr('src').replace("-empty.png", "-flag.png"); 
    $("#buttonHint").addClass("hidden");  
    $("#newImage").addClass("gotHint");          
    $(".flip-card-inner").flip('toggle');
        setTimeout(function () {   
            $("#newImage").attr('src', nSrcHint);
            $("#newImageBack").attr('src', nSrcBHint);
        }, 200);
} 

/* Clicking the Hint Button*/
$("#buttonHint").click(function() {
    functionGiveHint();
});
                                                                          
/*THIS IS HOW THE SCOREBOARD WORKS */
function myScore() {
    $("#comment").removeClass("hidden").text("Yes, that's him!");
    if ($("#newImage").hasClass("gotHint") &&  $("#newImage").hasClass("gotWrongAnswer")) {
        score.val( parseInt(score.val()) + 1 ); 
    } else if ($("#newImage").hasClass("gotHint") || $("#newImage").hasClass("gotWrongAnswer")) {
        score.val( parseInt(score.val()) + 2 ); 
    } else {
        score.val( parseInt(score.val()) + 3 );
    }
}  
/*THE COMMENTS AFTER THE FINAL SCORE */
function commentOnScore() {    
    if (score.val() < 10) {
        $("#scoreComment").removeClass("hidden").text("Maybe you should try again?");
    } else if (score.val() < 15) { 
        $("#scoreComment").removeClass("hidden").text("Not too bad!");
    } else if (score.val() < 20) { 
        $("#scoreComment").removeClass("hidden").text("You're getting there!");
    } else if (score.val() < 25) { 
        $("#scoreComment").removeClass("hidden").text("Nice job!");
    } else if (score.val() < 29) { 
        $("#scoreComment").removeClass("hidden").text("Wow, that's impressive!");
    } else if (score.val() == 30) { 
        $("#scoreComment").removeClass("hidden").text("You're a true champion!");
    } else {
        $("#scoreComment").removeClass("hidden").text("Something went wrong...");
    }
}

/*THIS IS HOW FLIP ON RIGHT ANSWER WORKS*/
function rightAnswer() {
    
    var nSrc = $("#newImage").attr('src').replace("-empty", "").replace("-flag", "");  
        $(".flip-card-inner").flip('toggle');
        setTimeout(function () {
            $("#newImage").attr('src', nSrc);
            $("#newImageBack").attr('src', nSrc);    
        }, 200);
    }        
 
/*CHECK ANSWER*/
 function runGame() {
    $("#buttonNext").removeClass("hidden");
    $("#buttonHint").addClass("hidden");
    $("#buttonNextImage").addClass("hidden");
    $("#textField").addClass("hidden");
    var answer = $("#textField").val(); 
    var nSrc = $("#newImage").attr('src').replace("-empty", "").replace("-flag", "");
               $("#newImageBack").attr('src').replace("-empty", "").replace("-flag", "");
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
                        $("#newImage").attr('src', nSrc);
                        $("#newImageBack").attr('src', nSrc);
                        $("#buttonNext").removeClass("hidden");
                        $("#comment").removeClass("hidden").text("Sorry, no score");
                        $("#newImage").removeClass('blur');
                        $("#newImageBack").removeClass('blur');
                    } else {
                        $("#comment").removeClass("hidden").text("Nope, that's not him");
                        $("#buttonAnotherTry").removeClass("hidden");
                        $("#buttonGiveUp").removeClass("hidden"); 
                        $("#buttonNext").addClass("hidden");
                        $("#newImage").addClass("gotWrongAnswer");   
                    }
                }
            }

$("#buttonNextImage").click(function() {
    runGame();
});

/*When the player is in the textfield, hitting 'Enter' on the key board will call runGame() */
$( "#textField" ).keypress(function( event ) {
    if ( event.which == 13 ) {
       runGame();
    }
  }); 

/*After Wrong Answer */
/*The player wants another try*/
$("#buttonAnotherTry").click(function() {
    $("#newImage").removeClass('blur');
    $("#newImageBack").removeClass('blur');
    $("#comment").addClass("hidden");
    $("#buttonAnotherTry").addClass("hidden");
    $("#buttonGiveUp").addClass("hidden");
    $("#buttonNextImage").removeClass("hidden");
    $("#textField").removeClass("hidden");
    if ($("#newImage").attr('src').endsWith("empty.png")) {
        $("#buttonHint").removeClass("hidden");
    } else if ($("#newImage").attr('src').endsWith("flag.png")) {
        $("#buttonHint").addClass("hidden");
    }     
});

/*The player gives up*/
$("#buttonGiveUp").click(function() {
    rightAnswer();
    $("#newImage").removeClass('blur');
    $("#newImageBack").removeClass('blur');
    $("#comment").removeClass("hidden").text("Sorry, no score");
    $("#buttonAnotherTry").addClass("hidden");
    $("#buttonGiveUp").addClass("hidden");
    $("#buttonNext").removeClass("hidden");
});

/*Reset the game after finishing it */
$(function(){

    $("#buttonReset").click(function() {
        window.location.reload();
    });});

/*For Mobile only: Jump down the page for an explanation of the rules and back up again to start the game */
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