//jshint esversion:6

const express = require("express");
const router = express.Router()
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
// app.use(app.router);
// routes.initialize(app);
app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindofday: day });

});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
