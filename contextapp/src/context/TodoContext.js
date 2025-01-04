import { createContext , useContext } from 'react'


//? step 1 : Create a Context >>>
export const TodoContext = createContext({

})

export const useTodo = () => {
    //? Step 2 : use the context
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider 