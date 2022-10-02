import { ADD_TASK, DELETE_TASK, COMPLETED_TASK } from "./actions";
const initialData = {
    taskItems: [],
};
const taskReducer = (state = initialData, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                taskItems: [
                    ...state.taskItems,
                    { text: action.payload, completed: false },
                ],
            };
        case DELETE_TASK:
            return {
                ...state,
                taskItems: [
                    ...state.taskItems.filter((task) => {
                        return task.text !== action.payload;
                    }),
                ],
            };
        case COMPLETED_TASK:
            let updatedTaskItems = [];
            state.taskItems.map((task) => {
                if (task.text === action.payload) {
                    if (task.completed === true) {
                        //here I am toggling the result from strike to non-strike of completed task
                        task.completed = false;
                    } else {
                        //if the task.completed is false we will make it true
                        task.completed = true;
                    }
                }
                return updatedTaskItems.push(task);
            });
            return {
                ...state,
                taskItems: updatedTaskItems,
            };
        default:
            return state;
    }
};
export default taskReducer;