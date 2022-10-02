import React from "react";
import { connect } from "react-redux";
import AddTodo from "../Components/AddTodo";
import TodoComponent from "../Components/TodoComponent";
import { addTask, completedTask, deleteTask } from "../redux/actions";
import styles from "./Main.styles";
export const Main = (props) => {
  console.log("main", props.taskItems);
  return (
    <div style={styles.appContainer}>
      <div style={styles.contaier}>
        <h1 style={styles.titleStyle}>ToDo List</h1>
        <div style={styles.inputWrapper}>
          {" "}
          <AddTodo
            addTodo={(todo) => {
              props.addTodo(todo);
            }}
          />
          <hr style={styles.seperator} />
        </div>
        {/* here I was rendering only one component */}
        {/* <TodoComponent /> */}
        {props.taskItems.map((task) => {
          return (
            <TodoComponent
              task={task}
              deleteTodo={(task) => {
                props.deleteTodo(task);
              }}
              completedTodo={(task) => {
                props.completedTodo(task);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  taskItems: state.taskItems,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTask(todo)),
  deleteTodo: (task) => dispatch(deleteTask(task)),
  completedTodo: (task) => dispatch(completedTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
