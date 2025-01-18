import React, { useState } from "react";

const Buttons = ({ fun }) => {
  const [colors, setColors] = useState([
    "blue",
    "green",
    "red",
    "yellow",
    "black",
    "pink",
    "olive",
  ]);

  return (
    <div>
      <p className="p-2 m-10 bg-slate-300 rounded-md">
        {colors.map((color) => (
          <button
            key={color}
            className={`p-2 mx-3 rounded-md text-xl`}
            style={{ backgroundColor: color }}
            onClick={() => fun(color)}
          >
            {color}
          </button>
        ))}
      </p>
    </div>
  );
};

export default Buttons;
