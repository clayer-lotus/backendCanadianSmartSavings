const express = require("express");
const cors = require("cors");


const https = require('https')
const request = require('request')
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next1) => {
    console.log("Use Header")
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next1();
});
app.get("/", (req, res) => {
    res.send("Hello");
});

app.post('/canadian-smart-savings/get-a-quote', function (req, res) {
    console.log(req.body);

    request({
        uri: "https://workflow-automation.podio.com/catch/2328e470au0u194",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)

    }, function (err, resp, body) {

        if (resp.statusCode != 200) res.sendStatus(400)
        else res.json({ "status": "success" });

    });


})

app.post('/canadian-smart-savings/schedule-service', function (req, res) {
    console.log(req.body);

    request({
        uri: "https://workflow-automation.podio.com/catch/6td647n6038c800",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)

    }, function (err, resp, body) {

        if (resp.statusCode != 200) res.sendStatus(400)
        else res.json({ "status": "success" });

    });


})

app.listen(port, () => {
    console.log("I am live again");
})

