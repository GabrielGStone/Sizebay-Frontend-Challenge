import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: any;
}

const initialState: InitialState = {
  tasks: [
    {
      id: 1,
      title: "Do a great job and join the best Product team B)",
      isChecked: false,
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
        isChecked: action.payload.isChecked,
      };
    },

    setTodo: (state, action) => {
      state.tasks.push({
        id: new Date(),
        title: action.payload,
        isChecked: false,
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
