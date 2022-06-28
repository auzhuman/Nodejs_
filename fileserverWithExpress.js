const express = require ('express')
const app = express()
const morgan = require('morgan')
const PORT = 8090

// import file
const file_O = require('./file_server/fileOperation.js')

// import Middleware
const auth = require("./middleware/authority")
const pay = require("./middleware/payment")

app.use(morgan('dev'))

app.get("/write",(req,res)=> {
    // res.json = {
    //     query : req.query,
        
    // }
    file_O.write(req.query.input,req.query.message)
    .then(data => {
        res.end("successful in write")
    })
    .catch(err => {
        res.end("error in write")
    })
})
//middleware pay and auth passed as argument to use
app.use(pay,auth,(req,res,next) => {
    req.sagarmatha = "this is a college"
    next(); //accessing another middleware in line

})

app.use((req,res,next) =>{
    // res.end("end of file")
    res.sendStatus(400)
})


// application level middleware
app.use((req,res,next)=>{
    res.json({
        message : "this is after payment",
        body : req.sagarmatha
    })

    // res.end("Middleware blocks this operation")
})
// localhost:8090/read?filename=Myfile.txt


app.get("/read",auth,(req,res) => {
    res.json = {
        message : " inside read with middleare"
    }
})
app.get("/read",auth,(req,res) =>{
    file_O.reads(req.query.filename,"UTF-8")
    .then(data => {
        // console.log("data at end point is ",data)
        res.end(data)
    })
    .catch( err => {
        res.end("error in read ")
    })
})


app.listen(PORT,(err,done) =>{
    if(err){
        console.log("error in listening to port ",PORT)
    }
    else{
        console.log("success in listening in port ",PORT)
    }
})

