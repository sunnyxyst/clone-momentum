const quotes = document.getElementById('quotes');
const quoteArr = [
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
      },
      {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
      },
      {
        quote:
          "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
        author: "St.Jerome"
      },
      {
        quote: "Quality is not an act, it is a habit.",
        author: "Aristotle"
      },
      {
        quote: "When you reach the end of you rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
      }
];

const quote = quotes.querySelector('.quote');
const author = quotes.querySelector('.author');
const randomQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)];
//console.log(randomQuote);
quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;