import { useState } from "react"
import Todo from "./components/Todo"


function App() {


  const [todos , setTodos ] = useState([
    {
      id : Date.now(), 
      todo : 'buy milk',
      done : false
    }
  ])



  return (
    <>
      <h1>
        Hey Tere IT's my Todo application
      </h1>
      <Todo prop={{todos,setTodos}} />
    </>
  )
}

export default App
