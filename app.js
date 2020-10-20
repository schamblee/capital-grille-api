const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.post("/reservations", (req, res) => {
    // TODO: Create a reservation
    res.send({});
});

app.get("/reservations", (req, res) => {
    // TODO: Get all reservations
    res.send({});
});

app.get("/reservations/:id", (req, res) => {
    // TODO: Get a reservation by ID
    res.send({});
});

app.listen(port, () => console.log(`Capital Grille API listening on port ${port}s`));
