const express = require('express');
const { Reservation } = require('./models/index.js');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const jsonParser = bodyParser.json();

app.post('/reservations', jsonParser, (req, res) => {
    try {
        const {
            name,
            phone,
            table,
            datetime,
            numberOfGuests
        } = req.body;
        const query = { name, phone, table, datetime, numberOfGuests };
        Reservation.findOrCreate({where: query})
        .then(([reservation]) => {
            res.send({id: reservation.id});
        });
    } catch (e) {
        res.sendStatus(400).send();
    }
});

app.get('/reservations', (req, res) => {
    // TODO: Get all reservations
    res.send({});
});

app.get('/reservations/:id', (req, res) => {
    // TODO: Get a reservation by ID
    res.send({});
});

app.listen(port, () => console.log(`Capital Grille API listening on port ${port}`));
