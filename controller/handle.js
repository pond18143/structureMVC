const logger = require('../util/logger.js');
var sql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: 'pond18143',
    server: 'localhost',
    database: 'mvc'
};

var err = sql.connect(config)
if (err) console.log(err);

class request {
    //  2.1-2.2 ใส่ค่า Hashtag check english & upper case in mssql
    async Create(req) {
        var message
        var english = /^[A-Za-z]+$/;
        var hashtag = req.hashtag
        if(english.test(hashtag)){
        var request = new sql.Request();
        var command = `INSERT INTO twitteraccount
        (Hashtag)
        VALUES('${hashtag}')`;
               var result = await request.query(command);
        logger.debug(result);
        logger.debug(command);
        message ={
                status_Code: 200,
                status: "success",
                message: command.recordset
                }
        return [200, message];
        }
    }
    // 3. Random database
    async Sumtag(req) {
        var message
        var request = new sql.Request();
        var sum = '';
        var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = 55 ;
        if(charactersLength <= 135 && charactersLength >=25){
        for(var i =0;i<=20;i++){
        sum += characters.charAt(Math.floor(Math.random() * charactersLength));
        var comquery = await request.query(`SELECT Hashtag
        FROM mvc.dbo.twitteraccount
        `);

        var command = `INSERT INTO twitteraccount
        (Sumtag)
        VALUES('${sum}'+'${comquery}')`;
               var result = await request.query(command);
        logger.debug(result);
        logger.debug(command);
        message ={
                status_Code: 200,
                status: "success",
                message: command.recordset
                }
        return [200, message];
        }
    }}
    //4. Scanner IO SELect ค่าคำที่มีioในดาต้าเบท
    async IO(req) {
        var message
        var request = new sql.Request();
        var command = await request.query(`SELECT Sumtag
        FROM mvc.dbo.twitteraccount
        WHERE PATINDEX('%[IO]%',Sumtag) > 1`)

    //     var que1 = await request.query(`SELECT CHARINDEX('I', ${selectall})
    //     FROM mvc.dbo.twitteraccount
    //    `)

    //     var que2 = await request.query(`SELECT CHARINDEX('O', ${selectall})
    //     FROM mvc.dbo.twitteraccount
    //     `)

    //     var command = await request.query(`SELECT que1, que2
    //     FROM pondmvc.dbo.Patients
    //     WHERE Sumtag = ${que1} AND ${que2}`)

        logger.debug(command.recordset);
        message ={
                status_Code: 200,
                status: "success",
                message: command
                }
        return [200, message];
    }
}
module.exports = request