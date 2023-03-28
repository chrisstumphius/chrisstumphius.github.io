const apiKey = '84acae3816ad805d8b46fbe3030d6fd0';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Groningen,nl&units=metric&appid=${apiKey}`;

document.getElementById('fetch-weather').addEventListener('click', () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      document.getElementById('temperature').innerText = `Temperature: ${temperature.toFixed(1)}°C`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again later.');
    });
});