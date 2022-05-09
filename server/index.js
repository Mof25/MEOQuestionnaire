const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/welcome', function (req, res) {
  res.send('<b>Hello</b> welcome to my http server made with express');
});

app.post("http://localhost:3001/submitData", (req, res) => {
  console.log("reqBody",req.body)
});
