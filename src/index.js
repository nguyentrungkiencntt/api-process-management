// Import Libarys
const express = require("express");
const cors = require("cors");


// Define Variabile
const app = express();
const PORT = process.env.PORT || 5000;
const inits = require("./routes/initRoutes.route");
const { connect } = require("./config/connect");

// Set up
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json({}));

// Define Routes and Connect Database
inits.init(app);
connect();

app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
});
