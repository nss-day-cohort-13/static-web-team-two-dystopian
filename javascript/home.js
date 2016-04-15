var homeMainContentDiv = document.getElementById('mainContent');
var homeButton = document.getElementById('homeButton');
var homeReview_1 = {
	comment: "My dinosaur is no more or less ferocious than expected.",
	author: 
};
var homeCreator = function() {
	homeMainContentDiv.innerHTML = (
		'<div id="homeLeftColumn" class="homeColumn">'+
			'<div class="homeReview" id="homeReview_1">'+
				'<p>My dinosaur is no more or less ferocious than expected.</p>'+
				'<p>--Customers</p>'+
			'</div>'+
			'<div class="homeReview" id="homeReview_2">'+
				'<p>The racing dinos are unmatched in speed and agility!</p>'+
				'<p>--Dino-racer</p>'+
			'</div>'+
		'</div>'+
		'<div id="homeMiddleColumn" class="homeColumn">'+
			'<img id="homeImage" src="images/homeDino.jpg" alt="Amazing Dinosaur">'+
		'</div>'+
		'<div id="homeRightColumn" class="homeColumn">'+
			'<div class="homeReview" id="homeReview_3">'+
				'<p>Easy to read ferocity levels makes dinosaur buying easy!</p>'+
				'<p>--Experts</p>'+
			'</div>'+
			'<div class="homeReview" id="homeReview_4">'+
				'<p>An investment in dinosaurs is an investment in the future.</p>'+
				'<p>--Dinosaurs</p>'+
			'</div>'+
		'</div>'
	);
} 

homeButton.addEventListener("click", homeCreator, false);
