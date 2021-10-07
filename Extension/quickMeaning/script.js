document.getElementById("findMeaning").onclick = async () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${document.getElementById("search-word").value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.title === "No Definitions Found")
        {
            document.getElementById("results").innerHTML = `Sorry pal, we couldn't find definitions for the word you were looking for.` ;
        }
        else
        {
            document.getElementById("results").innerHTML = `<ul>` ;
            data[0].meanings[0].definitions.map(definition => {
                document.getElementById("results").innerHTML += `<li>${definition.definition}</li>`;
            })
            document.getElementById("results").innerHTML += `</ul>` ;
            document.getElementById("search-word").value = "" ;
        }
    }) ;
}