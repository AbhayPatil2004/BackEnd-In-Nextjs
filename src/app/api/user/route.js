import mongoose from "mongoose";
import userModel from "@/model/TodoModel";
import { connectDB } from "@/lib/connectDB";
import { getLoogedInuser } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(request){

    await connectDB() ;

    const user = await getLoogedInuser() 

    if( user instanceof Response ){
        return user 
    }
    return Response.json(user)
}