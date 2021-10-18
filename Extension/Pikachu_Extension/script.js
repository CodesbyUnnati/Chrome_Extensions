const spinner=document.getElementById("spinner");
fetch('https://some-random-api.ml/img/pikachu')   

.then(data => data.json())
.then(pikachuData=>
{
    console.log(pikachuData['link']);
    const pikachuImages=pikachuData['link'];
    const pikachuElement=document.getElementById('pikachuElement');

    pikachuElement.src=pikachuImages; 
})