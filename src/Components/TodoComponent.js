import React, { useState, useEffect } from "react";
import styles from "./TodoComponent.style";
import "./TodoComponent.css";
function TodoComponent({ task, deleteTodo, completedTodo }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function changeTitle() {
      setWindowSize(window.innerWidth);
      //   console.log("the width is changing:", window.innerWidth);
    }
    window.addEventListener("resize", changeTitle);
  });
  return (
    <div className="todoComponent">
      <div
        style={windowSize < 600 ? styles.taskContainerS : styles.taskContainer}
      >
        <div
          style={windowSize < 600 ? styles.taskWrapperS : styles.taskWrapper}
        >
          {windowSize < 600 ? (
            <p
              style={{
                ...styles.taskS,
                textDecoration:
                  task.completed === true ? "line-through" : "none",
              }}
            >
              {task.text}
            </p>
          ) : (
            <p
              style={{
                ...styles.task,
                textDecoration:
                  task.completed === true ? "line-through" : "none",
              }}
            >
              {task.text}
            </p>
          )}

          <div
            style={windowSize < 600 ? styles.iconWrapperS : styles.iconWrapper}
          >
            <i
              className="fas fa-check-circle"
              style={
                windowSize < 600 ? styles.completedIconS : styles.completedIcon
              }
              onClick={() => {
                completedTodo(task.text);
              }}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={windowSize < 600 ? styles.deleteIconS : styles.deleteIcon}
              onClick={() => deleteTodo(task.text)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoComponent;
