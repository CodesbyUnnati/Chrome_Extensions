document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api-football-standings.azharimm.site/leagues/esp.1/standings?season=2021&sort=asc')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const ol = document.createElement('ol');
    // document.getElementById('rankings').innerHTML = '';
    document.getElementById('rankings').replaceChildren(ol);
    json['data']['standings'].forEach((team, i) => {
      const li = document.createElement('li');
      li.innerText = team['team']['name'];
      ol.appendChild(li);
    });
  });
});
