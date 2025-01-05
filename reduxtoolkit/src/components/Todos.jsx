import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo } from '../features/Todo/TodoSlice'

const Todos = () => {
const dispatch = useDispatch()
const todos = useSelector(state => state.todos)


console.log(todos)


  return (
   <>
   <div>
    Todos
   </div>

    {  
      todos.map((todo) => (
        <li key={todo.id} > 
          { 
            todo.text
          }
            
            <button onClick={(e)=> dispatch(removeTodo(todo.id))} >
              X
            </button>

          </li>
      ))
    }

   </>
  )
}

export default Todos