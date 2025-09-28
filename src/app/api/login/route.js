import { connectDB } from "@/lib/connectDB";
import user from "@/model/userModel";
import { cookies } from "next/headers";
import { createHmac } from "crypto"
import session from "@/model/session";
import { Session } from "inspector";
// import session from "@/model/session";
import bcrypt from 'bcrypt'

export async function POST(request) {

    await connectDB() 

    const body = request.json ;
    const { email , password } = body ;

    try {   

        const user = await user.findOne({email});
        const isPasswordValid = bcrypt.compare(password , user.password )

        if( !user || !isPasswordValid ){
            return Response.json({
                error : 'Invalid Credentials'
            },
            {
                ststus : 400
            }
        )
        }

        const signNature = createHmac('sha256' , 'super-secret-123-xyz').update(user.id)
        .digest("hex")
        
        console.log(signNature)

        const signedUserId = `${userId}.${signNature}`

        const session = await session.create({userId:user._id})

        const cookieStore = cookies() 
        cookieStore.set("userId" , session.id) , {
            httpOnly : true ,
            maxAge : 24 * 60 * 60
        }

        return Response.json( user , {
            ststus : 200 
        })
        
    }
    catch (error) {
        console.log(error);
        return Response.json({
            message: "Login Failed",
            success: false,
        },
        {
            status: 404
        }
        )
    }
}