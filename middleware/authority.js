module.exports = (req,res,next) => {
    if (req.query.auth ==="admin"){
        next();
    }else{
        // res.end("you dont have authority")
        // response from error middleware
        next({
            msg : "you don't have the authority",
            status : 400
        })
    }
}