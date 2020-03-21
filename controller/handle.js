const logger = require('../util/logger.js');
var sql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: 'P@d0rU123',
    server: '167.71.200.91',
    database: 'pDB'
};

var err = sql.connect(config)
if (err) console.log(err);

class request {

}
module.exports = request