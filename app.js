const express = require('express');
const { Reservation } = require('./models/index.js');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const jsonParser = bodyParser.json();

// Create a reservation
app.post('/reservations', jsonParser, async (req, res) => {
    try {
        const {
            name,
            phone,
            table,
            datetime,
            numberOfGuests
        } = req.body;
        const query = { name, phone, table, datetime, numberOfGuests };
        const reservation = await Reservation.findOrCreate({where: query});
        res.status(201);
        res.send({id: reservation[0].id});
    } catch (e) {
        // A field is missing from the request body
        console.log(e);
        res.status(400).send('Bad Request');
    }
});

// Return all reservations
app.get('/reservations', (req, res) => {
    Reservation.findAll({order: [['createTime', 'DESC']]})
    .then(reservations => {
        res.send({reservations});
    });
});

// Return a reservation by ID
app.get('/reservations/:id', async (req, res) => {
    try {
        const id = req.params['id'];
        const reservation = await Reservation.findByPk(id);
        if (reservation) {
            res.send(reservation);
        } else {
            // Reservation with given ID does not exist
            res.status(404).send('Not Found');
        }
    } catch (e) {
        // Provided ID is not an integer
        console.log(e);
        res.status(400).send('Bad Request');
    }
});

app.listen(port, () => console.log(`Capital Grille API listening on port ${port}`));
