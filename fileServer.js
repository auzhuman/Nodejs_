const http = require('http')
const fileop = require('./fileOperation')
const fs = require('fs');

const PORT = 4020



var server = http.createServer((request,response) => {
    console.log("connected to the server")
    console.log(request.url)
    if (request.url === "/write"){
        fileop.write("./Myfile.txt","This is a sagarmatha site built by me")
        .then(data => {
            response.end("successful in file write",data)
        })
        .catch(err => {
            response.end("error in file write",err)
        })
    }
    else if (request.url ==="/read"){
        fileop.reads("./sagarmatha.txt","utf8")
        .then(data => {
            response.end("successful in file read")
        })
        .catch(err => {
            response.end("error in file read")
        })

    }
    else if (request.url === "/rename"){
        fileop.rename("everest.txt","sagarmatha.txt")
        .then(data =>{
            response.end("success is rename ", data)
        })
        .catch(err => {
            response.end("failure in rename ",err)
        })
    }
    else{
        response.end("no operation to perform")
    }
    
})


server.listen(PORT,(err,done) => {
    if (err){
        console.log("error in listening ",err)
    }
    else{
        console.log("successful in listening in port" + PORT)
    }
})