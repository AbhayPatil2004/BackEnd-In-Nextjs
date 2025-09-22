import mongoose from "mongoose";

const session = mongoose.model.Session || mongoose.model("session" , {
    userId :{
        type : String ,
        requried : true 
    },
    createdAt :{
        type : Date ,
        default : Date.now ,
        expire : 3600
    }
})

export default session