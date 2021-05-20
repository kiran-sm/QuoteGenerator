const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length) ];
    // console.log(quote);
    // authorText.textContent = `~${quote.author}`;
    authorText.textContent = quote.author ? `~ ${quote.author}` : '~ Unknown';

    quoteText.textContent = quote.text;
}

let apiQuotes =[];
async function getQuotes () {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes[12]);
        newQuote();
        // quoteLine
        // console.log(newQuote); 
    } catch (error) {
        alert ('some thing went wrong please try later')
    }
}

getQuotes();

function tweetQuotes () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${ quoteText.textContent} ~ ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuotes);
