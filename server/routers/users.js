const router = require('express').Router()
const userController = require('../controllers/userController')
const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    console.log('verifying jwt',token)
    if(!token){
        res.send("Not authenticated")
    } else if(token){
        jwt.verify(token, "backBSecret", (err, decoded)=>{
            if(err){
                console.log(err);
                res.json({ auth: false, message: "Failed to authenticate"})
            } else {
                req.userId = decoded.id
                console.log('decoded')
                next();
            }
        })
    }
}

router.get('/',userController.sampleApi)
router.get('/userVerification',verifyJWT, userController.userVerification)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/addStore', userController.addStore)
router.post('/nearestStores', userController.nearestStores)
router.get('/getAllStores',verifyJWT, userController.getAllStores)

module.exports = router