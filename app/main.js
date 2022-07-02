//import express
const express = require("express")
const app = express()
const path = require('path')
app.engine('pug', require('pug').__express)

//port no
const PORT = 8088

//prints log
const morgan = require("morgan")

//import middleware about
const home = require('./middleware/home.contoller')
// import middleware search
const search = require('./middleware/search')
//import middleware home
const about = require("./middleware/about")
//import middlware for login
const username = require("./middleware/username")
const password = require("./middleware/password")

//morgan usage kept at first 
app.use(morgan("dev"))



//setting template engine
app.set("view engine",require('pug'))
app.set("views",path.join(process.cwd(),"views"))
//setting template engine


// parser for json
app.use(express.json())

//parser for get-url-encoded
app.use(express.urlencoded({
    extended: "true"
}))

app.use("/login",username,password,(req,res,next) => {
    res.send("login success")
})
app.use("/home",home)
app.use("/about",about)
app.use("/search",search)

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