function getWeather() {
  const cityName = document.getElementById("cityInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);

      if (data.cities[cityName]) {
        const weather = data.cities[cityName];
        resultDiv.innerHTML = `
          <p><strong>Temperature:</strong> ${weather.temperature}</p>
          <p><strong>Humidity:</strong> ${weather.humidity}</p>
          <p><strong>Conditions:</strong> ${weather.conditions}</p>
        `;
      } else {
        resultDiv.innerHTML = `<p>City not found in local database.</p>`;
      }
    }
  };

  xhr.send();
}
