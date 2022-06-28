const fs = require('fs')

// fs.writeFile("./fileserver.txt","This is a new file",(err,done)=>{
//     if (err){
//         console.log("there is an error",err)

//     }
//     else{
//         console.log("there is success",done)
//     }
// })
const fileWrite = require("./fileOperation")

// //write operation
// fileWrite.write("newfile.txt","This is my new text file")
// .then(function(data){
//     console.log("succes in write ",data)
// })
// .catch((data)=>{
//     console.log("there is error in write ",data)
// })
// .finally((data)=>{
//     console.log("process terminated")

// })

//read operation
fileWrite.reads("./Myfile.txt","utf8")
.then((data)=>{
    console.log("successful in read : ",data)
})
.catch((data)=>{
    console.log("failure in read",data)
})
.finally((data)=>{
    console.log("terminated")
})



// rename operation

fileWrite.rename("./filewrite.js","./fileOperation.js")
.then((data) => {
    console.log("success in rename",data)
})
.catch((data) => {
    console.log("failure in rename",data)
})