import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  id: number;
  todoName: string;
  isDone: boolean;
}

interface ITodosState {
  todos: ITodo[];
}

const initialState: ITodosState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: Date.now(),
        isDone: false,
        todoName: action.payload,
      });
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeAllTodos(state) {
      state.todos = [];
    },
    changeTodoName(
      state,
      action: PayloadAction<{
        id: number;
        newTodoName: string;
      }>
    ) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, todoName: action.payload.newTodoName };
        } else return todo;
      });
    },
    changeTodoStatus(state, action: PayloadAction<number>) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else return todo;
      });
    },
  },
});

export const {
  addTodo,
  removeAllTodos,
  removeTodo,
  changeTodoName,
  changeTodoStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
