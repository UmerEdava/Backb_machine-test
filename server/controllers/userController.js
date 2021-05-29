const db = require('../config/connection')
const collections = require('../config/collections')

module.exports = {
    sampleApi : (req,res)=>{
        res.json({name:'umer'})
    }
}