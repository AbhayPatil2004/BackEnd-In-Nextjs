'use client'
import Link from "next/link";
import registerUser from "./test";
import { useActionState } from "react";
import { registerSchema } from "@/lib/schema/userSchema";

export default function page(){

    // const value = useActionState(registerUser);
    const handelSubmit = async (e) =>{
        e.preventDefault() 

        const formData = new FormData(e.target)
        console.log(formData)

        const newUser = {
            name : formData.get("name"),
            email : formData.get("email"),
            password : formData.get("password")
        }

        const result = registerSchema.safeParse(newUser)
        console.log(result);
        // if( newUser.name.length < 3 ){
        //     console;e.log("Error Occred")
        //     return ;
        // }
        // if( !newUser.email.includes("@") ){
        //     console;e.log("Error Occred")
        //     return ;
        // }
        // if( password.password,length < 8 ){
        //     console;e.log("Error Occred")
        //     return ;
        // }

        registerUser({ name : "abhay" , email : "abhya@123" , password : 3214143 })
    }

    const [ state , formAction , isPending ] = value ;

    console.log(value);
    return(
        <div>
            <form
                onSubmit={handelSubmit}
            >
            </form>
        </div>
    )
}