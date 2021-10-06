'use strict'

console.log('app.js is running');

let dataURL = '../data/cars.json';
let req = new XMLHttpRequest();

req.open('GET', dataURL);
req.responseType = 'json';
req.send();

console.log('Data received!');

req.onload = () => {
    const data = req.response;
    console.log(data);

    const cars = data['cars'];

    const myList = document.createElement('ul');

    for (let i = 0; i < cars.length; i++) {
        console.log(i);
        const listItem = document.createElement('li');
        listItem.textContent = "Make: " + cars[i].Make + " Model: " + cars[i].Model + " Year: " + cars[i].Year;
        myList.appendChild(listItem);
    };

    document.getElementById('showCarsList').appendChild(myList);
};