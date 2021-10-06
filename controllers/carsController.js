exports.index = (req, res) => {

    const data = require('../public/data/cars.json');
    res.json(data);
};

exports.id = (req, res) => {
    res.sendfile('public/data/cars.html');
};