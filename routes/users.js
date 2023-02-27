const express=require('express');


const userRouter=express.Router();
const user=require('../models/users');



userRouter.post('/add',async(req,res)=>{
   try {

    let x = new user(req.body);
    let result = await x.save();
res.send({users:result,msg:'user aded successfuly'});
    } 
    catch (error) {
        console.log(error)
    }
})



module.exports= userRouter;