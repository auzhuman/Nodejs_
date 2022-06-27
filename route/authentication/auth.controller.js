const router = require('express').Router()
// const router = express.Router()

router.get('/',(req,res,next) => {
    res.end("processing authorizn")
})

router.get('/username',(req,res,next) => {
    res.end("your user name")
})


module.exports = router;