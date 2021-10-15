fetch("https://some-random-api.ml/animal/red_panda")
.then(data=> data.json())
.then(RedpandaData=>
     {
        console.log(RedpandaData['image']);
        const redpandaImages=RedpandaData['image'];
        const redpandaElement=document.getElementById('redpandaElement');
        document.getElementById('p1').innerHTML=("The red panda is slightly larger than a domestic cat with a bear-like body and thick russet fur")
        redpandaElement.src=redpandaImages;
     })