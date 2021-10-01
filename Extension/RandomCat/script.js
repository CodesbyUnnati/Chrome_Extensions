fetch('https://some-random-api.ml/animal/cat')
.then(data => data.json())
.then(Catpic=>
    {
        console.log(Catpic['image']);
        const CatImages=Catpic['image'];
        const CatElement=document.getElementById('CatElement');

        CatElement.src=CatImages;
    })