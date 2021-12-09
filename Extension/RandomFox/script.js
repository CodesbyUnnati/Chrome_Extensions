fetch("https://randomfox.ca/floof/")
  .then((data) => data.json())
  .then((foxData) => {
    console.log(foxData);
    const foxPic = foxData[0]["image"];
    console.log(foxPic);
    const foxElement = document.getElementById("foxElement");
    foxElement.src = foxPic;
  });
