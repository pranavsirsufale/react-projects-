import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> here is the app </h1>
      <AddTodo/>
    </>
  )
}

export default App
