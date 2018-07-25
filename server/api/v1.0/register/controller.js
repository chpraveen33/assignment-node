let AddCollection = require('./model');


let registerDetails = ( req , res ) =>{
    AddCollection.create(req.body)
        .then(
            (response)=>{
                res.status(200).json({ status : true , message :"Success",userdetails:response})
            }
        ).catch(
            (error)=>{
                res.status(500).json({ status : false , message :"Error while login details , please try again" })
            }
        )
}

module.exports = {registerDetails}