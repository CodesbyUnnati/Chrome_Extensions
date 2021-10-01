fetch("https://random.dog/woof.json")
  .then((data) => data.json())
  .then((dogData) => {
    let dogsPhotos = dogData.url;
    let dogEl = document.getElementById("dogEl");

    dogEl.src = dogsPhotos;
  });
