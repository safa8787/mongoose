const mongoose=require('mongoose');

const schema=mongoose.Schema
const userSchema=new schema({
    name:
    {type:String,
    required:true
},
phone:
{type:String,
required:false
},
email:
{type:String,
required:true
},

})


//const user=mongoose.model('user',userSchema);
//module.exports=user;


module.exports=mongoose.model('user',userSchema);
