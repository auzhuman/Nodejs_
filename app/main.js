//import express
const express = require("express")
const app = express()

//port no
const PORT = 8090

//prints log
const morgan = require("morgan")

//import middleware about
const about = require('./middleware/about.contoller')
// import middleware search
const search = require('./middleware/search')
//import middleware home
const home = require("./middleware/home")
//import middlware for login
const username = require("./middleware/username")
const password = require("./middleware/password")



//morgan usage kept at first
app.use(morgan("dev"))

app.use("/login",username,password,(req,res,next) => {
    res.send("login success")
})
app.use("/home",home)
app.use("/search",search)
app.use("/about",about)










//error handling middleware
app.use((err,req,res,next) =>{
    console.log("there is an error")
    res.json({
        message : err.message || err ,
        status : err.status || 400
    })
})

//server
app.listen(PORT,(err,done) => {
    if(err){
        console.log("error in listening into port = ",PORT)
    }
    else{
        console.log("succesful in listening into port = ",PORT)
    }
})