import { useCallback, useEffect, useState } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isChar, setIsChar] = useState(false);

  //? to copy code on Clipboard
  const copyCode = (e) => {
    navigator.clipboard.writeText(e.target.value);
    e.target.select();
    alert(`The Code is Copied : ${e.target.value}`);
  };

  const handleCopy = (e) => {
    console.log(e.parentNode);
  };

  //? To generate random password with memoization
  const passwordGenerator = useCallback(() => {
    //? The string from the password to take
    let smtext = "abcdefghijklmnopqrstuvwxyz";
    smtext += smtext.toUpperCase();

    if (isNumAllowed) {
      smtext += "0123456789";
    }
    if (isChar) {
      smtext += "~!@#~`$%^&*^()-_";
    }

    const max = smtext.length - 1;

    let curr = "";
    for (let i = 0; i < len; i++) {
      curr += smtext[Math.round(Math.random() * max)];
    }

    setPassword(curr);
  }, [len, isChar, isNumAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [len, isChar, isNumAllowed]);

  return (
    <>
      <div className=""
      style={{
        height : '500px',
        width : '100vw',
        display : 'flex',
        justifyContent : "center",
        alignItems: 'center',

     


      }}
      >
        <div
        >

          {/*  first div  */}
          <div 
        
           style={{
              textAlign :"center",
              marginTop : '2rem'
      
            }}
          className="">
            <h1>Password generator</h1>

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
                padding: "0.8rem 1.5rem ",
              }}
            />
            {/* <button
        style={{
          textAlign: "center",
          fontSize: "1.3rem",
          backgroundColor: "#124",
          border: "2px solid green",
          borderRadius: "20px",
          translate: "-2rem"
          
        }}

        onClick={(e)=>handleCopy(e)}
        >Copy</button> */}
          </div>


              {/*  second div  */}
          <div
            style={{
              textAlign :"center",
              marginTop : '2rem'
      
            }}
          
          >
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
              <label htmlFor="len"> Length {len} </label>
              <input
                type="checkbox"
                id="char"
                name="char"
                value={isChar}
                onChange={(e) => setIsChar((prev) => !prev)}
              />

              <label htmlFor="char"> Character </label>

              <input
                type="checkbox"
                id="num"
                name="name"
                value={isNumAllowed}
                onChange={() => setIsNumAllowed((prev) => !prev)}
              />

              <label htmlFor="num">Number</label>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
