import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: any;
}

const initialState: InitialState = {
  tasks: [
    {
      id: 1,
      title: "Do a great job and join the best Product team B)",
      isDone: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    editTodo: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (todo: any) => todo.id === action.payload.id
      );

      state.tasks[taskIndex] = {
        id: action.payload.id,
        title: action.payload.title,
        isDone: action.payload.isDone,
      };
    },

    setTodo: (state, action) => {
      state.tasks.push({
        id: new Date(),
        title: action.payload,
        isDone: false,
      });
    },

    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter(
        (todo: any) => todo.id !== action.payload
      );
    },
  },
});

export const { actions, reducer } = todoSlice;
