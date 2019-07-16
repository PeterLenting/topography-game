/*let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png']; */


jQuery(document).ready(function($){

    $("#buttonStart").click(function(){
        $("#buttonStart").hide();
        let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png']; 
        $("#newImage").attr("src", images[Math.floor(Math.random() * images.length -1)]);    
        $("#buttonHint").show("slow");
        $("#buttonNewImage").show();
        $("#textField").show();
    });



 /*     let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png']; 
      $("#buttonNewImage").on({
           'click': function(){
               $("#newImage").attr("src", images[Math.floor(Math.random() * images.length -1)]);
           }
       });
 */

            $("#buttonHint").on({
                  'click': function(){
            $("#newImage").each(function() {
                  var nSrc= $(this).attr('src').replace("-empty.png", "-flag.png");
                  $(this).attr('src', nSrc);
              })
            }});
        });


        let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png'];

        var usedImages = {};
        var usedImagesCount = 0;
        
        function displayImage(){
        
            var num = Math.floor(Math.random() * (images.length));
            if (!usedImages[num]){
                document.getElementById("#newImage").getAttribute("src") = images[num];
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



