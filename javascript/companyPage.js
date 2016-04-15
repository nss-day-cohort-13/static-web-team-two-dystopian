var companyMainContentDiv = document.getElementById('mainContent');

var companyButton = document.getElementById('companyButton');

console.log(mainContent);
console.log(companyButton);


var companyCreator = function() {
		companyMainContentDiv.innerHTML = (
					'<div class="col1"><!-- left colum with the image -->' +
					  '<h2 class="contactPageh2">Where the magic happens</h2>' +
						'<a href="/images/lab.jpg">' +
			        '<img src="/images/lab.jpg" alt="photo of a lab with baby dinosaurs " class="labImg">' +
			      '</a>' +
					'</div>' +

					'<!-- right colum with the image -->' +
					'<div class="col2">' +
						'<h3 class="contactPageh3">About:</h3>' +
					  '<p class="aboutParagraph">Bitters thundercats irony shabby chic, bespoke intelligentsia sustainable VHS. Chillwave mumblecore farm-to-table cliche VHS kinfolk. Gentrify man bun XOXO godard. Franzen roof party bicycle rights four loko. Jean shorts poutine asymmetrical waistcoat, migas bitters shabby chic polaroid tacos yuccie gastropub ugh thundercats knausgaard.</p>' +
					  '<h3 class="contactPageh3">Contact:</h3>' +
					  '<p class="contactParagraph">Doctor X: telepathy is his prefered contact</p>' +
					  '<p class="contactParagraph">Doctor Y: telepathy is his prefered contact</p>' +
					  '<p class="contactParagraph">Doctor Z: telepathy is his prefered contact</p>' +
					'</div>'
			);
}

companyButton.addEventListener("click", companyCreator, false);