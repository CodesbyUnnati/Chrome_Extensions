const quote = document.querySelector
("#quote");
const btn = document.querySelector
("#btn");

btn.addEventListener("click", getQuote);

function getQuote(){
    fetch("https://icanhazdadjoke.com/slack")
    .then(res => res.json())
    .then(data => {
    	const joke = data.attachments[0].text;
        quote.innerHTML=joke;
 


    })
}
getQuote();

