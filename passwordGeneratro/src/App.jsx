import { useCallback, useEffect, useState } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [password, setPassword] = useState("");


  //? The string from the password to take 
  let smtext = "abcdefghijklmnopqrstuvwxyz";
  smtext += smtext.toUpperCase() + "~!@#~`$%^&*^()-_" + "0123456789";
  const max = smtext.length - 1; 

  //? to copy code on Clipboard
  const copyCode = (e) => {
    navigator.clipboard.writeText(e.target.value);
    e.target.select();
    alert(`The Code is Copied : ${e.target.value}`);
  };

  //? To generate random password with memoization
  const passwordGenerator = useCallback(() => {
    let curr = "";
    for (let i = 0; i < len; i++) {
      curr += smtext[Math.round(Math.random() * max)];
    }

    setPassword(curr);
  }, [len, password]);



  useEffect(() => {
    passwordGenerator();
  }, [len]);

  return (
    <>
      <div className="container">
        <div>
          <input
            name="len"
            id="len"
            type="range"
            max={16}
            min={7}
            value={len}
            onChange={(e) => setLen(e.target.value)}
          />
          <input
            type="text"
            readOnly
            value={password}
            onClick={(e) => copyCode(e)}
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              backgroundColor: "#124",
              border: "2px solid green",
              borderRadius: "20px",
            }}
          />
        </div>

        <div>
          <label htmlFor="len"> {len} </label>
        </div>
      </div>
    </>
  );
}

export default App;