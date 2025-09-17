import { headers } from "next/headers"
import todosData from "../../../../todos.json"
import { writeFile } from "node:fs/promises"
import db from "@/lib/connectDB"
import { connectDB } from "@/lib/connectDB"
import Todo from "@/model/TodoModel"
import { cookies  } from "next/headers"

export async function GET(request) {
    console.log("Running todo route")
    // return new Response(
    //     JSON.stringify(
    //         todosData
    //     ),
    //    {
    //      headers:{
    //         'content-Type' : "application/json"
    //     }
    //    }
    // )

    await connectDB()

    // console.log(request.headers)
    const cookieStore = await cookies() 
    const allTodos = await Todo.find();

    console.log( cookieStore.getAll())

    const response = new Response( JSON.stringify([]) , {
        headers : {
            "Set-Cookie" : "user=Abhay;path=/;httpOnly" 
        }
    })

    // return Response.json(
    //     allTodos.map(({ id, text, completed }) => ({
    //         id,
    //         text,
    //         completed
    //     }))
    // );

}

export async function POST(request) {

    await connectDB()
    const todo = await request.json();
    const { id , text , complted } = await Todo.create({text:todo.text});
    
    return Response.json({ id , text , complted } , {
        status : 200
    })
}


