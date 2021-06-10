const express = require('express')
const cors = require('cors')
const path = require('path')
const userRouter = require('./routers/users')
const { urlencoded } = require('express')
const db = require('./config/connection')
require('dotenv').config()

const app = express() 

app.use(express.json({limit:"30mb",extended:true}))
app.use(urlencoded({limit:"30mb",extended:"true"}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cors())

db.connect((err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Database connected successfully')
    }
})

app.use('/',userRouter)

const PORT = process.env.PORT || 3001
 
app.listen(PORT,()=>{
    console.log(`Server is running successfully on port: ${PORT}`)
})