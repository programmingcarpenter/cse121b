/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Chad Carpenter';
let currentYear = '2023';
let profilePicture = 'images/photo.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of ${fullName}')



/* Step 5 - Array */

let foodArray = ['Pizza', 'Rice', 'Chicken', 'Burgers'];
foodElement.innerHTML = `<br>${foodArray}`;
let food = 'Sushi';
foodArray.push(food);
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;

