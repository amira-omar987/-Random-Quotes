var quotes = [
  "“Be yourself; everyone else is already taken.”  ― Oscar Wilde",
   "So many books, so little time.”― Frank Zappa",
  "“You only live once, but if you do it right, once is enough.”  ― Mae West",
   " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe",
  "“Always forgive your enemies; nothing annoys them so much.”― Oscar Wilde",
  "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeche",

  "“I am so clever that sometimes I don't understand a single word of what I am saying.”― Oscar Wilde, The Happy Prince and Other Stories",
  "“It is better to be hated for what you are than to be loved for what you are not.”― Andre Gide, Autumn Leaves",
  "“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
];

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomNumber];
}
