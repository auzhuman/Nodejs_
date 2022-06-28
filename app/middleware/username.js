module.exports = (req,res,next) => {
    if (req.query.username ==="auz" ){
        next()
    }
    else{
        next({
            message : "incorrect username",
            status : 403
        })
    }
}



// && 