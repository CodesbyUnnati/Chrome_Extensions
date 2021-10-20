fetch('https://some-random-api.ml/animu/pat')
.then(data => data.json())
.then(patData=>
    {
        console.log(patData['link']);
        const patImages=patData['link'];
        const patElement=document.getElementById('patElement');

        patElement.src=patImages;
    })