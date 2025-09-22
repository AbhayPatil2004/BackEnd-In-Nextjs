import mongoose from "mongoose";

const user = mongoose.models.user || mongoose.model("user" , {
    name : {
        type : String ,
        requried : true 
    },
    email :{
        type : String ,
        requried : true , 
        unique : true  
    },
    password : {
        type : String ,
        requried : true 
    }
})

export default user