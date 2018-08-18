//TreeHouse Project 1 - Random Quote Generator

//Array of objects is storing data for the quotes.
var quotes = [
  {quote: "quote 1.",
   source: "source of quote 1",
   citation: "citation of quote 1",
   year: "year of quote 1",
   tag: "tag 1"},

  {quote: "quote 2.",
   source: "source of quote 2",
   citation: "citation of quote 2",
   tag: "tag 2"},

  {quote: "quote 3.",
   source: "source of quote 3",
   tag: "tag 3"},

  {quote: "quote 4.",
   source: "source of quote 4",
   citation: "citation of quote 4",
   tag: "tag 4"},

  {quote: "quote 5.",
   source: "source of quote 5",
   citation: "citation of quote 5",
   year: "year of quote 5",
   tag: "tag 5"},

  {quote: "quote 6.",
   source: "source of quote 6",
   citation: "citation of quote 6",
   tag: "tag 6"},

  {quote: "quote 7.",
   source: "source of quote 7",
   tag: "tag 7"},

  {quote: "quote 8.",
   source: "source of quote 8",
   citation: "citation of quote 8",
   tag: "tag 8"},

  {quote: "quote 9.",
   source: "source of quote 9",
   citation: "citation of quote 9",
   year: "year of quote 9",
   tag: "tag 9"},

  {quote: "quote 10.",
   source: "source of quote 10",
   citation: "citation of quote 10",
   tag: "tag 10"},
];

//Selects and returns a random quote object from the quotes array.
function getRandomQuote(array) {
  var randomQuote = array[Math.floor(Math.random() * (quotes.length))];
  return randomQuote;
}

//Calls the getRandomQuote function and stores the results in a variable
function printQuote() {
  randomQuote = getRandomQuote(quotes);
//Variable will store an HTML string of quotes/properties
  var quoteString;
//Begin creating the random quote HTML string
  quoteString = '<p class="quote">' + randomQuote.quote + "</p>";
  quoteString += '<p class="source">' + randomQuote.source;
//Conditional statements for optional quote properties
  if (randomQuote.citation) {
    quoteString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    quoteString += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.tag){
    quoteString += '<h4>' + randomQuote.tag + '</h4>';
  }
  quoteString += '</p>';
//Displays the HTML string 
  document.getElementById('quote-box').innerHTML = quoteString
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
