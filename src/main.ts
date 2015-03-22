function main() :string {
  var c1 = new Card();
  var d1 =  new Deck();
  d1.mark(c1);
  return c1.echo() + d1.echo();
}

document.body.innerHTML = main();
