const express = require('express');
const routes = express.Router();

const moduleController = require('./controllers/module')

routes.post('/module', moduleController.active)

module.exports = routes;