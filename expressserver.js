const express = require('express')
const app = express()
const PORT = 8080


app.get("/",(req,res) =>{
    res.end("This is a  express server")
})

// app.use(req,res,next) => {

// }

app.get("/home",(req,res) =>{
    console.log("What comes in ", req.params)
    res.json({
        input : req.params,
        query : req.query
    })
})





app.listen(PORT,(err,done)=>{
    if(err){
        console.log("error in listening to port ",PORT)
    }
    else{
     console.log("listening to port ",PORT)
    }
    
})


