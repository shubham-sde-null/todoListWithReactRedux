export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETED_TASK = "COMPLETED_TASK";
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});
export const deleteTask = (task) => ({
    type: DELETE_TASK,
    //here in this task only text will be sent, when we click on the delete button, and that will be get stored in the payload and it will get compared with the state.taskItems.task(here this is object inside which we have array and inside that again we have object and inside that object we have two property text and completed, this completed is used for strike on completed task)
    payload: task,
});
export const completedTask = (task) => ({
    type: COMPLETED_TASK,
    payload: task,
});