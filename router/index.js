const express = require('express')
const app = express()
const request = require('../controller/handle');
const logger = require('../util/logger.js');

app.get('/test', (req,res) => {
    res.send('test')
});
app.post('/create', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().Create(req.body)
    res.status(result[0]).json(result[1]);
});
app.get('/sumtag', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().Sumtag(req.body)
    res.status(result[0]).json(result[1]);
});
app.get('/io', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().IO(req.body)
    res.status(result[0]).json(result[1]);
});


module.exports = app