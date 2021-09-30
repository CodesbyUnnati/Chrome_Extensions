fetch('https://random.dog/woof.json')
.then(data => data.json())
.then(DogData=>
    {
        const dogImages=DogData.url;
        const dogElement=document.getElementById('dogElement');

        dogElement.src=dogImages;
    })