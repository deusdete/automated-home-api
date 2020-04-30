const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./src/router')
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(function (req, res, next) {
  res.status(404).json({
    erro: "Not Found",
    method: req.method,
    originalUrl: req.originalUrl
  });
});

app.listen(process.env.PORT || 3333, function(err){
  if(err) console.log(err);
  console.log('Home Automação ativa')
})
