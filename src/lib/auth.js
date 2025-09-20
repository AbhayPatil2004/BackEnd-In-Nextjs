import { Cookie } from "next/font/google"
import user from "@/model/userModel"


export async function getLoogedInuser() {


    try {

        const errorresponse = Response.json({
            error: "error in getting user"
        },

        )

        const cookieStore = await Cookie()
        const userId = cookieStore.get("userId")?.value;
        if (!userId) {
            console.log("Error in getting user")
            return errorresponse;
        }

        const user = await user.findById(userId);

        if( !user ){
            return errorresponse
        }
    }
    catch (error) {
        console.log("Error in getting user")
    }
}