const fetchData = async () => {
    try {
        const d = new Date();
        const year = d.getFullYear();
        var month = d.getMonth()+1;

        if(month < 10){
            month = "0"+month;
        }

        const response = await fetch(`https://cdn.statically.io/gh/lakuapik/jadwalsholatorg/master/adzan/semarang/${year}/${month}.json`)
        const data = await response.json()
        data.forEach(function(val, key){
            var node = document.createElement("div");
            var elDate = document.createElement("p");
            var elAshr = document.createElement("p");
            var elDhuha = document.createElement("p");
            var elDzuhur = document.createElement("p");
            var elIsya = document.createElement("p");
            var elMaghrib = document.createElement("p");
            var elIsya = document.createElement("p");
            var elShubuh = document.createElement("p");
            var elSunrise = document.createElement("p");

            var date = document.createTextNode(val.tanggal);
            var ashr = document.createTextNode(val.ashr);
            var dhuha = document.createTextNode(val.dhuha);
            var dzuhur = document.createTextNode(val.dzuhur);
            var sunrise = document.createTextNode(val.terbit);
            var maghrib = document.createTextNode(val.magrib);
            var isya = document.createTextNode(val.isya);
            var shubuh = document.createTextNode(val.shubuh);

            elDate.appendChild(date);
            elAshr.appendChild(ashr);
            elDhuha.appendChild(dhuha);
            elDzuhur.appendChild(dzuhur);
            elIsya.appendChild(isya);
            elMaghrib.appendChild(maghrib);
            elShubuh.appendChild(shubuh);
            elSunrise.appendChild(sunrise);

            node.appendChild(elDate)
            node.appendChild(elAshr);
            node.appendChild(elDhuha)
            node.appendChild(elDzuhur)
            node.appendChild(elIsya)
            node.appendChild(elMaghrib)
            node.appendChild(elShubuh)
            node.appendChild(elSunrise)

            document.getElementById("container").appendChild(node);
        });
    
    } catch (error) {
        document.getElementById("container").innerHTML = `<p>Error Fetching Data: ${error.message} </p>`
    }
}

fetchData()