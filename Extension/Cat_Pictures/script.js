fetch('https://api.thecatapi.com/v1/images/search')
.then(data => data.json())
.then(CatData=>
    {
        console.log(CatData[0]['url']);
        const catImages=CatData[0]['url'];
        const catElement=document.getElementById('catElement');

        catElement.src=catImages;
    })