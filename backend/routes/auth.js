const express = require('express');
const User = require("../models/User");
const router = express.Router();
const {body, validationResult} = require('express-validator');

router.post('/createUser',[
    body('name').isLength({min:5}),
    body('email').isEmail(),
    body('password').isLength({min:6})
],async(req,res)=>{
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
    }
    try {
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry! Email already exists"})
    }
    User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    })
    // .then(user=>res.json(user)).catch(err=>console.log(err))
    // res.json({error:"Please enter a unique value for email"})
    res.json(user)
 } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured!");
}
})
module.exports = router;


   

