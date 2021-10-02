
document.querySelector('button.play').addEventListener('click', function(){
  var SelTrack = document.querySelector('select').value;

  chrome.runtime.sendMessage({name: "playTrack", track: SelTrack});

});


document.querySelector('button.pause').addEventListener('click', function(){

  chrome.runtime.sendMessage({name: "pauseTrack"});

});
