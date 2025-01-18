import { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [currentColor, setCurrentColor] = useState("gray");

  const setCurrentColors = (color) => {
    setCurrentColor(color);
  };

  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: currentColor }}
    >


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <Buttons fun={setCurrentColors} />
      </div>

    </div>
  );
}

export default App;
