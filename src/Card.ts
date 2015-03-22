enum ESuit {Gold, Spade, Cup, Club};

class Card{
  private suitName : string;
  private number: number;
  constructor(){
    this.suitName = ESuit[Math.floor(Math.random() * 4)];
    this.number = Math.floor(Math.random() * 10) + 1;
  }

  getSuit(): string{
    return this.suitName;
  }

  getNumber(): number{
    return this.number;
  }

  echo() : string{
     return this.suitName + ' ' + this.number + ' ';
  }
}
