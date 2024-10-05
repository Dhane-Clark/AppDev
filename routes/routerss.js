const express = require('express');
const routerss = express.Router();
const hp = require('../controller/controlerss');
routerss.get('/', hp.nom);

module.exports = routerss;
