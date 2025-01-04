import { createContext , useContext } from 'react'


//? step 1 : Create a Context >>>
export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : 'Todo msg',
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo)=> {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})

export const useTodo = () => {
    //? Step 2 : use the context
    return useContext(TodoContext)
}



//? step 3 : context Provider  
export const TodoProvider = TodoContext.Provider 