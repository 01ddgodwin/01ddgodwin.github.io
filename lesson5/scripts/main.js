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

document.querySelector('#current-temp').innerHTML = '50&deg';
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10&percnt;';

/*PANCAKE*/
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
else {
    aside.style.display = 'none';
}