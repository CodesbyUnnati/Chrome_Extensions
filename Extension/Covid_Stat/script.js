const fetchData = async () => {
    try {
        document.getElementById("container").innerHTML = `<p>Loading ... </p>`
        const response = await fetch('https://covid19.mathdro.id/api')
        const { confirmed, deaths, recovered } = await response.json()
        document.getElementById("container").innerHTML = `<div>
        <p>Confirmed</p>
            <p style="font-size: 20px;" ><b>${confirmed.value}</b></p>
        </div>
        <div>
            <p>Deaths</p>
            <p style="font-size: 20px;" ><b>${deaths.value}</b></p>
        </div>
        <div>
            <p>Recovered</p>
            <p style="font-size: 20px;" ><b>${recovered.value}</b></p>
        </div>`
    } catch (error) {
        document.getElementById("container").innerHTML = `<p>Error Fetching Data: ${error.message} </p>`
    }
}

fetchData()