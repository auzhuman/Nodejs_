module.exports = (req,res,next) => {
    if (req.query.pay === "done"){
        next();
    }
    else{
        res.json({message : " please pay first" })
        }
    }
