const searchSubmit = document.querySelector('form');
const searchTerm = document.querySelector('input');
const btnNew = document.querySelector('.new');
const result = document.querySelector('.result');
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

searchSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(searchTerm.value);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm.value}`)
        .then((res) => {
            console.log(res);
            if (res.status == '404') {
                return (result.innerHTML = `<span style='color: red'>no results found for the word "<i>${searchTerm.value}</i>"</span>`);
            }
            return res.json();
        })
        .then(
            (data) =>
                (result.innerHTML = `<i>"
                    ${data[0].meanings[0].definitions[0].definition}"</i>`)
        );
});
