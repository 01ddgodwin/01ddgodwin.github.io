/* Wednesday, 20 May 2020*/


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
let f,t,s;
t = 50;
s = 10;

if (t <= 50 && s >= 3) {
    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16);
    document.querySelector('#windChill').innerHTML = f.toFixed(0) + '&deg';
}else {
    f = 'N/A';
    document.querySelector('#windChill').innerHTML = f;
}

document.querySelector('#current-temp').innerHTML = t + '&deg';
document.querySelector('#windSpeed').innerHTML = s + 'MPH';

/*PANCAKE*/
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
else {
    aside.style.display = 'none';
}

WebFont.load({
    google: {
      families: [
        'Righteous', cursive,
        'Roboto', sans-serif
      ]
    }
  });