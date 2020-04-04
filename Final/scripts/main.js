// FOOTER CURRENT DATE

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
// const hambutton = document.querySelector(".ham");
// hambutton.addEventListener("click", toggleMenu, false);

// function toggleMenu() {
//   document.querySelector(".navigation").classList.toggle("responsive");
// }

// TEMPLE JSON

fetch('json/temple.json')
    .then(response => response.json())
    .then(
        response => {
            console.log(response);

            // Mesa Arizona Temple
            document.querySelector('#temple1-name').textContent = response[0].name;
            document.querySelector('#address1').textContent = response[0].address;
            document.querySelector('#phone1').textContent = response[0].phone;

            response[0].service.forEach(
                service => {
                    document.querySelector('#services1').innerHTML += `<li>${service}</li>`;
                }
            )

            document.querySelector('#baptism1').textContent = response[0].schedule.ordinance.baptism;
            document.querySelector('#endowment1').textContent = response[0].schedule.ordinance.endowment;
            document.querySelector('#sealing1').textContent = response[0].schedule.ordinance.sealing;

            response[0].closure.forEach(
                service => {
                    document.querySelector('#closures1').innerHTML += `<li>${service}</li>`;
                }
            )

            response[0].history.forEach(
                service => {
                    document.querySelector('#history1').innerHTML += `<h3>${service}</h3>`;
                }
            )

            // Billings Montana Temple
            document.querySelector('#temple2-name').textContent = response[1].name;
            document.querySelector('#address2').textContent = response[1].address;
            document.querySelector('#phone2').textContent = response[1].phone;

            response[1].service.forEach(
                service => {
                    document.querySelector('#services2').innerHTML += `<li>${service}</li>`;
                }
            )

            document.querySelector('#baptism2').textContent = response[1].schedule.ordinance.baptism;
            document.querySelector('#endowment2').textContent = response[1].schedule.ordinance.endowment;
            document.querySelector('#sealing2').textContent = response[1].schedule.ordinance.sealing;

            response[1].closure.forEach(
                closure => {
                    document.querySelector('#closures2').innerHTML += `<li>${closure}</li>`;
                }
            )

            response[1].history.forEach(
                service => {
                    document.querySelector('#history2').innerHTML += `<h3>${service}</h3>`;
                }
            )

            // London England Temple
            document.querySelector('#temple3-name').textContent = response[2].name;
            document.querySelector('#address3').textContent = response[2].address;
            document.querySelector('#phone3').textContent = response[2].phone;

            response[2].service.forEach(
                service => {
                    document.querySelector('#services3').innerHTML += `<li>${service}</li>`;
                }
            )

            document.querySelector('#baptism3').textContent = response[2].schedule.ordinance.baptism;
            document.querySelector('#endowment3').textContent = response[2].schedule.ordinance.endowment;
            document.querySelector('#sealing3').textContent = response[2].schedule.ordinance.sealing;

            response[2].closure.forEach(
                closure => {
                    document.querySelector('#closures3').innerHTML += `<li>${closure}</li>`;
                }
            )

            response[2].history.forEach(
                history => {
                    document.querySelector('#history3').innerHTML += `<h3>${history}</h3>`;
                }
            )

            // Cedar City Utah Temple
            document.querySelector('#temple4-name').textContent = response[3].name;
            document.querySelector('#address4').textContent = response[3].address;
            document.querySelector('#phone4').textContent = response[3].phone;

            response[3].service.forEach(
                service => {
                    document.querySelector('#services4').innerHTML += `<li>${service}</li>`;
                }
            )

            document.querySelector('#baptism4').textContent = response[3].schedule.ordinance.baptism;
            document.querySelector('#endowment4').textContent = response[3].schedule.ordinance.endowment;
            document.querySelector('#sealing4').textContent = response[3].schedule.ordinance.sealing;

            response[3].closure.forEach(
                closure => {
                    document.querySelector('#closures4').innerHTML += `<li>${closure}</li>`;
                }
            )

            response[3].history.forEach(
                history => {
                    document.querySelector('#history4').innerHTML += `<h3>${history}</h3>`;
                }
            )
        }
    );

var navList = document.getElementById("nav-lists");
function Show() {
    navList.classList.add("_Menus-show");
}

function Hide(){
    navList.classList.remove("_Menus-show");
}
