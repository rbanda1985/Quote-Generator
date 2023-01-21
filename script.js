const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote
function newQuote(){
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is blank and replace it with uknown

  if(!quote.author){
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }

  // Check quote length to determine styling

  if(quote.text.length > 50){
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }


  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}



// Get Quotes from API
async function getQuote(){
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
      try{
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote();
      } catch(err){
        console.log(err)
      }
}

// Tweet Quote
function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuote();