/**
 * Created by zhangyi on 2017/11/22.
 */
const dbConfig = require('../../config/db')
const mongoose = require('mongoose')

mongoose.connect(dbConfig.dbUrl);

let db = mongoose.connection;

mongoose.Promise = global.Promise

db.on('error', function(error) {
    console.log("mongodb error:", error)
})
db.once('open', function() {
    console.log('open mongodb')
})

module.exports = mongoose
