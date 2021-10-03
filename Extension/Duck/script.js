fetch("https://random-d.uk/api/images/51.jpg")

    .then(data => data.json())

    .then(DuckData => {
        console.log(DuckData[0]['url']);
        const duckImages = DuckData[0]['url'];
        const duckElement = document.getElementById('duckElement');

        duckElement.src = duckImages;
    }
)