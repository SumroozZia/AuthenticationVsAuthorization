const loadRegister = async(req,res)=>{
try {
    res.status(200).render("registration")
} catch (error) {
    res.status(500).sent({
        message: error.message
    })
}
}
module.exports = {loadRegister};