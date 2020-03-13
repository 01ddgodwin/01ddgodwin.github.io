// 71a82346181bab920d3274a4aa7d689d

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=71a82346181bab920d3274a4aa7d689d&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
        console.log(jsObject);

        document.querySelector('#current-temp').textContent = jsObject.main.temp;

        let image = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'
        document.querySelector('#weather-icon').setAttribute('src', image);
        
        let alt = jsObject.weather[0].description;
        document.querySelector('#weather-icon').setAttribute('alt', alt);
  });