//ทำข้อ1
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger/swagger.json');


app.get('/', function (req, res) {
    res.send('Hello world 123')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', require('./router/index'));

const port = 2199;
app.listen(2199, () => {
    console.log('Example app listening on port 2199!')
    // console.log('[Swagger] http://localhost:' + port + '/api-docs/')
})