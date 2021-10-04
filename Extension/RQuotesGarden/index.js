const API_URL = "https://quote-garden.herokuapp.com/api/"
const API_VERSION = "v3/"

const quoteText = document.querySelector(".quote-body__quote")
const quoteAuthor = document.querySelector(".quote-body__author")

fetch(`${API_URL}${API_VERSION}quotes/random`)
	.then(data => data.json())
	.then(data => {
		const quote = data.data[0]
		quoteText.textContent = quote.quoteText
		quoteAuthor.textContent = quote.quoteAuthor
	})
	.catch(err => {
		console.log(err)
	})