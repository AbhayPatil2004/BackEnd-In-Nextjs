import { headers } from "next/headers"
import todosData from "../../../../todos.json" 
import { writeFile } from "node:fs/promises"

export function GET( request ){
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

    console.log(request)

    return Response.json( todosData)
}

export async function POST( request ){
    const todo = await request.json() ;
    const newtodo = todosData.push({
        id : todosData.length + 1 ,
        text : todo.text ,
        completed : false 
    })

    
    todosData.push(newtodo)
    await writeFile("todos.json" , JSON.stringify(todosData,null,2))
    return Response.json(newtodo )
}