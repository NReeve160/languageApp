const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/main');
const passwordRoutes = require('./routes/password');

const app = express();
const port = 3000;

// update express settings
app.use(bodyParser.urlencoded({ extended: false})); //parses application for/x-www-form-urlencoded data
app.use(bodyParser.json()); // parse application/json

// setup routes
app.use('/', routes);
app.use('/', passwordRoutes)

//catch all other routes
app.use((request, response) => {
    response.status(404).json({message: '404 - Not Found', status: 404});
});

app.use((error, request, response, next) => {
    console.log(error);
    response.status(error.status || 500).json({error: error.message, status: 500});
});


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});