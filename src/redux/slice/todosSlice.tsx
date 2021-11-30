import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const initialTodos: ITodo[] = [
  { id: 0, text: "Todo 1", completed: false },
  { id: 1, text: "Todo 2", completed: true },
  { id: 2, text: "Todo 3", completed: false },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<ITodo>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleteTodo: (state, action: PayloadAction<ITodo>) => {
      const todo = action.payload;
      state[todo.id].completed = !state[todo.id].completed;
    },
  },
});

export const { addTodo, removeTodo, toggleCompleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
