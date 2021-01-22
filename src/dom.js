const weatherDisplay = document.querySelector('.weather-display');

function renderDom(obj) {
  weatherDisplay.innerHTML = '';
  cityName(obj);
  getCoverage(obj);
  temperatures(obj);
}

function cityName(obj) {
  const city = obj.name;
  const cityText = document.createElement('div');
  cityText.classList.add('city');
  cityText.innerHTML = city;
  weatherDisplay.appendChild(cityText);
}

function temperatures(obj) {
  const temp = document.createElement('div');
  const feelsLike = document.createElement('div');
  const high = document.createElement('div');
  const low = document.createElement('div');

  temp.classList.add('temp');
  feelsLike.classList.add('feels-like');
  high.classList.add('high');
  low.classList.add('low');

  temp.innerHTML = `${Math.round(obj.main.temp)}°`;
  feelsLike.innerHTML = `Feels Like: ${Math.round(obj.main.feels_like)}°`;
  high.innerHTML = `High: ${Math.round(obj.main.temp_max)}°`;
  low.innerHTML = `Low: ${Math.round(obj.main.temp_min)}°`;

  weatherDisplay.appendChild(temp);
  weatherDisplay.appendChild(feelsLike);
  weatherDisplay.appendChild(high);
  weatherDisplay.appendChild(low);
}

function getCoverage(obj) {
  const coverageIcon = document.createElement('img');
  coverageIcon.src = `http://openweathermap.org/img/wn/${obj.weather[0].icon}.png`;
  const coverage = document.createElement('div');
  const coverageText = document.createElement('span');
  coverage.classList.add('coverage');
  coverageText.innerHTML = obj.weather[0].description;
  coverage.append(coverageIcon);
  coverage.appendChild(coverageText);
  weatherDisplay.appendChild(coverage);
}

function handleError() {
  weatherDisplay.innerHTML = '';
  const errorMessage = document.createElement('div');
  errorMessage.innerHTML = 'Oops! Something went wrong. Check your spelling and try again! Would hate you you to get rained on!';
  weatherDisplay.appendChild(errorMessage);
}

export { renderDom, handleError };
