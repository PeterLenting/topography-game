let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png'];

var usedImages = {};
var usedImagesCount = 0;

function displayImage(){

    var num = Math.floor(Math.random() *10);
    if (!usedImages[num]){
        document.getElementById("newImage").src = images[num];
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

jQuery(document).ready(function($){

    $("#buttonStart").click(function(){
        $("#buttonStart").hide();
        let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png'];

var usedImages = {};
var usedImagesCount = 0;

function displayImage(){

    var num = Math.floor(Math.random() *10);
    if (!usedImages[num]){
        document.getElementById("newImage").src = images[num];
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
        $("#buttonHint").show();
        $("#buttonNewImage").show();
        $("#textField").show();
    });


            $("#buttonHint").click(function(){
            $("#newImage").each(function() {
                  var nSrc= $(this).attr('src').replace("-empty.png", "-flag.png");
                  $(this).attr('src', nSrc);
              })
            });
        

            $("#buttonNewImage2").click(function(){
                var answer = $("#textField").val(); 
                var nSrc= $("#newImage").attr('src').replace("-empty.png", ".png");;
                $("#newImage").attr('src', nSrc);
                if 
                (answer.toUpperCase() == "JACQUES ANQUETIL")
                {
                document.getElementById("newImage").innerHTML = nSrc;
            } else if 
                ($("#newImage").attr('src') == "images/cyclist-2-empty.png" || "images/cyclist-2-flag.png" && answer.toUpperCase == "LANCE ARMSTRONG")
                {
                document.getElementById("newImage").innerHTML = "images/cyclist-2.png";   
                }
              else{
                document.getElementById("newImage").innerHTML = "Wrong";
                }
            });
          });
