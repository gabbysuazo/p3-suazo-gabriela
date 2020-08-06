$(document).ready(function(){
    setTimeout(function(){
        $("#box1-text").html("Pink");
        $("#box2-text").html("Blue"); 
        $("#box3-text").html("Green"); 
        $("#box4-text").html("Yellow"); 
    }, 2000);

    var box1 = document.getElementById("box-1");
    var box2 = document.getElementById("box-2");
    var box3 = document.getElementById("box-3");
    var box4 = document.getElementById("box-4");

    $(box1).click(function(){
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
        }, 4000);
    });

    $(box2).click(function(){
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
        }, 4000);
    });

    $(box3).click(function(){
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
        }, 5000);
    });

    $(box4).click(function(){
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
        }, 6000);
    });

/*
    $("#box-2")
            .animate({top: '50%'}, 1000)
            .animate({left: '0%'}, 1000)
            .animate({top: '0%'}, 1000)
            .animate({left: '50%'}, 1000);

            $("#box-3")
            .animate({top: '0%'}, 1000)
            .animate({left: '50%'}, 1000)
            .animate({top: '50%'}, 1000)
            .animate({left: '0%'}, 1000);

            $("#box-4")
            .animate({left: '0%'}, 1000)
            .animate({top: '0%'}, 1000)
            .animate({left: '50%'}, 1000)
            .animate({top: '50%'}, 1000);
*/
});