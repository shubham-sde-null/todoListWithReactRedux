import React from "react";
import styles from "./AppTodo.styles";
function AddTodo() {
  return (
    <div>
      <input
        type="text"
        placeholder="enter the task"
        style={styles.inputField}
      />
      <button style={styles.submitButton}>Click</button>
    </div>
  );
}
export default AddTodo;
