//WEATHER SUMMARY

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=71a82346181bab920d3274a4aa7d689d&units=imperial";

fetch(apiURL)
  .then(response => response.json())
  .then((jsObject) => {
      console.log(jsObject);

      let currentTemp = jsObject.main.temp;
      let windSpeed = jsObject.wind.speed;
      let windChill = 0;

      if (currentTemp < 50 && windSpeed > 3) {
        windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
      }

      document.getElementById("currentTemp").innerHTML = currentTemp.toFixed(0) + '&deg';
      document.getElementById("windSpeed").innerHTML = windSpeed.toFixed(0) + ' mph';

      if (windChill === 0) {
        document.getElementById("windChill").innerHTML = 'N/A';
      }
      else {
        document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg';
      }

      document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;

      let imageURL = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';

      document.querySelector('#weatherImage').setAttribute('src', imageURL);
      document.querySelector('#weatherImage').setAttribute('alt', imageURL);

    });

const apiURLForecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=71a82346181bab920d3274a4aa7d689d&units=imperial";

fetch(apiURLForecast)
    .then(response => response.json())
    .then((jsObject) => {
      let counter = 1;
      jsObject.list.forEach(
        forecast => {
          if (forecast.dt_txt.includes('18:00')) {
            let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
            let dayOfWeek = daysOfWeek[forecastDate.getDay()];

            document.getElementById(`day${counter}`).textContent = dayOfWeek;

            document.getElementById(`temp${counter}`).innerHTML = forecast.main.temp.toFixed(0) + '&deg';
            console.log(forecast);
            
            
            let imageURLForecast = 'https://openweathermap.org/img/wn/' + jsObject.list[counter].weather[0].icon + '.png';

            document.querySelector(`#weather${counter}`).setAttribute('src', imageURLForecast);
            
            console.log(imageURLForecast);
            counter++;
            
          }
        }
      );
      
    });

// fetch('https://byui-cit230.github.io/weather/data/towndata.json')
//     .then(result => { return result.json()
//         }
//     )
//     .then(
//         townList => {
//             let towns = townList.towns;
//             towns.forEach(
//                 town => {
//                     let section = document.createElement('section');

//                     let event1 = document.createElement('p');
//                     event1.textContent = town.events;

//                     // let event2 = document.createElement('p');
//                     // event2.textContent = `${town.events[1]}`;

//                     // let event3 = document.createElement('p');
//                     // event3.textContent = `${town.events[2]}`;

//                     section.appendChild(event1);
//                     // section.appendChild(event2);
//                     // section.appendChild(event3);

//                     document.querySelector('#townEvents').appendChild(section);

//                     console.log(town);
//                 }

//             )
//         }
//     )

// fetch('https://byui-cit230.github.io/weather/data/towndata.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let event = data.towns[0].events[0];

//     var towns = document.getElementById("townEvents");
//     document.querySelector(`#townEvents`);
//     console.log(data);
//   });