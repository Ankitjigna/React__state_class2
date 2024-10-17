import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample", id: uuidv4() ,isDone:false}]);
  let [newTodos, setNewTodos] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodos, id: uuidv4() ,isDone:false}]);
    setNewTodos("");
  };

  let updateTodoValue = (event) => {
    setNewTodos(event.target.value);
  };

  let deleteTodo = (id) => {
    // let copy = todos.filter((todo)=> todo.id != id);
    // setTodos(copy);
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let updateCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let MarkAllDone = ()=>{
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone:true,
        };
      })
    );
  }
  let MarkDone = ()=>{
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone:true,
        };
      })
    );
  }

  return (
    <div style={{backgroundColor:"yellow", color:"black"}}>
      <input
        placeholder="add task here!"
        onChange={updateTodoValue}
        value={newTodos}
      ></input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4> Todo List!</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}> {todo.task} </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete task</button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase </button>
            &nbsp;&nbsp;
            <button onClick={() => MarkDone(todo.id)}>Done task</button>
          </li>
        ))}
        <br></br>
        <br></br>
        <button onClick={updateCaseAll}>UpperCase All</button>
        &nbsp;&nbsp;
        <button onClick={MarkAllDone}>Done All</button>
      </ul>
    </div>
  );
}
