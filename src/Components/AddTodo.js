import React, { useState } from "react";
import "./AddTodo.css";
import styles from "./AppTodo.styles";
function AddTodo({ addTodo }) {
  let [todo, setTodo] = useState("");
  return (
    <div className="addTodo">
      <input
        className="placeholder"
        type="text"
        placeholder="enter the task"
        style={styles.inputField}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        //here when I click on the button my input field must become blank, but even though we set the value for our todo to null, we have to include the empty value of todo over here as well to see the input field empty
        value={todo}
      />
      <button
        style={styles.submitButton}
        onClick={() => {
          addTodo(todo);
          //used to reset the input field once the user clicked on the button
          setTodo("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}
export default AddTodo;
