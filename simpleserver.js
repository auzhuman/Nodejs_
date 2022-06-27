var http = require ("http")

var server = http.createServer(function(req,res){
    console.log("I am connected to the server")
    // console.log(req)
    res.end("welcome to the server")
})
 

// listen = url + method
server.listen(9020,"127.0.0.1",function(err,done){
    if (err){
        console.log("There is error in listening to port 9090")
    }
    else {
        console.log("Succesfully listening to port 9090")
    }
})

console.log("outer works")
 