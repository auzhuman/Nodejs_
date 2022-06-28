
module.exports = (req,res,next) => {
    if(req.query.product === "dell laptop"){
        // next();
        res.json({
            message : "inside search product dell laptop"
        })
    }
    else{
        next({
            message : "PRODUCT not found",
            status : 300
        })
    }
}

