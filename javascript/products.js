var productsButton = document.getElementById('productsButton');
var cardSection = document.getElementById("mainContent");
var cardContent = "";
var cardArray = [{
  name: "Plateosaurus",
  desctiption: "Wolf before they sold out.",
  ferocity: "1",
  url: "/images/plateosaurus.jpeg"
},{
  name: "Stegosaurus",
  desctiption: "Wolf before they sold out.",
  ferocity: "3",
  url: "/images/stegosaurus.jpg"
},{
  name: "Styracosaurus",
  desctiption: "Wolf before they sold out.",
  ferocity: "5",
  url: "/images/Styracosaurus.jpg"
},{
  name: "Tyrannosaurus",
  desctiption: "Wolf before they sold out.",
  ferocity: "5",
  url: "/images/Tyrannosaurus.jpeg"
},{
  name: "Allosaurus",
  desctiption: "Wolf before they sold out.",
  ferocity: "1",
  url: "/images/Allosaurus.jpg"
},{
  name: "Velociraptor",
  desctiption: "Wolf before they sold out.",
  ferocity: "4",
  url: "/images/Velociraptor.jpg"
},{
  name: "Albertosaurus",
  desctiption: "Wolf before they sold out.",
  ferocity: "1",
  url: "/images/Albertosaurus.jpeg"
},{
  name: "Euoplocephalus",
  desctiption: "Wolf before they sold out.",
  ferocity: "2",
  url: "/images/Euoplocephalus.jpeg"
}];
// loop that adds elements to html based on the number of object(cards) created //
var cardMaker = function(card){
  var cardHtml = "<article class=\"cards\">";
  cardHtml += "<h1>" + card.name + "</h1>";
  cardHtml += "<p>" + card.desctiption + "</p>";
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
productsButton.addEventListener("click", cardLoop, false);
