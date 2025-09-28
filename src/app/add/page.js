'use client'
import Link from "next/link";
import registerUser from "./test";
import { useActionState } from "react";

export default function page(){

    // const value = useActionState(registerUser);
    const handelSubmit = async (e) =>{
        e.preventDefault() 

        const formData = new FormData(e.target)
        console.log(formData)
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