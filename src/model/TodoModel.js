import mongoose from "mongoose";
 
const userModel = mongoose.models.Todo || mongoose.model('todos' , {
    text :{
        type : String ,
        requried : true 
    },
    completed : {
        
        type : Boolean ,
        requried: true ,
        default : false  
    
    }
})

export default userModel ;

