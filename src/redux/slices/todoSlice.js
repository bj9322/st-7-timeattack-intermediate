import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.id === action.payload;
      }
    },
  },
});


export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;