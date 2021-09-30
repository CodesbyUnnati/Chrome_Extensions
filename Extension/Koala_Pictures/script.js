fetch('https://some-random-api.ml/animal/koala')
.then(data => data.json())
.then(KoalaData=>
    {
        console.log(KoalaData['image']);
        const koalaImages=KoalaData['image'];
        const koalaElement=document.getElementById('koalaElement');

        koalaElement.src=koalaImages;
    })