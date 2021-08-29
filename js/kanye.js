const loadQuote = () =>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}
const displayQuote = (quote) =>{
    const quotElement = document.getElementById('quote');
    quotElement.innerText = quote.quote;
}