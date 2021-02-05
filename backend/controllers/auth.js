const user= require("../models/user");

exports.signup=(req,res)=>{
    const user= new user(req.body)
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"NOT able to save user "
            })
        }
        res.json({
            name: user.name,
            email:user.email,
            id:user._id})
    })
    
 };

exports.signout=(req,res)=>{
        
        res.json({
            message:"UserSignout"
        });

};

