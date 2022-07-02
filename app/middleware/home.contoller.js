
//import router to route
const home = require("express").Router()


//for specific endpoints use http mehod directly .get,.post but 
//for endpoints with different http method use route
home.get("/",(req,res,next) => {
    res.send("inside home/")
})

home.get("/contacts",(req,res,next) => {
    res.send("inside home/contacts")
})


// using route for multiple operation 
home.route("/login")
.get((req,res,next) => {
//    res.send("this is inside home/address")
    res.render("login.pug")
})

// .put()
.post((req,res,next) =>{
    console.log("data sent is >>",req.body)
    res.json({message : " parser parsed  data",
              data : req.body})
})


home.route("/email")
 .get((req,res,next) => {
     res.json({message :"this is inside /contacts/email"})
 })

home.route("/register")
.get((req,res,next) => {
    res.render("register.pug")
})
//post handler for register
.post((req,res,next) => {
    res.json({
        msg : "parsed  data",
        data : req.body // this body contains  the parsed data by url-encoded
    })
})
  


module.exports = home;