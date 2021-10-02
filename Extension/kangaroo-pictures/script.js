fetch('https://some-random-api.ml/animal/kangaroo')
.then(data => data.json())
.then(kangarooData=>
    {
        console.log(kangarooData['image']);
        const kangarooImages=kangarooData['image'];
        const kangarooElement=document.getElementById('kangarooElement');

        kangarooElement.src=kangarooImages;
    })