let apiQuotes = [];

// Show new quote
function newQuote(){
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote)
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

// On Load
getQuote();