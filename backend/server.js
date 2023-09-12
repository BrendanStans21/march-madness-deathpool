require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const authenticationRoutes = require('./routes/authentication');
const dashboardRoutes = require('./routes/dashboard');
const drawRoutes = require('./routes/draw');
const gameRoutes = require('./routes/game');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/auth', authenticationRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/draw', drawRoutes);
app.use('/api/game', gameRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Conncected to DB and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });