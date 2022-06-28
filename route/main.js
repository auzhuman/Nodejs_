const express = require('express')
const morgan = require("morgan")

const app = express()
const PORT  = 8090
//import authentication
const router = require('./authentication/auth.controller')

// /import identifty
const router_id = require('./register/register.controller')


app.use(morgan('dev'))

app.use('/register',router_id)
app.use('/auth',router)


//for url with no endpoint

app.use((req,res) => {
    // calling next with params invokes error handling middleware
    next({
        msg:"not found",
        status : 400
        })
    
})




//error middleware
app.use((err,req,res,next) => {
    console.log("this is a error middleware ",err)
    res.status(err.status || 400)
    res.json ({
        msg : err.msg || err,
        status : err.status ||400

    })
})


 

app.listen(PORT,(err,done) => {
    if (err){
        console.log("error in listening to port ",PORT)
    }
    else{
        console.log("successful in listening to port ",PORT)
    }
}) 



// git add.
// git commit -m "message"
// git status 
// git push origin master
//git push -u origin main

