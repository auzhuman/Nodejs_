const fs = require("fs");
// const { resolve } = require("path")

//write file
function thiswrite(filepath,content){
    return new Promise((resolve,reject) => {
        fs.writeFile(filepath,content,(err,done) => {
            if (err){
                // console.log("error in write",err)
                reject(err)
            }
            else{
                // console.log("success in write",done)
                resolve(done)
            }

        })   
    })
}

//read file
function readfiles(filelocation,enc){
    // console.log("inputs are ",filelocation, enc);
    return new Promise((resolve,reject)=>{
        fs.readFile(filelocation,enc,(err,done)=>{
            if (err){
                reject(err)
            }
            else{
                // console.log("data is ",done)
                resolve(done)
            }

        })
        
    })
}

//reanme file
function renamefile(oldFileName,newFileName){
    return new Promise((resolve,reject) => {
        fs.rename(oldFileName,newFileName,(err,done) =>{
            if (err){
                reject(err)
            }
            else{
                resolve(done)
            }
        })
    })
}

module.exports = { 
    write : thiswrite,
    reads : readfiles,
    rename : renamefile
}