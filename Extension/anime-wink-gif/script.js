fetch('https://some-random-api.ml/animu/wink')
.then(data => data.json())
.then(winkData=>
    {
        console.log(winkData['link']);
        const winkImages=winkData['link'];
        const winkElement=document.getElementById('winkElement');

        winkElement.src=winkImages;
    })