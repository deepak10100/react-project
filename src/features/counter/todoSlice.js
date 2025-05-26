import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newUser = {
        id: nanoid(),
        name: action.payload.name,
        age: action.payload.age,
      };
      state.todos.push(newUser);
      console.log(action.payload.name)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index] = { ...state.todos[index], ...updatedData };
      console.log( { ...updatedData })
      console.log( { ...state.todos[index] })
    },
  },
});

// export all actions including editTodo
export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
