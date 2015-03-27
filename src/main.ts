function initDeck() : Deck {
  return Deck.getInstance();
}

function loadRules(): void {

}

function giveCards(d1: Deck) :Array<Card> {
  var hand: Array<Card> = [];

  for (var i=0;i<=3;i++){
    var temp: Card;

    do{
      temp = new Card()
    }while(d1.isMarked(temp))

    d1.mark(temp);
    hand.push(temp);
  }

    return hand;
}

function main() :string {

  var d1 =  initDeck();

  var player1 :Array<Card> = giveCards(d1);
  var player2 :Array<Card> = giveCards(d1);
  var player3 :Array<Card> = giveCards(d1);
  var player4 :Array<Card> = giveCards(d1);

  return d1.echo();
}

document.body.innerHTML = main();
