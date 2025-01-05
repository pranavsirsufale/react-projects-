import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import {TodoForm , TodoItem} from "./components";

function App() {

const [ todos , setTodos ] = useState([])

const addTodo = (todo) => {
  setTodos((prev) => (
    [{id : Date.now() , ...todo },...prev]
  ))
}

const updateTodo = (id , todo ) => {
  setTodos((prev) => prev.map((current)=>( current.id === id ? todo : current) )) 
}

const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((current ) => current.id !== id))
}

const toggleComplete = (id) => {
  setTodos((prev) => prev.map((current) => current.id === id ?  { ...current, 
    completed : !current.completed
  } : current))
}

useEffect(()=> { 
const todos = JSON.parse(localStorage.getItem('todos'))
if(todos && todos.length > 0 ){
  setTodos(todos)

  if ( todos && todos.length > 0 ) {
    setTodos(todos)
  }
} 
},[])

//! you can take more than one useEffects 
useEffect(()=>{
  localStorage.setItem('todos' , JSON.stringify(todos))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>

          </div>
          <div className="flex flex-wrap gap-y-3">
            <ul>
              {
                 todos.map((currentTodo ) => (
                 <div key={currentTodo.id} 
                 className="w-full"
                 >               
                  <TodoItem todo={currentTodo} />
                  </div>
                )) 
              }
            </ul>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
