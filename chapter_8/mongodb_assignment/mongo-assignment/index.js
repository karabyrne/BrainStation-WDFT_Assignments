const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Dealership = require('./models/Dealerships');
const Car = require('./models/Cars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/vehicles');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to db at /data/db/")
});

// const seedDealerships = require('./seeds/dealerships');
// const seedCars = require('./seeds/cars');
// seedDealerships();
// seedCars();





app.get('/dealerships', (req, res) => {
    // res.send('GET dealerships Endpoint Reached');
    Dealership.find({})
        .then(dealerships => {
            res.json(dealerships);
        })
        .catch(err => {
            console.log(err);
        })
});

app.get('/dealerships/:id', (req, res) => {
    // res.send('GET dealership Endpoint Reached');
    let id = req.params.id;

    Dealership.findById(id)
        .then(dealership => {
            res.json(dealership);
        })
        .catch(err => {
            console.log(err);
        })

});

// get all cars

app.get('/cars', (req, res) => {
    // res.send('GET cars Endpoint Reached');
    Car.find({})
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            console.log(err);
        })

});

// get cars with a filter (e.g., year is 2017)


app.get('/cars/filter', (req, res) => {
    // res.send('GET cars Endpoint Reached');
    Car.find({
        year: "2017"
    })
        .then(cars => {
            console.log("cars came back =", cars);
            if(cars) {
            res.json(cars);
        }})
        .catch(err => {
            console.log(err);
        })

});

// get a single car with id


app.get('/cars/:id', (req, res) => {
    // res.send('GET car Endpoint Reached');
    let id = req.params.id;

    Car.findById(id)
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            console.log(err);
        })

});

// update a single car with new attribute values
app.put('/cars/update/:id', (req, res) => {

    Car.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            year: req.body.year
        })

        .then(updatedCar => {
            console.log(updatedCar);
            res.json(updatedCar);
        })
        .catch(err => {
            console.log(err);
        })
})

// get dealership of a single car (using the cars id)
app.get('/dealership/car/:id', (req, res) => {
    // res.send('GET cars Endpoint Reached');
    let carId = req.params.id;
    let dealershipId;


    Car.findById(carId)
        .then(car => {
            // res.json(car);
            dealershipId = car.dealership_id;

            Dealership.findById(dealershipId)
                .then(dealership => {
                    res.json(dealership);
                })
                .catch(err => {
                    console.log(err);
                })


        })
        .catch(err => {
            console.log(err);
        })
});






// get all cars for a single dealership

app.get('/dealerships/cars/:id', (req, res) => {
    // res.send('GET cars Endpoint Reached');
    Car.find({})
        .then(cars => {
            console.log("cars came back =", cars);
            if (cars) {
                res.json(cars);
            }
        })
        .catch(err => {
            console.log(err);
        })

});

// created a new dealership just for fun

app.post('/dealerships', (req, res) => {
    console.log(req.body);

    const Cardealership = new Dealership(req.body);

    Cardealership.save()
        .then(savedDealership => {
            console.log(savedDealership);
            res.json(savedDealership);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
})

// create a new car and save it


app.post('/cars', (req, res) => {
    console.log(req.body);

    const Vehicle = new Car(req.body);

    Vehicle.save()
        .then(savedCar => {
            console.log(savedCar);
            res.json(savedCar);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
})


app.listen(8000, () => {
    console.log('Server listening on 8000');
});
