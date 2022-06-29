module.exports = (req,res,next) => {

    // res.render("index.pug",{message : "inside home"})
    res.render("register.pug",{
        title : "KGF 2",
        message : "This is a blockbuster movie"
    })
    // res.json({
    //     message : "inside home"
    // })
}