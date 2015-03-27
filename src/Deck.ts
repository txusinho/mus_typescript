/**
 * Status of the card:
  - Free for unused
  - Used for already given cards
  - Discarded for those that might be used again
 */
enum Status {Free, Used, Discarded};

/**
 * Represents a Desk. Singleton
 */
class Deck {

  private static _instance:Deck = null;

  Gold : string[];
  Spade : string[];
  Cup : string[];
  Club :string[];

  constructor() {
    if(Deck._instance){
        throw new Error("Error: Instantiation failed: Use Deck.getInstance() instead of new.");
    }

    this.Gold = Array(10);
    this.Spade = Array(10)
    this.Cup = Array(10)
    this.Club = Array(10)

    Deck._instance = this;
  }

  public static getInstance():Deck
  {
      if(Deck._instance === null) {
          Deck._instance = new Deck();
      }
      return Deck._instance;
  }

  mark(card : Card, status : string = 'Used') : void{
    this[card.getSuit()][card.getNumber()] = status;
  }

  isMarked(card: Card) : boolean {

    if(!this[card.getSuit()][card.getNumber()]){
      return false;
    }

    return (this[card.getSuit()][card.getNumber()].length > 0 ||
            this[card.getSuit()][card.getNumber()] === 'Free');
  }

  echo() : string {
    var ret = '';
    ret += '[ Gold: ' + this.Gold + ']';
    ret += '[ Spade: ' + this.Spade + ']';
    ret += '[ Cup: ' +this.Cup + ']';
    ret += '[Club: '+this.Club + ']';
    return ret;
  }
}
