import React from "react";
import {FilterValuesType} from "./App";


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number)=>void
    changeFilter: (filter: FilterValuesType)=> void
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const TodoList = (props: TodoListPropsType) => {
    let tasksList = props.tasks.length ? props.tasks.map((el: TaskType) => {
        const removeTask =()=>props.removeTask(el.id)
        return (
            <li>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    }) : <span>Your tasks list is empty</span>
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>{tasksList}</ul>
            <div>
                <button onClick={()=>props.changeFilter("all")}>All</button>
                <button onClick={()=>props.changeFilter("active")}>Active</button>
                <button onClick={()=>props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}