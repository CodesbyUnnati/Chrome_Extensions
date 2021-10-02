const spinner = document.getElementById("spinner");
spinner.removeAttribute('hidden');
fetch('https://favqs.com/api/qotd')
    .then(data => data.json())
    .then(quoteData => {
        spinner.setAttribute('hidden', '');
        const quoteText = quoteData.quote.body;
        const quoteElement = document.getElementById('quoteElement');
        quoteElement.innerHTML = quoteText;
    })