import { NextResponse } from "next/server"
import todosData from "../../../../../todos.json"
import { writeFile } from "node:fs/promises";

export async function GET( _ , {params}){
    // const todo = todosData.find( (t) =>t.id === params.id )

    const todo = await params.id ;
    const { id } = await params

    const TODO = todosData.find((todo) => id === todosData.id)
    // console.log(constext)

    if( !TODO ){
        return NextResponse.json({
            error : "Todo not Found"
        },
        {
            status : 400
        }
        
    )
    }
    return NextResponse.json(todosData[Number(id-1)])
}

export async function PUT( request , {params}){

    const editTodoData = await request.json() ;
    const { id } = await params 

    console.log(todo)
    const todoIndex = todosData.findIndex( ( tdod ) => id == todo.id )
    const todo = todoIndex[todoIndex]

    const editedTodo = { ...todo , ...editTodoData }

    
    todosData[todoIndex] = editTodoData ;
    await writeFile("todos.json" , JSON.stringify(todosData,null,2))
    return Response.json(newtodo )
}

export async function DELETE( _ , {params}){
    // const todo = todosData.find( (t) =>t.id === params.id )

    const todo = await params.id ;
    const { id } = await params

    const todoIndex = todosData.findIndex((todo) => id === todo.id )

    todosData.splice( todoIndex , 1 )

    await writeFile("todos.json" , JSON.stringify(todosData , null , 2))
    return Response.json( null , {
        status : 204,
    })
}