# Capital Grille API

Simple RESTful Node.js API

# Remote API

<https://captial-grille-api.herokuapp.com/reservations>

# Local Setup

## Install

    npm install

## Create PostgreSQL DB

    psql -d postgres -U <your machine username>
    create database capital_grille;
    create user admin with encrypted password 'fH]YKSD$+[7p`~y,CX}3v)q4/F]QW,J:';
    grant all privileges on database capital_grille to admin;

## Run DB migration

    npx sequelize-cli db:migrate

## Run Capital Grille API

    npm start

# Endpoints

## Get all reservations

### Query Params

* name (optional): filter results by name of reservation
* date (optional): filter results by date of reservation

### Request

`GET /reservations`

    curl -i -H 'Accept: application/json' http://localhost:3000/reservations

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 317
    ETag: W/"13d-/UWmDx6l7TxQkB+4PCAK0jbySXk"
    Date: Tue, 20 Oct 2020 11:40:11 GMT
    Connection: keep-alive

    {
        "reservations": [
            {
                "id": 1,
                "createTime": "2020-10-20T10:50:48.529Z",
                "table": 53,
                "datetime": "2020-05-28T20:30:00.000Z",
                "numberOfGuests": 2,
                "name": "Richardson",
                "phone": "5138899393"
            }
        ]
    }

## Create a reservation

### Request

`POST /reservations`

    curl -i -H "Accept: application/json" \
        -H "Content-type: application/json" \
        --request POST \
        -d '{"table": 53,"datetime": "2020-05-28T20:30:00Z","numberOfGuests": 2, "name": "Richardson","phone": "5138899393"}' \
        http://localhost:3000/reservations

### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 8
    ETag: W/"8-M1u4Sc28uxk+zyXJvSTJaEkyIGw"
    Date: Tue, 20 Oct 2020 11:41:14 GMT
    Connection: keep-alive

    {"id":1}

### Bad Request response

    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Security-Policy: default-src 'none'
    X-Content-Type-Options: nosniff
    Content-Type: text/html; charset=utf-8
    Content-Length: 1088
    Date: Tue, 20 Oct 2020 11:43:24 GMT
    Connection: keep-alive

    Bad Request

## Get a reservation by ID

### Path Params

* id (required): Unique integer identifier for reservation

### Request

`GET /reservations/id`

    curl -i -H 'Accept: application/json' http://localhost:3000/reservations/1

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 157
    ETag: W/"9d-FFGn0iRq/JDJ+b+jUZu+ZixAjVk"
    Date: Tue, 20 Oct 2020 11:41:48 GMT
    Connection: keep-alive

    {"id": 1,"createTime": "2020-10-20T10:50:48.529Z","table": 53,"datetime": "2020-05-28T20:30:00.000Z","numberOfGuests": 2,"name": "Richardson","phone": "5138899393"}

### Not Found response

    HTTP/1.1 404 Not Found
    X-Powered-By: Express
    Content-Type: text/plain; charset=utf-8
    Content-Length: 9
    ETag: W/"9-0gXL1ngzMqISxa6S1zx3F4wtLyg"
    Date: Tue, 20 Oct 2020 11:42:25 GMT
    Connection: keep-alive

    Not Found

### Bad Request response

    HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Content-Security-Policy: default-src 'none'
    X-Content-Type-Options: nosniff
    Content-Type: text/html; charset=utf-8
    Content-Length: 1088
    Date: Tue, 20 Oct 2020 11:43:24 GMT
    Connection: keep-alive

    Bad Request

# Technologies

* Node.js
* Express
* PostgresSQL
* Sequalize
