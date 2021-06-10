const db = require('../config/connection')
const collections = require('../config/collections')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports = {
    sampleApi : (req,res) =>{
        res.json({name:'umer'})
    },
    userVerification: (req,res) => {
        console.log('verification',req.userId)
        if(req.userId){
            res.json({verified:true})
        }else{
            res.json({verified:false})
        }
    },
    register: async (req,res) => {
        let userDetails = req.body
        console.log('signup',userDetails)
        let existingUser = await db.get().collection(collections.USER_COLLECTION).findOne({email:userDetails.email})
        if(!existingUser){
            userDetails.password = await bcrypt.hash(userDetails.password, 10)
            db.get().collection(collections.USER_COLLECTION).insertOne(userDetails).then((response) => {
                console.log('*res',response.ops[0])
                const id = response.ops[0]._id
    
                const token = jwt.sign({
                    id
                }, "backBSecret", {
                    expiresIn: 300000000000,
                })
    
                res.json({
                    userRegistered: true,
                    token: token,
                    userId: response.ops[0]._id,
                    username: response.ops[0].name,
                })
            })
        }else{
            res.json({existingUser: true})
        }
        
    },
    login: async (req,res) => {
        let userDetails = req.body

        let existingUser = await db.get().collection(collections.USER_COLLECTION).findOne({email:userDetails.email})
        
        if(existingUser) {
            bcrypt.compare(userDetails.password, existingUser.password).then((status) => {
                if(status) {
                    const id = existingUser._id
        
                    const token = jwt.sign({
                        id
                    }, "backBSecret", {
                        expiresIn: 300000000000,
                    })
                    res.json({
                        validUser:true,
                        token:token,
                        userId:id                    
                    })
                }else{
                    res.json({incorrect:true})
                }
            })
        }else{
            res.json({notUser:true})
        }
    },
    addStore: (req,res) => {
        try {
            let storeDetails = req.body
            let radiusKm = storeDetails.radius

            // convert km to radian
            let kmToRadian = function(kilometers){
                var earthRadiusInKilometers = 6378;
                return kilometers / earthRadiusInKilometers;
            };

            storeDetails.radius = kmToRadian(radiusKm)

            let newStore = {
                name:storeDetails.name,
                location:{
                    type: "Point",
                    coordinates: [ parseFloat(storeDetails.longitude) , parseFloat(storeDetails.latitude) ]
                    },
                radius:storeDetails.radius,
            }

            db.get().collection(collections.STORE_COLLECTION).insertOne(newStore).then((response) => {
                let id = response.ops[0]._id
                res.json({storeAddedSuccessfully:true})
            }).catch((err) => {
                res.json({storeNotAdded:true})
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: `something gone wrong, err:${error}` });           
        }
        
    },
    nearestStores: async(req,res) => {

        try {
            //Find all stores within 5 kilometer radius of user

            var latitude = parseFloat(req.body.latitude);
            var longitude = parseFloat(req.body.longitude);

            let userLocation = [longitude,latitude]

            // convert km to radian
            let kmToRadian = function(kilometers){
                var earthRadiusInKilometers = 6378;
                return kilometers / earthRadiusInKilometers;
            };

            console.log(userLocation)
            db.get().collection(collections.STORE_COLLECTION).createIndex( { location : "2dsphere" } )

            let storesNearUser = await db.get().collection(collections.STORE_COLLECTION).find({location:{
                $geoWithin : {
                    $centerSphere : [userLocation, kmToRadian(5) ]
                }
            }}).toArray()

            console.log('stores',storesNearUser)

            res.json(storesNearUser)            
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: `something gone wrong, err:${error}` });             
        }

        
    },
    getAllStores: async (req,res) => {
        try {
            console.log('all')
            let allStores = await db.get().collection(collections.STORE_COLLECTION).find({}).toArray()
            res.json(allStores)            
        } catch (error) {
            console.log('err:',err)   
            res.status(500).json({ error: `something gone wrong, err:${error}` });                   
        }
    }
}