fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
      const Element = document.getElementById('Element');
      let randomNumber = Math.floor(Math.random() * data.length);
      Element.innerText = data[randomNumber].text;
      
  });