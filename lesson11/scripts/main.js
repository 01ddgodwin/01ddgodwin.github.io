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