import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../features/counter/todoSlice';

function ReactJs() {
  const [name, setName] = useState({ name: "", age: "" });
const [editId, setEditId] = useState(null);

const handleAddOrUpdate = () => {
  if (editId) {
    dispatch(editTodo({
      id: editId,
      updatedData: {
        name: name.name,
        age: Number(name.age)
      }
    }));
    setEditId(null);
  } else {
    dispatch(addTodo({
      name: name.name,
      age: Number(name.age)
    }));
  }

  setName({ name: "", age: "" });
};

  let handleonchange = (e)=>{
    let {name,value}=e.target
    setName((prev)=>({...prev,[name]:value}))
  }
  const handleDelete = (id) => {
  dispatch(deleteTodo(id));
  console.log('click')
};
  const todos = useSelector((state) => state.todos.todos);
const dispatch = useDispatch();

  return (
    <div>
<input
  type="text"
  name='name'
  value={name.name}
  onChange={handleonchange}
  placeholder="Enter name"
/>

<input
name='age'
  type="number"
  value={name.age}
  onChange={handleonchange}
  placeholder="Enter name"
/>
<button onClick={handleAddOrUpdate}>
  {editId ? "Update User" : "Add User"}
</button>

    <ul>
      {
        todos.map((todo)=>(
         
         
          <div key={todo.id}>
            <li>{todo.name}</li>
          <li>{todo.age}</li>
         <button onClick={() => { setName({ name: todo.name, age: todo.age }); setEditId(todo.id);}}>Edit</button>
          <br />
          <button onClick={()=>handleDelete(todo.id)}>Delete</button>
          </div>
        
        ))
      }
    </ul>
    </div>

  )
}

export default ReactJs