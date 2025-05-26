import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../features/counter/counterSlice'
import  todosReducer  from '../features/counter/todoSlice'
import userReducer from '../features/counter/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer ,
   todos: todosReducer,
   user: userReducer,
  },
})