import userModel from "@/model/TodoModel";
import session from "@/model/session";
import { connectDB } from "@/lib/connectDB";

export async function POST(rrquest){
    connectDB() ;
    try{
        const sessionId = getUserSessionId() 
        console.log(sessionId)
        await session.findByIdAndUpdate(sessionId)

        return Response.json({
            status : 200
        })
    }
    catch(error){
        console.log(error)
    }
}