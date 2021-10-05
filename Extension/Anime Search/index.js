const API_URL = "https://api.jikan.moe/v3/search/anime"

const resForm = document.querySelector(".result-form")
const resSearchText = document.querySelector(".result-form__input")

const resImage = document.querySelector(".result__img")
const resTitle = document.querySelector(".result__title")

const handleResFormSubmit = (event) => {
	event.preventDefault()

	fetch(`${API_URL}?q=${resSearchText.value}&limit=1`)
		.then(data => data.json())
		.then(data => {
			const anime = data.results[0]
			resImage.setAttribute("src", anime.image_url)
			resTitle.textContent = anime.title
		})
		.catch(err => {
			console.log(err)
		})
}

resForm.addEventListener("submit", handleResFormSubmit)