import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {



  return (
    <>
      <h1> here is the app </h1>
      <AddTodo/>

      <div>
      <Todos/>
      </div>
    </>
  )
}

export default App
