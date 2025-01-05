import {  createSlice , nanoid } from '@reduxjs/toolkit'


//! initialState
const initialState = {todos : []}
//? Step 1 : CreateSlice 
const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid() ,
                text : action.payload
            }

            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo)=>(
                state.todos = todo.id !== action.payload
            ))
        },
        //! you have to do it later >>>>
        updateTodo : (state,action) => {
                state.todos = state.todos.map((todo)=>(
                    action.payload.id == todo.id ? {...todo,text : action.payload.text} : todo ))

          }
    }
})

//? Step 2 :  export Slice methods ( using slice.actions)
export const { addTodo , removeTodo, updateTodo } = todoSlice.actions

//? Step 3 : export default reducer  ( using slice.reducer)
export default todoSlice.reducer