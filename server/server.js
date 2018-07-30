const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('../db/mongoose');

const appRoutes = require('../routes/appRoutes');

let app = new express();
app.use(bodyParser.json())
appRoutes(app);




const port = process.env.PORT || 3000;
app.listen(3000,() => {
    console.log("started on port 3000");
})