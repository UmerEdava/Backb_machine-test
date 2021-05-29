const MongoClient = require('mongodb').MongoClient

let state = {
    dbName: ""
}

module.exports = {
    connect: (done) => {
        let url = 'mongodb://localhost:27017'
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