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
    var click = 0;

    $(box1).click(function(){
        if (click == 0) {
            click = click + 1;
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
        } else if (click == 1){
            click = click + 1;
            box1.style.transition = "3s linear";
            box1.style.transform = 'rotate(1080deg)';
            box2.style.transition = "3s linear";
            box2.style.transform = 'rotate(1080deg)';
            box3.style.transition = "3s linear";
            box3.style.transform = 'rotate(1080deg)';
            box4.style.transition = "3s linear";
            box4.style.transform = 'rotate(1080deg)';
            console.log(click);
        } else if (click > 1){
            return;
        }
    });

    $(box2).click(function(){
        if (click == 0) {
            click = click + 1;
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
        } else if (click == 1){
            click = click + 1;
            box1.style.transition = "5s linear";
            box1.style.transform = 'rotate(1800deg)';
            box2.style.transition = "5s linear";
            box2.style.transform = 'rotate(1800deg)';
            box3.style.transition = "5s linear";
            box3.style.transform = 'rotate(1800deg)';
            box4.style.transition = "5s linear";
            box4.style.transform = 'rotate(1800deg)';
            console.log(click);
        } else if (click > 1){
            return;
        }
    });

    $(box3).click(function(){
        if (click == 0) {
            click = click + 1;
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
                $("#box1-text").html("3");
                $("#box2-text").html("5"); 
                $("#box3-text").html("7"); 
                $("#box4-text").html("9");
            }, 5000);
        } else if (click == 1){
            click = click + 1;
            box1.style.transition = "7s linear";
            box1.style.transform = 'rotate(2520deg)';
            box2.style.transition = "7s linear";
            box2.style.transform = 'rotate(2520deg)';
            box3.style.transition = "7s linear";
            box3.style.transform = 'rotate(2520deg)';
            box4.style.transition = "7s linear";
            box4.style.transform = 'rotate(2520deg)';
            console.log(click);
        } else if (click > 1){
            return;
        }
    });

    $(box4).click(function(){
        if (click == 0) {
            click = click + 1;
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
                $("#box1-text").html("3");
                $("#box2-text").html("5"); 
                $("#box3-text").html("7"); 
                $("#box4-text").html("9");
            }, 6000);
        } else if (click == 1){
            click = click + 1;
            box1.style.transition = "9s linear";
            box1.style.transform = 'rotate(3240deg)';
            box2.style.transition = "9s linear";
            box2.style.transform = 'rotate(3240deg)';
            box3.style.transition = "9s linear";
            box3.style.transform = 'rotate(3240deg)';
            box4.style.transition = "9s linear";
            box4.style.transform = 'rotate(3240deg)';
            console.log(click);
        } else if (click > 1){
            return;
        }
    });
});