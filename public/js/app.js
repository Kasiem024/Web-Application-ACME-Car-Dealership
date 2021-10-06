console.log('app is running');

let dataURL = '../data/cars.json';
let req = new XMLHttpRequest();

req.open('GET', dataURL);
req.responseType = 'json';
req.send();

console.log('data received');

req.onload = () => {
    const data = req.response;
    console.log(data);

    const cars = data['carsList'];

    const myList = document.createElement('ul');

    for (let i = 0; i < cars.length; i++) {
        console.log(i);
        const listItem = document.createElement('li');
        listItem.textContent = "Make: " + cars[i].Make + " Model: " + cars[i].Model + " Year: " + cars[i].Year;
        myList.appendChild(listItem);
    };

    document.getElementById('cars').appendChild(myList);
};