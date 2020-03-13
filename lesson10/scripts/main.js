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

/*declare date variable */
let currentDate = new Date();
let fullDate;

/*day of week*/
let daysOfWeek  = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let dayOfWeek = currentDate.getDay();
fullDate = daysOfWeek[dayOfWeek];

/*day of month*/
let dayOfMonth = currentDate.getDate();
fullDate += ', ' + dayOfMonth;

console.log(fullDate);

/*month*/
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
fullDate += ' ' + months[currentDate.getMonth()];

/*full year*/
let year = currentDate.getFullYear();
fullDate += ' ' + year;

/*full date*/
document.querySelector('#current-date').textContent = fullDate;


/*Pull Down Menu*/
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

/*WEATHER SUMMARY*/
// let f,t,s;
// t = 50;
// s = 10;

// if (t <= 50 && s >= 3) {
//     f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16);
//     document.querySelector('#windChill').innerHTML = f.toFixed(0) + '&deg';
// }else {
//     f = 'N/A';
//     document.querySelector('#windChill').innerHTML = f;
// }

// document.querySelector('#current-temp').innerHTML = t + '&deg';
// document.querySelector('#windSpeed').innerHTML = s + 'MPH';

/*PANCAKE*/
const aside = document.querySelector('#pancake');

if (currentDate.getDay() === 5) {
    aside.style.display = 'none';
    console.log(aside)
}
else {
    aside.style.display = 'block';
    console.log(aside)
}

/*GOOGLE FONTS*/

WebFont.load({
    google: {
      families: [
        'Righteous',
        'Roboto'
      ]
    }
  });