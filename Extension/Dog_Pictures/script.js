const spinner = document.getElementById("spinner");


spinner.removeAttribute('hidden');
fetch('https://random.dog/woof.json')
.then(data => data.json())
.then(DogData=>
    {
        spinner.setAttribute('hidden', '');
        const dogImages=DogData.url;
        const dogElement=document.getElementById('dogElement');

        dogElement.src=dogImages;
    })