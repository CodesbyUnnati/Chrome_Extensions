fetch('https://some-random-api.ml/animu/hug')
.then(data => data.json())
.then(hugData=>
    {
        console.log(hugData['link']);
        const hugImages=hugData['link'];
        const hugElement=document.getElementById('hugElement');

        hugElement.src=hugImages;
    })