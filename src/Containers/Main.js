import React from "react";
import { connect } from "react-redux";
import AddTodo from "../Components/AddTodo";
import styles from "./Main.styles";
export const Main = (props) => {
  return (
    <div style={styles.appContainer}>
      <div style={styles.contaier}>
        <h1 style={styles.titleStyle}>ToDo List</h1>
        <div style={styles.inputWrapper}>
          {" "}
          <AddTodo />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
