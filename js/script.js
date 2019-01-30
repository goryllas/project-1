//TreeHouse Project 1 - Random Quote Generator

//Array of objects is storing data for the quotes.
const quotes = [
  {quote: "If you aren't fired with enthusiasm, you will be fired with enthusiasm.",
   source: "Vince Lombardi",
   citation: "Sportswit, p.169",
   year: "1984",
   tag: "sports, motivational"},

  {quote: "You see, that is the sad, sorry, terrible thing about sarcasm. It's really funny.",
   source: "Brandon Sanderson",
   citation: "Alcatraz Versus the Evil Librarians",
   tag: "humor, sarcasm"},

  {quote: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
   source: "Benjamin Franklin",
   tag: "learning, mentoring, teach"},

  {quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
   source: "Paulo Coelho",
   citation: "The Alchemist, p.141",
   tag: "motivational, dream, failure"},

  {quote: "The reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.",
   source: "George Bernard Shaw",
   citation: "Maxims for Revolutionists, #124",
   year: "1903",
   tag: "change, authority"},

  {quote: "what we choose to focus on and what we choose to ignore - plays in the defining quality of our life.",
   source: "Cal Newport",
   citation: "Deep Work: Rules for Focused Success in a Distracted World",
   tag: "life, work ethic"},

  {quote: "A lie can travel half way around the world while the truth is putting on shoes.",
   source: "Charles Spurgeon",
   tag: "trust, gossip"},

  {quote: "Private misfortunes must never induce us to neglect public affairs.",
   source: "Alexander Dumas",
   citation: "The Count of Monte Cristo, chapter 5",
   tag: "private, responsibilities, problems"},

  {quote: "To conceal anything from those to whom I am attached, is not in my nature. I can never close my lips where I have opened my heart.",
   source: "Charles Dickens",
   citation: "Master Humphrey's Clock, Vol.1",
   year: "1840",
   tag: "heart, love, trust"},

  {quote: "I suppose my formula might be: dream, diversify and never miss an angle.",
   source: "Walt Disney",
   citation: "Wall Street Journal",
   year: "1958",
   tag: "dream, perfection"},
];

//this will be the name of the timer set by the setInterval method
const quoteTimeout;

/*the setInterval method will call the printQuote function every 30 secs. The
method would continue to run at the specified time unless the clearInterval
method is used to stop it.
*/
const startTime = () => {
  quoteTimeout = setInterval(printQuote, 30000);
}
const timeReset = () => {
  clearInterval(quoteTimeout);
}

//Selects and returns a random quote object from the quotes array.
const getRandomQuote = (array) => {
  let randomQuote = array[Math.floor(Math.random() * (quotes.length))];
  return randomQuote;
}

//Gets a random color for the background.
const getRandomColor = () => {
  let hexValues = '0123456789ABCDEF';
  let newColor = '#';
  /*to get a random hexadecimal notation (#RRBBGG), a loop that stores
  a random value from the hexValues variable is used here. Only need 6 values
  */
  for (let i = 0; i < 6; i++) {
    newColor += hexValues[Math.floor(Math.random() * 16)];
  }
  //the newColor variable is assigned to the background property
  document.body.style.backgroundColor = newColor;
}

//Calls the getRandomQuote function and stores the results in a variable
const printQuote = () => {
  //reset timer
  timeReset();
  randomQuote = getRandomQuote(quotes);
  //Variable will store an HTML string of quotes/properties
  let quoteString;
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
  //displays a random backgroung color
  getRandomColor();
//set timer
  startTime();
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
