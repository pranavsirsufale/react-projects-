import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [currentColor, setCurrentColor] = useState("gray");


  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: currentColor }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <Buttons fun={setCurrentColor} />
      </div>

    </div>
  );
}

export default App;
