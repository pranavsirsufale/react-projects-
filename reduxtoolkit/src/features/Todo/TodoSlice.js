import { createSclice , createSlice, nanoid } from '@reduxjs/toolkit'


//! initialState
const initialState = { 
    todos : []
}

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
            state.todos.slice(action.payload , 1)
        },


        //! you have to do it later >>>>
        updateTodo : (state,action) => {

        }

    }

})


//? Step 2 :  export Slice methods
export const { addTodo , removeTodo, updateTodo } = todoSlice.actions


//? Step 3 : export default reducer 
export default todoSlice.reducer