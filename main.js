$(document).ready(function() {
	setTimeout(function() {
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
	const messages = ['A lifetime of happiness lies ahead of you.', 'The end of something marks the start of something new.', 'Self-knowledge is a life long process.', 'The person who will not stand for something will fall for anything.', 'The value lies not within any particular thing, but in the desire placed on that thing.', 'When your heart is pure, your mind is clear.', 'You have the power to write your own fortune.', 'Success is a journey, not a destination.', 'Nothing is more difficult, and therefore more precious, than to be able to decide.', 'It’s not the amount of time you devote, but what you devote to the time that counts.'];
	const randomIndex = Math.round(Math.random() * messages.length);
	$(box1).click(function() {
		if (click == 0) {
			click = click + 1;
			$(box1).animate({
				left: '50%'
			}, 1000);
			$(box2).animate({
				top: '50%'
			}, 1000);
			$(box3).animate({
				top: '0%'
			}, 1000);
			$(box4).animate({
				left: '0%'
			}, 1000);
			$(box1).animate({
				top: '50%'
			}, 1000);
			$(box2).animate({
				left: '0%'
			}, 1000);
			$(box3).animate({
				left: '50%'
			}, 1000);
			$(box4).animate({
				top: '0%'
			}, 1000);
			$(box1).animate({
				left: '0%'
			}, 1000);
			$(box2).animate({
				top: '0%'
			}, 1000);
			$(box3).animate({
				top: '50%'
			}, 1000);
			$(box4).animate({
				left: '50%'
			}, 1000);
			$(box1).animate({
				top: '0%'
			}, 1000);
			$(box2).animate({
				left: '50%'
			}, 1000);
			$(box3).animate({
				left: '0%'
			}, 1000);
			$(box4).animate({
				top: '50%'
			}, 1000);
			setTimeout(function() {
				$("#box1-text").html("3");
				$("#box2-text").html("5");
				$("#box3-text").html("7");
				$("#box4-text").html("9");
			}, 4000);
		} else if (click == 1) {
			click = click + 1;
			box1.style.transition = "5s linear";
			box1.style.transform = 'rotate(1080deg)';
			box2.style.transition = "5s linear";
			box2.style.transform = 'rotate(1080deg)';
			box3.style.transition = "5s linear";
			box3.style.transform = 'rotate(1080deg)';
			box4.style.transition = "5s linear";
			box4.style.transform = 'rotate(1080deg)';
		} else if (click == 2) {
			$(box1).animate({
				top: '0%',
				left: '0%',
				width: '100%',
				height: '100%'
			}, "fast");
			$(box2).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box3).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box4).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$("#box1-text").fadeOut();
			$("#box2-text").fadeOut();
			$("#box3-text").fadeOut();
			$("#box4-text").fadeOut();
			setTimeout(function() {
				$("#box1-text").html(messages[randomIndex]);
				document.getElementById("box1-text").style.backgroundColor = "#ffffff";
				document.getElementById("box1-text").style.color = "#7070ED";
				document.getElementById("box1-text").style.fontSize = "2rem";
				document.getElementById("box1-text").style.padding = "25px";
				document.getElementById("box1-text").style.textTransform = "none";
				box1.style.flexDirection = "column";
				document.getElementsByClassName("hidden")[0].style.backgroundColor = "#7070ED";
				document.getElementsByClassName("hidden")[0].style.padding = "15px 20px";
				document.getElementsByClassName("hidden")[0].style.borderRadius = "100px";
				document.getElementsByClassName("hidden")[0].style.fontSize = "1.2rem";
				document.getElementsByClassName("hidden")[0].style.marginTop = "50px";
			}, 3000);
			$("#box1-text").delay(5000).fadeIn();
			setTimeout(function() {
				$("a").removeClass("hidden");
			}, 7000);
		} else {
			return;
		}
	});
	$(box2).click(function() {
		if (click == 0) {
			click = click + 1;
			$(box1).animate({
				left: '50%'
			}, 1000);
			$(box2).animate({
				top: '50%'
			}, 1000);
			$(box3).animate({
				top: '0%'
			}, 1000);
			$(box4).animate({
				left: '0%'
			}, 1000);
			$(box1).animate({
				top: '50%'
			}, 1000);
			$(box2).animate({
				left: '0%'
			}, 1000);
			$(box3).animate({
				left: '50%'
			}, 1000);
			$(box4).animate({
				top: '0%'
			}, 1000);
			$(box1).animate({
				left: '0%'
			}, 1000);
			$(box2).animate({
				top: '0%'
			}, 1000);
			$(box3).animate({
				top: '50%'
			}, 1000);
			$(box4).animate({
				left: '50%'
			}, 1000);
			$(box1).animate({
				top: '0%'
			}, 1000);
			$(box2).animate({
				left: '50%'
			}, 1000);
			$(box3).animate({
				left: '0%'
			}, 1000);
			$(box4).animate({
				top: '50%'
			}, 1000);
			setTimeout(function() {
				$("#box1-text").html("3");
				$("#box2-text").html("5");
				$("#box3-text").html("7");
				$("#box4-text").html("9");
			}, 4000);
		} else if (click == 1) {
			click = click + 1;
			box1.style.transition = "5s linear";
			box1.style.transform = 'rotate(1800deg)';
			box2.style.transition = "5s linear";
			box2.style.transform = 'rotate(1800deg)';
			box3.style.transition = "5s linear";
			box3.style.transform = 'rotate(1800deg)';
			box4.style.transition = "5s linear";
			box4.style.transform = 'rotate(1800deg)';
		} else if (click == 2) {
			$(box1).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box2).animate({
				top: '0%',
				left: '0%',
				width: '100%',
				height: '100%'
			}, "fast");
			$(box3).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box4).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$("#box1-text").fadeOut();
			$("#box2-text").fadeOut();
			$("#box3-text").fadeOut();
			$("#box4-text").fadeOut();
			setTimeout(function() {
				$("#box2-text").html(messages[randomIndex]);
				document.getElementById("box2-text").style.backgroundColor = "#ffffff";
				document.getElementById("box2-text").style.color = "#E8D48F";
				document.getElementById("box2-text").style.fontSize = "2rem";
				document.getElementById("box2-text").style.padding = "25px";
				document.getElementById("box2-text").style.textTransform = "none";
				box2.style.flexDirection = "column";
				document.getElementsByClassName("hidden")[1].style.backgroundColor = "#E8D48F";
				document.getElementsByClassName("hidden")[1].style.padding = "15px 20px";
				document.getElementsByClassName("hidden")[1].style.borderRadius = "100px";
				document.getElementsByClassName("hidden")[1].style.fontSize = "1.2rem";
				document.getElementsByClassName("hidden")[1].style.marginTop = "50px";
			}, 3000);
			$("#box2-text").delay(5000).fadeIn();
			setTimeout(function() {
				$("a").removeClass("hidden");
			}, 7000);
		} else {
			return;
		}
	});
	$(box3).click(function() {
		if (click == 0) {
			click = click + 1;
			$(box1).animate({
				left: '50%'
			}, 1000);
			$(box2).animate({
				top: '50%'
			}, 1000);
			$(box3).animate({
				top: '0%'
			}, 1000);
			$(box4).animate({
				left: '0%'
			}, 1000);
			$(box1).animate({
				top: '50%'
			}, 1000);
			$(box2).animate({
				left: '0%'
			}, 1000);
			$(box3).animate({
				left: '50%'
			}, 1000);
			$(box4).animate({
				top: '0%'
			}, 1000);
			$(box1).animate({
				left: '0%'
			}, 1000);
			$(box2).animate({
				top: '0%'
			}, 1000);
			$(box3).animate({
				top: '50%'
			}, 1000);
			$(box4).animate({
				left: '50%'
			}, 1000);
			$(box1).animate({
				top: '0%'
			}, 1000);
			$(box2).animate({
				left: '50%'
			}, 1000);
			$(box3).animate({
				left: '0%'
			}, 1000);
			$(box4).animate({
				top: '50%'
			}, 1000);
			$(box1).animate({
				left: '50%'
			}, 1000);
			$(box2).animate({
				top: '50%'
			}, 1000);
			$(box3).animate({
				top: '0%'
			}, 1000);
			$(box4).animate({
				left: '0%'
			}, 1000);
			setTimeout(function() {
				$("#box1-text").html("3");
				$("#box2-text").html("5");
				$("#box3-text").html("7");
				$("#box4-text").html("9");
			}, 5000);
		} else if (click == 1) {
			click = click + 1;
			box1.style.transition = "5s linear";
			box1.style.transform = 'rotate(2520deg)';
			box2.style.transition = "5s linear";
			box2.style.transform = 'rotate(2520deg)';
			box3.style.transition = "5s linear";
			box3.style.transform = 'rotate(2520deg)';
			box4.style.transition = "5s linear";
			box4.style.transform = 'rotate(2520deg)';
		} else if (click == 2) {
			$(box1).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box2).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box3).animate({
				top: '0%',
				left: '0%',
				width: '100%',
				height: '100%'
			}, "fast");
			$(box4).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$("#box1-text").fadeOut();
			$("#box2-text").fadeOut();
			$("#box3-text").fadeOut();
			$("#box4-text").fadeOut();
			setTimeout(function() {
				$("#box3-text").html(messages[randomIndex]);
				document.getElementById("box3-text").style.backgroundColor = "#ffffff";
				document.getElementById("box3-text").style.color = "#7070ED";
				document.getElementById("box3-text").style.fontSize = "2rem";
				document.getElementById("box3-text").style.padding = "25px";
				document.getElementById("box3-text").style.textTransform = "none";
				box3.style.flexDirection = "column";
				document.getElementsByClassName("hidden")[2].style.backgroundColor = "#7070ED";
				document.getElementsByClassName("hidden")[2].style.padding = "15px 20px";
				document.getElementsByClassName("hidden")[2].style.borderRadius = "100px";
				document.getElementsByClassName("hidden")[2].style.fontSize = "1.2rem";
				document.getElementsByClassName("hidden")[2].style.marginTop = "50px";
			}, 3000);
			$("#box3-text").delay(5000).fadeIn();
			setTimeout(function() {
				$("a").removeClass("hidden");
			}, 7000);
		} else {
			return;
		}
	});
	$(box4).click(function() {
		if (click == 0) {
			click = click + 1;
			$(box1).animate({
				left: '50%'
			}, 1000);
			$(box2).animate({
				top: '50%'
			}, 1000);
			$(box3).animate({
				top: '0%'
			}, 1000);
			$(box4).animate({
				left: '0%'
			}, 1000);
			$(box1).animate({
				top: '50%'
			}, 1000);
			$(box2).animate({
				left: '0%'
			}, 1000);
			$(box3).animate({
				left: '50%'
			}, 1000);
			$(box4).animate({
				top: '0%'
			}, 1000);
			$(box1).animate({
				left: '0%'
			}, 1000);
			$(box2).animate({
				top: '0%'
			}, 1000);
			$(box3).animate({
				top: '50%'
			}, 1000);
			$(box4).animate({
				left: '50%'
			}, 1000);
			$(box1).animate({
				top: '0%'
			}, 1000);
			$(box2).animate({
				left: '50%'
			}, 1000);
			$(box3).animate({
				left: '0%'
			}, 1000);
			$(box4).animate({
				top: '50%'
			}, 1000);
			$(box1).animate({
				left: '50%'
			}, 1000);
			$(box2).animate({
				top: '50%'
			}, 1000);
			$(box3).animate({
				top: '0%'
			}, 1000);
			$(box4).animate({
				left: '0%'
			}, 1000);
			$(box1).animate({
				top: '50%'
			}, 1000);
			$(box2).animate({
				left: '0%'
			}, 1000);
			$(box3).animate({
				left: '50%'
			}, 1000);
			$(box4).animate({
				top: '0%'
			}, 1000);
			setTimeout(function() {
				$("#box1-text").html("3");
				$("#box2-text").html("5");
				$("#box3-text").html("7");
				$("#box4-text").html("9");
			}, 6000);
		} else if (click == 1) {
			click = click + 1;
			box1.style.transition = "5s linear";
			box1.style.transform = 'rotate(3240deg)';
			box2.style.transition = "5s linear";
			box2.style.transform = 'rotate(3240deg)';
			box3.style.transition = "5s linear";
			box3.style.transform = 'rotate(3240deg)';
			box4.style.transition = "5s linear";
			box4.style.transform = 'rotate(3240deg)';
		} else if (click == 2) {
			$(box1).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box2).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box3).animate({
				top: '0%',
				left: '0%',
				width: '0%',
				height: '0%'
			}, "fast");
			$(box4).animate({
				top: '0%',
				left: '0%',
				width: '100%',
				height: '100%'
			}, "fast");
			$("#box1-text").fadeOut();
			$("#box2-text").fadeOut();
			$("#box3-text").fadeOut();
			$("#box4-text").fadeOut();
			setTimeout(function() {
				$("#box4-text").html(messages[randomIndex]);
				document.getElementById("box4-text").style.backgroundColor = "#ffffff";
				document.getElementById("box4-text").style.color = "#54BABA";
				document.getElementById("box4-text").style.fontSize = "2rem";
				document.getElementById("box4-text").style.padding = "25px";
				document.getElementById("box4-text").style.textTransform = "none";
				box4.style.flexDirection = "column";
				document.getElementsByClassName("hidden")[3].style.backgroundColor = "#54BABA";
				document.getElementsByClassName("hidden")[3].style.padding = "15px 20px";
				document.getElementsByClassName("hidden")[3].style.borderRadius = "100px";
				document.getElementsByClassName("hidden")[3].style.fontSize = "1.2rem";
				document.getElementsByClassName("hidden")[3].style.marginTop = "50px";
			}, 3000);
			$("#box4-text").delay(5000).fadeIn();
			setTimeout(function() {
				$("a").removeClass("hidden");
			}, 7000);
		} else {
			return;
		}
	});
});