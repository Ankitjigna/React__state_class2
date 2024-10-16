import { useState } from "react"

export default function TodoList() {
    let [todos ,setTodos] = useState(["sample"]);
    let [newTodos ,setNewTodos] = useState("");

    let addNewTask = ()=>{
        setTodos([...todos ,newTodos]);
        setNewTodos("");
    };

    let updateTodoValue = (event)=>{
        setNewTodos(event.target.value);
    }

    return (
        <div>
            <input placeholder="add task here!" onChange={updateTodoValue} value={newTodos} ></input>
            <br></br>
            <button onClick={addNewTask} >Add Task</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h4> Todo List!</h4>
            <ul>
                {todos.map((todo)=>(
                    <li>{todo}</li>
                ))}
                
            </ul>
        </div>
    )
}