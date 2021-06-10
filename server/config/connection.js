const MongoClient = require('mongodb').MongoClient

let state = {
    dbName: ""
}

module.exports = {
    connect: (done) => {
        let url = process.env.MONGODBURL
        let dbName = 'machine-test_BackB'

        MongoClient.connect(url,(err,data)=>{
            if(err){
                done(err)
            }else{
                state.dbName = data.db(dbName)
                done()
            }
        })
    },
    get: () => {
        return state.dbName                
    }
}