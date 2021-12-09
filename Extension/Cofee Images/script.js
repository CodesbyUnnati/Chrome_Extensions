fetch('https://coffee.alexflipnote.dev/random.json')
.then(data => data.json())
.then(CoffeData =>{
    const coffeeImages = CoffeData.file;
    const coffeeElement = document.getElementById('coffeeElement');
    
    console.log(coffeeImages);
    coffeeElement.src = coffeeImages;
})
