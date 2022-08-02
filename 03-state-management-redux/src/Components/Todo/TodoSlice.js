import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, todo: "belajar react" },
    { id: 2, todo: "belajar redux" },
  ],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);

      state.data.push(action.payload)
    }
  },
});

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer;

