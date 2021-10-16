fetch("https://some-random-api.ml/animal/panda")
.then(data=> data.json())
.then(PandaData=>
     {
        console.log(PandaData['image']);
        const PandaImages=PandaData['image'];
        const PandaElement=document.getElementById('PandaElement');
        document.getElementById('p1').innerHTML=("Much of the food that a giant panda eats is not digested. An adult giant panda in the spring can produce about 62 pounds of droppings in 24 hours.")
        PandaElement.src=PandaImages;
     })