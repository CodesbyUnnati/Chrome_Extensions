const spinner = document.getElementById("spinner");


spinner.removeAttribute('hidden');
fetch('https://catfact.ninja/fact')
.then(data => data.json())
.then(CatData=>
    {
        spinner.setAttribute('hidden', '');
        const catFacts=CatData.fact;
        const catFact = document.getElementById('catFact')

        catFact.innerHTML = catFacts;
    })