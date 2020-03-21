const express = require('express')
const app = express()
const request = require('../controller/handle');
const logger = require('../util/logger.js');

app.get('/test', (req,res) => {
    res.send('test')
});


module.exports = app