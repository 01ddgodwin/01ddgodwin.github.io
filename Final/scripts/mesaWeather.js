const apiURLMesa = "https://api.openweathermap.org/data/2.5/weather?id=5304391&appid=71a82346181bab920d3274a4aa7d689d&units=imperial";

fetch(apiURLMesa)
    .then(response => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let currentTemp = jsObject.main.temp;
        let windSpeed = jsObject.wind.speed;
        let windChill = 0;

        if (currentTemp < 50 && windSpeed > 3) {
        windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
        }

        document.getElementById("currentTemp1").innerHTML = currentTemp.toFixed(0) + '&deg';
        document.getElementById("windSpeed1").innerHTML = windSpeed.toFixed(0) + ' mph';

        if (windChill === 0) {
        document.getElementById("windChill1").innerHTML = 'N/A';
        }
        else {
        document.getElementById("windChill1").innerHTML = Math.round(windChill) + '&deg';
        }

        document.querySelector('#weatherDesc1').textContent = jsObject.weather[0].main;

        let imageURL = 'https://tiendzung96.github.io/cit230/super-accurate-weather/images/weather-icon/' + jsObject.weather[0].icon + '.png';

        document.querySelector('#weatherImage1').setAttribute('src', imageURL);
        document.querySelector('#weatherImage1').setAttribute('alt', imageURL);

    });