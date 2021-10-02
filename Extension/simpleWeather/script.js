var api_key = "6811df7bd50dc17a73603f7e5d86dad0",
 	locationEl = document.getElementById('location'),
 	tempEl = document.getElementById('temp'),
 	weatherEl = document.getElementById('weather'),
 	weatherImgEl = document.getElementById('weather-img');

// --- XML HTTP Async Request ---
    // var http = new XMLHttpRequest();

    // http.onreadystatechange = function() {
    //     if(http.status == 200 && http.readyState == 4) {

    //         http.onreadystatechange = function() {
		  //       if(http.status == 200 && http.readyState == 4) {
		  //           var data = JSON.parse(http.response);

		  //           locationEl.innerHTML = `The weather in ${data.name}`;
		  //           tempEl.innerHTML = `${data.main.temp}&deg; C`;
		  //           weatherEl.innerHTML = `${data.weather[0].description}`;
		  //           weatherImgEl.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
		  //       }
		  //   };


    //         var location = JSON.parse(http.response);

    //         http.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${api_key}&units=metric`, true);

    //         http.send();

    //     }
    // };

    // http.open("GET", "http://ip-api.com/json", true);

    // http.send();

// --- Fetch Request ---

fetch('http://ip-api.com/json').then(res => {
	return res.json();
}).then(location => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${api_key}&units=metric`).then(res => {
		return res.json();
	}).then(data => {
		locationEl.innerHTML = `The weather in ${data.name}`;
		tempEl.innerHTML = `${data.main.temp}&deg; C`;
		weatherEl.innerHTML = `${data.weather[0].description}`;
		weatherImgEl.innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
	})
})

// --- JQuery Request ---
	// $(document).ready(function() {
	//     $.ajax({url: "http://ip-api.com/json", success: function(location){
	//       let url = `http://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${api_key}&units=metric`;
	      
	//       $.ajax({url: url, success: function(data) {
	//         $('#location').html(`The weather in ${data.name}`);
	//         $('#temp').html(`${data.main.temp}&deg; C`);
	//         $('#weather').html(`${data.weather[0].description}`);
	//         $('#weather-img').html(`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`);
	//       }});
	//     }});
	// });