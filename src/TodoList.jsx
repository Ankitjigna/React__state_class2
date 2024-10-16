import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos ,setTodos] = useState([{task : "sample", id : uuidv4()}]);
    let [newTodos ,setNewTodos] = useState("");

    let addNewTask = ()=>{
        setTodos([...todos ,{task : newTodos, id : uuidv4()}]);
        setNewTodos("");
    };

    let updateTodoValue = (event)=>{
        setNewTodos(event.target.value);
    }

    let deleteTodo = (id)=>{
        // let copy = todos.filter((todo)=> todo.id != id);
        // setTodos(copy);
        setTodos((prevTodos) => todos.filter((prevTodos)=> prevTodos.id != id));

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
                    <li key={todo.id}>
                      <span> {todo.task} </span> 
                      &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete task</button>
                    </li>
                    
                ))}
                
                
            </ul>
        </div>
    )
}