
$(document).ready(function() {
 $("#word-play").submit(function(event) {
   var result = ($("#sentence").val()).split(" ");
   debugger;
   var newA = result.map(function(word){
     if (word.length >= 3) {
       return word;
     };
   });
   newA.reverse();
   var showIt= newA.join(" ");
   $("#result").text(showIt);

   var deckOfCards = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
   var suits = ["clubs","diamonds","spades","hearts"];
   var deck =[]
   suits.forEach(function(suit){
     deckOfCards.forEach(function(card){
       deck.push(card + " of " + suit);
     });
   });

   deck.forEach(function(card) {
     $("#lists").append("<li>" + card +"</li>");
   })


   event.preventDefault();
 });
});
