const fs = require('fs');

const genders = ['M', 'F'];

console.log('genders', genders);

const maleNames = ['Jacek', 'Wiktor', 'Karol', 'Błażej', 'Andrzej', 'Adam', 'Bartek', 'Kuba', 'Tomek', 'Piotr'];

console.log(maleNames);


const femaleNames = ['Agnieszka', 'Daria', 'Dagmara', 'Dorota', 'Marta', 'Anna', 'Ola', 'Elżbieta', 'Lena', 'Katarzyna'];

const lastNames = ['Kiraga', 'Pluta', 'Sosna', 'Jaworek', 'Kwiat', 'Okoń'];


console.log(femaleNames);

console.log(lastNames);

// const people = []; 

const ages = { min: 18, max: 78 };

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

console.log(randChoice(femaleNames));


const randChoiceNumber = ({ min, max }) => {
    return Math.floor(Math.random() * (max - min +1 )) + min;
};

console.log(randChoiceNumber(ages));