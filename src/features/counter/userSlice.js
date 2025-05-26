import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createTodo:(state,action)=>{
        let newObj ={
            id:nanoid(),
            name:action.payload.name,
            age:action.payload.age,
        }
        state.value.push(newObj)
        console.log(action.payload)
    },
    deleteTodo:(state,action)=>{
        state.value=state.value.filter((usr)=>usr.id!==action.payload)
    },
     editTodo:(state,action)=>{
      let {id, updateData} = action.payload
      let index = state.value.findIndex((usr)=>usr.id===id)
      state.value[index]={...state.value[index], ...updateData}
    }
  },
})

// Action creators are generated for each case reducer function
export const { createTodo,deleteTodo,editTodo } = userSlice.actions

export default userSlice.reducer