import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {



  return (
    <>
      <AddTodo/>

      <div>
      <Todos/>
      </div>
    </>
  )
}

export default App
