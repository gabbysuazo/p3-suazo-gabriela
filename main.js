$(document).ready(function(){
    setTimeout(function(){
        $("#box1-text").html("Pink");
        $("#box2-text").html("Blue"); 
        $("#box3-text").html("Green"); 
        $("#box4-text").html("Yellow"); 
    }, 2000);

    var box1 = document.getElementsByClassName("box-1")[0];
    var box2 = document.getElementsByClassName("box-2")[0];
    var box3 = document.getElementsByClassName("box-3")[0];
    var box4 = document.getElementsByClassName("box-4")[0];
    var firstClick = 0;


    $(box1).one("click", function pinkAnimation(){
        if (firstClick > 0) {
            return;
        } else {
            $(box1).animate({left: '50%'}, 1000);
            $(box2).animate({top: '50%'}, 1000);
            $(box3).animate({top: '0%'}, 1000);
            $(box4).animate({left: '0%'}, 1000);

            $(box1).animate({top: '50%'}, 1000);
            $(box2).animate({left: '0%'}, 1000);
            $(box3).animate({left: '50%'}, 1000);
            $(box4).animate({top: '0%'}, 1000);

            $(box1).animate({left: '0%'}, 1000);
            $(box2).animate({top: '0%'}, 1000);
            $(box3).animate({top: '50%'}, 1000);
            $(box4).animate({left: '50%'}, 1000);

            $(box1).animate({top: '0%'}, 1000);
            $(box2).animate({left: '50%'}, 1000);
            $(box3).animate({left: '0%'}, 1000);
            $(box4).animate({top: '50%'}, 1000);

            setTimeout(function(){
                $("#box1-text").html("3");
                $("#box2-text").html("5"); 
                $("#box3-text").html("7"); 
                $("#box4-text").html("9");
                firstClick = firstClick + 1;
            }, 4000);
        }
    });

    $(box2).one("click", function blueAnimation(){
        if (firstClick > 0) {
            return;
        } else {
            $(box1).animate({left: '50%'}, 1000);
            $(box2).animate({top: '50%'}, 1000);
            $(box3).animate({top: '0%'}, 1000);
            $(box4).animate({left: '0%'}, 1000);

            $(box1).animate({top: '50%'}, 1000);
            $(box2).animate({left: '0%'}, 1000);
            $(box3).animate({left: '50%'}, 1000);
            $(box4).animate({top: '0%'}, 1000);

            $(box1).animate({left: '0%'}, 1000);
            $(box2).animate({top: '0%'}, 1000);
            $(box3).animate({top: '50%'}, 1000);
            $(box4).animate({left: '50%'}, 1000);

            $(box1).animate({top: '0%'}, 1000);
            $(box2).animate({left: '50%'}, 1000);
            $(box3).animate({left: '0%'}, 1000);
            $(box4).animate({top: '50%'}, 1000);

            setTimeout(function(){
                $("#box1-text").html("3");
                $("#box2-text").html("5"); 
                $("#box3-text").html("7"); 
                $("#box4-text").html("9");
                firstClick = firstClick + 1;
            }, 4000);
        }
    });

    $(box3).one("click", function greenAnimation(){
        if (firstClick > 0) {
            return;
        } else {
            $(box1).animate({left: '50%'}, 1000);
            $(box2).animate({top: '50%'}, 1000);
            $(box3).animate({top: '0%'}, 1000);
            $(box4).animate({left: '0%'}, 1000);

            $(box1).animate({top: '50%'}, 1000);
            $(box2).animate({left: '0%'}, 1000);
            $(box3).animate({left: '50%'}, 1000);
            $(box4).animate({top: '0%'}, 1000);

            $(box1).animate({left: '0%'}, 1000);
            $(box2).animate({top: '0%'}, 1000);
            $(box3).animate({top: '50%'}, 1000);
            $(box4).animate({left: '50%'}, 1000);

            $(box1).animate({top: '0%'}, 1000);
            $(box2).animate({left: '50%'}, 1000);
            $(box3).animate({left: '0%'}, 1000);
            $(box4).animate({top: '50%'}, 1000);

            $(box1).animate({left: '50%'}, 1000);
            $(box2).animate({top: '50%'}, 1000);
            $(box3).animate({top: '0%'}, 1000);
            $(box4).animate({left: '0%'}, 1000);

            setTimeout(function(){
                $("#box1-text").html("5");
                $("#box2-text").html("9"); 
                $("#box3-text").html("3"); 
                $("#box4-text").html("7");
                firstClick = firstClick + 1;
            }, 5000);
        }
    });

    $(box4).one("click", function yellowAnimation(){
        if (firstClick > 0) {
            return;
        } else {
            $(box1).animate({left: '50%'}, 1000);
            $(box2).animate({top: '50%'}, 1000);
            $(box3).animate({top: '0%'}, 1000);
            $(box4).animate({left: '0%'}, 1000);

            $(box1).animate({top: '50%'}, 1000);
            $(box2).animate({left: '0%'}, 1000);
            $(box3).animate({left: '50%'}, 1000);
            $(box4).animate({top: '0%'}, 1000);

            $(box1).animate({left: '0%'}, 1000);
            $(box2).animate({top: '0%'}, 1000);
            $(box3).animate({top: '50%'}, 1000);
            $(box4).animate({left: '50%'}, 1000);

            $(box1).animate({top: '0%'}, 1000);
            $(box2).animate({left: '50%'}, 1000);
            $(box3).animate({left: '0%'}, 1000);
            $(box4).animate({top: '50%'}, 1000);

            $(box1).animate({left: '50%'}, 1000);
            $(box2).animate({top: '50%'}, 1000);
            $(box3).animate({top: '0%'}, 1000);
            $(box4).animate({left: '0%'}, 1000);

            $(box1).animate({top: '50%'}, 1000);
            $(box2).animate({left: '0%'}, 1000);
            $(box3).animate({left: '50%'}, 1000);
            $(box4).animate({top: '0%'}, 1000);

            setTimeout(function(){
                $("#box1-text").html("9");
                $("#box2-text").html("7"); 
                $("#box3-text").html("5"); 
                $("#box4-text").html("3");
                firstClick = firstClick + 1;
            }, 6000);
        }
    });
});