import React from "react";
import styles from "./TodoComponent.style";
function TodoComponent({ task, deleteTodo, completedTodo }) {
  return (
    <div>
      <div style={styles.taskContainer}>
        <div style={styles.taskWrapper}>
          <p
            style={{
              ...styles.task,
              textDecoration: task.completed === true ? "line-through" : "none",
            }}
          >
            {task.text}
          </p>
          <div style={styles.iconWrapper}>
            <i
              className="fas fa-check-circle"
              style={styles.completedIcon}
              onClick={() => {
                completedTodo(task.text);
              }}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={styles.deleteIcon}
              onClick={() => deleteTodo(task.text)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoComponent;
