
module.exports = (req,res,next) => {
    if (req.query.password === "hello"){
        next()
    }
    else{
        next({
            message : "incorrect password",
            status : 403
        })
    }
}