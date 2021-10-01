const spinner = document.getElementById("spinner");


spinner.removeAttribute('hidden');
fetch('https://cat-fact.herokuapp.com/facts.json')
.then(data => data.json())
.then(CatData=>
    {
        spinner.setAttribute('hidden', '');
        const catImages=CatData.url;
        const catElement=document.getElementById('catElement');

        catElement.src=catImages;
    })