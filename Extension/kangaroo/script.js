fetch("https://some-random-api.ml/animal/kangaroo")
.then(data=> data.json())
.then(KangarooData=>
     {
        console.log(KangarooData['image']);
        const kangarooImages=KangarooData['image'];
        const kangarooElement=document.getElementById('kangarooElement');
        document.getElementById('p1').innerHTML=("Kangaroos are native to Austrailia!")
        kangarooElement.src=kangarooImages;
     })