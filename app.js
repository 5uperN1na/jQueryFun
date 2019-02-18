//log right mouse click
$(document).on("contextmenu", ".element", function (e) {
    console.log('You clicked the right side of the mouse!!');
    return false;
});

//log left mouse click
$(document).on('click', '.element', function () {
    console.log('You clicked the left side of the mouse!!');
});

//apply animation to div when 'animate' button is clicked
$(function () {
    $("button").click(function () {
        $("#animation").animate({
            fontSize: "5em",
            letterSpacing: "0.5em"
        }, 1000);
    });
});

$(document).ready(function(){
    // Slide up displayed paragraphs
    $(".up-btn").click(function(){
        $("p").slideUp();
    });
    
    // Slide down hidden paragraphs
    $(".down-btn").click(function(){
        $("p").slideDown();
    });
});


$(document).ready(function(){
    $("button").click(function(){
        $("p").slideToggle("slow", function(){
            alert("The slide toggle effect has completed.");
        });
    });   
});