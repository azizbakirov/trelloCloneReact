import { createSlice } from "@reduxjs/toolkit";

export const TaskAddValueSlice = createSlice({
  name: "input value tasks",
  initialState: {
    value: [],
  },
  reducers: {
    setTaskValue: (state, action) => {
     state.value = action.payload;
    },
  },
});

export const { setTaskValue } = TaskAddValueSlice.actions;

export default TaskAddValueSlice.reducer;
