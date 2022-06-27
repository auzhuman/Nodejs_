const router = require("express").Router()

router.route('/')
.get((req,res,next) => {
    require('fs').readFile("this",(err,done) => {

    if(err){
        return next(err)
    }
})

    // next()
    // res.end("this is from a empty url ")
})
.put((req,res,next) => {
    res.end()
})
.post((req,res,next) => {
    res.end()
})

router.route('/save')
.get((req,res,next) => {
    res.end("this is from a save url")
})
.put((req,res,next) => {
    res.end()
})
.post((req,res,next) => {
    res.end()
})

router.route('/:name') //dynamic handler must be at last 
.get((req,res,next) => {
    res.end("This from a dynamic url")
})
.put((req,res,next) => {
    res.end()
})
.post((req,res,next) => {
    res.end()
})




module.exports = router;


