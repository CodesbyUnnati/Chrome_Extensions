fetch('https://some-random-api.ml/animal/raccoon')
.then(data => data.json())
.then(raccoonData=>
    {
        console.log(raccoonData['image']);
        const raccoonImages=raccoonData['image'];
        const raccoonElement=document.getElementById('raccoonElement');

        raccoonElement.src=raccoonImages;
    })