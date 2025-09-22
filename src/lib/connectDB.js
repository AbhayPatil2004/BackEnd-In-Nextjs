import mongoose from "mongoose"

const db_url = "nbfdjhsjdfjsdhjfjsdfgiudsgfiusdGfuisdgfkjsgdzkjfgsdkjf"

export const connectDB = async () => {
    try{
        await mongoose.connect(db_url)
        console.log("Database connected Succesfully")
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}