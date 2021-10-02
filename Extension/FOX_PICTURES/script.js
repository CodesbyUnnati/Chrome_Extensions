fetch('https://some-random-api.ml/animal/fox')
.then(data => data.json())
.then(FoxData=>
{
    console.log(FoxData['image']);
    const foxImages=FoxData['image'];
    const foxElement=document.getElementById('foxElement');

    foxElement.src=foxImages; 
})