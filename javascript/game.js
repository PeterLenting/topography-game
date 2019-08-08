jQuery(document).ready();
/*COUNTING THE ROUNDS */
var roundnrs = 0; 
function myRound() {
    var roundnr = $("#round");
{
    roundnr.val( parseInt(roundnr.val()) + 1 );
    }}


let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png', 'images/cyclist-15-empty.png'];

var usedImages = {};
var usedImagesCount = 0;

/*Run through images-array and show random image until 10 (out of 15) are shown. */

function displayImage(){

    var num = Math.floor(Math.random() *11);
    if (!usedImages[num]){
        document.getElementById("newImage").src = images[num];
        document.getElementById("newImageBack").src= images[num];
        usedImages[num] = true;
        usedImagesCount++;
        if (usedImagesCount === images.length){
            usedImagesCount = 0;
            usedImages = {};
        }
        if (roundnr.val > 10){
            $('#comment').text("Game Over");
            $('#flip-card-inner').addClass("hidden");
        }
    } else {
        displayImage();
    }
}

$(function(){

    $("#buttonStart").click(function(){
        let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png', 'images/cyclist-15-empty.png'];

var usedImages = {};
var usedImagesCount = 0;

function displayImage(){

    var num = Math.floor(Math.random() *11);
    if (!usedImages[num]){
        document.getElementById("newImage").src = images[num];
        document.getElementById("newImageBack").src= images[num];
        usedImages[num] = true;
        usedImagesCount++;
        if (usedImagesCount === images.length){
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        displayImage();
    }
} 
        $("#buttonStart").addClass("hidden");
        $("#buttonHint").removeClass("hidden");
        $("#buttonNewImage").removeClass("hidden");
        $("#textField").removeClass("hidden");
        $("#scorebord").removeClass("hidden");
        $("#scorebordSp").removeClass("hidden");
        $("#count").removeClass("hidden");
        $("#round").removeClass("hidden");
        $("header").addClass("hidden");
        $("#buttonHowToPlayTheGame").addClass("hidden");
    });});

/*Hint Button*/

    $(function(){
    
$(".flip-card-inner").flip({ 
    trigger: "manual",
    speed: 600
});
 

$("#buttonHint").click(function(){
varnSrcHint = $("#newImage").attr('src').replace("-empty.png", "-flag.png");   
              $("#newImageBack").attr('src').replace("-empty.png", "-flag.png"); 
              $("#buttonHint").addClass("hidden");  
              $("#newImage").addClass("gotHint");           
              if ($("#newImage").css("z-index") > "0")
              {
                  $(".flip-card-inner").flip(true);
                  setTimeout(function () {
                      $("#newImage").attr('src', varnSrcHint);
                      $("#newImageBack").attr('src', varnSrcHint);    
                  }, 300);
              } else {
                  $(".flip-card-inner").flip(false);
                  setTimeout(function () {
                      $("#newImage").attr('src', varnSrcHint);
                      $("#newImageBack").attr('src', varnSrcHint);    
                  }, 300);
              
                    }});  });
                                                                          

/*Next Button*/
$("#buttonNext").click(function(){
                          $("#buttonNext").addClass("hidden");
                          $("#comment").addClass("hidden");
                          $("#buttonHint").removeClass("hidden");
                          $("#buttonNewImage").removeClass("hidden");
                          $("#textField").removeClass("hidden").val("");
                          $("#newImage").removeClass("gotHint gotRightAnswer gotWrongAnswer");
                          myRound()  
                        });

/*THIS IS HOW THE SCOREBORD WORKS */
function myScore() {
    var $score = $("#scorebord");
    $("#comment").removeClass("hidden").text("Yes, that's him!");
if
($("#newImage").hasClass("gotHint") &&  $("#newImage").hasClass("gotWrongAnswer"))
{
$score.val( parseInt($score.val()) + 1 );
}
else if
($("#newImage").hasClass("gotHint") || $("#newImage").hasClass("gotWrongAnswer"))
{
$score.val( parseInt($score.val()) + 2 );
}
else   
{$score.val( parseInt($score.val()) + 3 );
}
       }  
/*THIS IS HOW FLIP ON RIGHT ANSWER WORKS */
function rightAnswer(){
    var nSrc = $("#newImage").attr('src').replace("-empty", "").replace("-flag", "");
               $("#newImageBack").attr('src').replace("-empty", "").replace("-flag", "");   
    if ($("#newImage").hasClass("gotHint"))
       {
           $(".flip-card-inner").flip(false);
           setTimeout(function () {
               $("#newImage").attr('src', nSrc);
               $("#newImageBack").attr('src', nSrc);    
           }, 300);
       } else {
           $(".flip-card-inner").flip(true);
           setTimeout(function () {
               $("#newImage").attr('src', nSrc);
               $("#newImageBack").attr('src', nSrc);    
           }, 300);
       }}       

       /*Check Answer*/
$("#buttonNewImage").click(function(){
    $("#buttonNext").removeClass("hidden");
    $("#buttonHint").addClass("hidden");
    $("#buttonNewImage").addClass("hidden");
    $("#textField").addClass("hidden");
    var answer = $("#textField").val(); 
    var nSrc = $("#newImage").attr('src').replace("-empty", "").replace("-flag", "");
               $("#newImageBack").attr('src').replace("-empty", "").replace("-flag", "");
                if 
                ($("#newImage").attr('src').indexOf("-1-") && answer.toUpperCase() == "JACQUES ANQUETIL" || $("#newImage").attr('src').indexOf("-1-") && answer.toUpperCase() == "JACQUES ANQUETIL")
                {
                rightAnswer();    
                myScore();
                 } 
                else if 
                ($("#newImage").attr('src').indexOf("-2-") && answer.toUpperCase() == "LANCE ARMSTRONG" || $("#newImage").attr('src').indexOf("-2-") && answer.toUpperCase() == "LANCE ARMSTRONG")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-3-") && answer.toUpperCase() == "GINO BARTALI" || $("#newImage").attr('src').indexOf("-3-") && answer.toUpperCase() == "GINO BARTALI")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-4-") && answer.toUpperCase() == "FAUSTO COPPI" || $("#newImage").attr('src').indexOf("-4-") && answer.toUpperCase() == "FAUSTO COPPI")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-5-") && answer.toUpperCase() == "MIGUEL INDURAIN" || $("#newImage").attr('src').indexOf("-5-") && answer.toUpperCase() == "MIGUEL INDURAIN")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-6-") && answer.toUpperCase() == "BERNARD HINAULT" || $("#newImage").attr('src').indexOf("-6-") && answer.toUpperCase() == "BERNARD HINAULT")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-7-") && answer.toUpperCase() == "LOUISON BOBET" || $("#newImage").attr('src').indexOf("-7-") && answer.toUpperCase() == "LOUISON BOBET")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-8-") && answer.toUpperCase() == "JOOP ZOETEMELK" || $("#newImage").attr('src').indexOf("-8-") && answer.toUpperCase() == "JOOP ZOETEMELK")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-9-") && answer.toUpperCase() == "EDDY MERCKX" || $("#newImage").attr('src').indexOf("-9-") && answer.toUpperCase() == "EDDY MERCKX")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-10-") && answer.toUpperCase() == "SEAN KELLY" || $("#newImage").attr('src').indexOf("-10-") && answer.toUpperCase() == "SEAN KELLY")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-11-") && answer.toUpperCase() == "ALFREDO BINDA" || $("#newImage").attr('src').indexOf("-11-") && answer.toUpperCase() == "ALFREDO BINDA")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-12-") && answer.toUpperCase() == "RIK VAN STEENBERGEN" || $("#newImage").attr('src').indexOf("-12-") && answer.toUpperCase() == "RIK VAN STEENBERGEN")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-13-") && answer.toUpperCase() == "OSCAR FREIRE" || $("#newImage").attr('src').indexOf("-13-") && answer.toUpperCase() == "OSCAR FREIRE")
                {
                rightAnswer();
                myScore();
                }
                else if 
                ($("#newImage").attr('src').indexOf("-14-") && answer.toUpperCase() == "LAURENT JALABERT" || $("#newImage").attr('src').indexOf("-14-") && answer.toUpperCase() == "LAURENT JALABERT")
                {
                rightAnswer();
                myScore();
                }  
                else if 
                ($("#newImage").attr('src').indexOf("-15-") && answer.toUpperCase() == "MARCO PANTANI" || $("#newImage").attr('src').indexOf("-15-") && answer.toUpperCase() == "MARCO PANTANI")
                {
                rightAnswer();
                myScore();
                }     
                else{
                    $("#newImage").addClass('blur');
                    $("#newImageBack").addClass('blur');  
                    if
                    ($("#newImage").hasClass("gotWrongAnswer")){
                    $("#newImage").attr('src', nSrc);
                    $("#newImageBack").attr('src', nSrc);
                    $("#buttonNext").removeClass("hidden");
                    $("#comment").removeClass("hidden").text("Sorry, no score");
                    $("#newImage").removeClass('blur');
                    $("#newImageBack").removeClass('blur');
                    }
                    else{
                $("#comment").removeClass("hidden").text("Nope, that's not him");
                $("#buttonAnotherTry").removeClass("hidden");
                $("#buttonGiveUp").removeClass("hidden"); 
                $("#buttonNext").addClass("hidden");
                $("#newImage").addClass("gotWrongAnswer");   
                }
            }
          });

/*After Wrong Answer */
$("#buttonAnotherTry").click(function(){
    $("#newImage").removeClass('blur');
    $("#newImageBack").removeClass('blur');
    $("#comment").addClass("hidden");
    $("#buttonAnotherTry").addClass("hidden");
    $("#buttonGiveUp").addClass("hidden");
    $("#buttonNewImage").removeClass("hidden");
    $("#textField").removeClass("hidden");
                if 
                ($("#newImage").attr('src').endsWith("empty.png"))
                {
                $("#buttonHint").removeClass("hidden");
                } 
                else if
                ($("#newImage").attr('src').endsWith("flag.png"))
                {
                $("#buttonHint").addClass("hidden");
                }     
});

$("#buttonGiveUp").click(function(){
    $("#newImage").removeClass('blur');
    $("#newImageBack").removeClass('blur');
    rightAnswer();
    $("#comment").removeClass("hidden").text("Sorry, no score");
    $("#buttonAnotherTry").addClass("hidden");
    $("#buttonGiveUp").addClass("hidden");
    $("#buttonNext").removeClass("hidden");
});

function explainGame() {
    window.location.href = '#sidebar';
  }
  function goBackUp() {
    window.location.href = '#headerQuestion'; 
  }