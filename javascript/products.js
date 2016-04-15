var productsButton = document.getElementById('productsButton')
var cardContent = "";
console.log(productsButton);
var cardArray = [{
  name: "Plateosaurus",
  desctiption: "Readymade wolf before they sold out.",
  ferocity: "1",
  url: "/images/plateosaurus.jpeg"
},{
  name: "Stegosaurus",
  desctiption: "",
  ferocity: "3",
  url: "/images/stegosaurus.jpg"
},{
  name: "Styracosaurus",
  desctiption: "Readymade wolf before they sold out.",
  ferocity: "5",
  url: "/images/Styracosaurus.jpg"
},{
  name: "Tyrannosaurus",
  desctiption: "Readymade wolf before they sold out.",
  ferocity: "5",
  url: "/images/Tyrannosaurus.jpeg"
},{
  name: "Allosaurus",
  desctiption: "Readymade wolf before they sold out.",
  ferocity: "1",
  url: "/images/Allosaurus.jpeg"
},{
  name: "Velociraptor",
  desctiption: "Readymade wolf before they sold out.",
  ferocity: "4",
  url: "/images/Velociraptor.jpg"
},{
  name: "Albertosaurus",
  desctiption: "Readymade wolf before they sold out.",
  ferocity: "1",
  url: "/images/Albertosaurus.jpeg"
},{
  name: "Euoplocephalus",
  desctiption: "Readymade wolf before they sold out.",
  ferocity: "2",
  url: "/images/Euoplocephalus.jpeg"
}];

cardSection = document.getElementById("mainContent");

// loop that adds elements to html based on the number of object(cards) created //
var cardMaker = function(card){
  var cardHtml = "<article class=\"cards\">";
  cardHtml += "<h1>" + card.name + "</h1>";
  cardHtml += "<p>" + card.desctiption + "</p>";
  cardHtml += "<p>" + card.ferocity + "</p>";
  cardHtml += "<img src=\"" + card.url + "\" alt=\"DinoDudes\">";
  cardHtml += "</article>";
  return cardHtml
}

var cardLoop = function() {
  cardSection.innerHTML = "";
  cardArray.forEach(function(e, i, a){
  cardSection.innerHTML += cardMaker(e);

})
}
console.log(cardContent); 
productsButton.addEventListener("click", cardLoop, false);