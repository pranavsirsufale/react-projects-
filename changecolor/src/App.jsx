import { useState } from "react"
import Buttons from "./components/Buttons"


function App() {

  const [currentColor , setCurrentColor] = useState('blue')

  const setCurrentColors = (color) => {
    setCurrentColor(color)
  }

  

  return (
    <div className={`flex flex-col justify-center align-center w-full min-h-full bg-${currentColor}-200`} >

      <div
        className="w-full bg-green-400 p-6"
      
      >



      <h1  
      >



        hii there it's pranav
      </h1>
        </div>

        <div
        className="flex justify-center align-bottom h-full"
        >

      <Buttons fun={setCurrentColors} />

        </div>

    </div>
  )
}

export default App
