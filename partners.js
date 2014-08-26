var imgWidth; 				// Width of an image. calculated automatically
var imgPad = 30;			// size in px of the margin/padding/border of an image
var spd = 600; 				// The speed of the scrolling animation
var autoSlide = null; 		// setInterval variable used by clearInterval.
var changeInterval = 4000;	// How often the slide changes


$(document).ready(function() {				
	init();
});

function init() {		
	$(".ctrlBtn")	.mouseenter(showBtn)
					.mouseleave(hideBtn)
					.fadeTo(0, 0);
						
	$("#left.ctrlBtn").click(leftScroll);
	
	$("#right.ctrlBtn").click(rightScroll);
	
	$(".image").mouseenter(stopScroll);
	$(".image").mouseleave(autoScroll);
	
	autoScroll();
}

function autoScroll() {
	imgWidth = $(".image").width() + imgPad;
	autoSlide = setInterval(function() { 
		scroll(spd, "easeInOutExpo"); 
	}, changeInterval);
}

// 0 is left, 1 is right
function scroll(speed, easing, direction) {
	var dir;
	
	if (direction == 1) { dir = imgWidth; }
	else { dir = -imgWidth; }
	
	//scrollCloner(direction);
	$(".imgContainer").animate({
		left: dir
	}, speed, easing, function() {
		scrollCloner(direction);
	});
	
}

// Clones an image from one side to the other, 
// then deletes the original.
// 0 is left image to right, 1 is right image to left
function scrollCloner(direction) {
	if (direction == 1) { 
		$(".imgContainer div:last-child")	.clone()
											.css("opacity", "0")
											//.css("width", "0")
											.prependTo(".imgContainer")
											.fadeTo(300, 1);
											//.animate({
											//	width: imgWidth
											//}, 300);
		$(".imgContainer div:last-child").remove();
		$(".imgContainer").css("left", "0");
	} else {
		$(".imgContainer div:first-child")	.clone()
											//.css("opacity", "0")
											.appendTo(".imgContainer");
											//.fadeTo(300, 1);
		$(".imgContainer div:first-child").remove();
		$(".imgContainer").css("left", "0");
	}
}


function stopScroll() {
	clearInterval(autoSlide); // Stops auto scrolling
	$(".imgContainer").stop();	
}

function rightScroll() {
	stopScroll();
	scroll(spd, "easeInOutExpo", 0);
}

function leftScroll() {
	stopScroll();
	scroll(spd, "easeInOutExpo", 1);
}

// Show the navigation button
function showBtn() {
	stopScroll();
	$(this).stop().fadeTo(300, 0.75);
}

// Hide the navigation button
function hideBtn() {
	$(this).stop().fadeTo(300, 0);
	autoScroll();		
}
