fetch('https://picsum.photos/200/300')
.then(data => data.json())
.then(RData=>
    {
        const rImages=RData.url;
        const rElement=document.getElementById('rElement');

        rElement.src=rImages;
    })