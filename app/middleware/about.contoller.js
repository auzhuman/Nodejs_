
//import router to route
const about = require("express").Router()

about.get("/",(req,res,next) => {
    res.send("inside about/")
})

about.get("/contacts",(req,res,next) => {
    res.send("inside about/contacts")
})


// using route for multiple operation
about.route("/address")
.get((req,res,next) => {
   res.send("this is inside about/address")
})

.put()
.post()


about.route("/email")
 .get((req,res,next) => {
     res.json({message :"this is inside /contacts/email"})
 })



module.exports = about;