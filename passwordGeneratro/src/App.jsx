import { useCallback, useEffect, useState } from "react"

function App() {

  const [len, setLen] = useState(8)

  let smtext = 'abcdefghijklmnopqrstuvwxyz'
  smtext += 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
  smtext += '~!@#~`$%^&*^()-_' // 68
  smtext += '0123456789' // 78
  const max = smtext.length-1 ; // 78 - 0 + 

  // console.log(Math.round((Math.random())* (max)) ) 

  console.log(len)


const [password , setPassword ] = useState('')

 

 

  const copyCode = (e) => {
    navigator.clipboard.writeText(e.target.value);
    
    console.log(e)

    e.target.select()
    
    alert(`The Code is Copied : ${e.target.value}`)
    
  }

  // const passwordGenerator = () => {
    
  // }

  const passwordGenerator = useCallback(()=>{
    let curr = ''
    for(let i = 0 ; i < len ; i++){
      curr += smtext[Math.round((Math.random())* (max))]
    }

    setPassword(curr)

  },[len,password])




  useEffect(()=>{
      passwordGenerator()
   
  
  },[len])



  return (
    <>

    <div className="container">

    <div>

    <input name="len" id="len" type="range" max={16} min={7}  value={len} onChange={(e)=>setLen(e.target.value)}
    
    />
      <input type="text" readOnly value={password} 

      onClick={(e)=>copyCode(e)}
      
      style={{textAlign:"center", fontSize : '1.3rem', backgroundColor: '#124',  border:"2px solid green" , borderRadius: '20px'}}
      />
    </div>

    <div>
    <label htmlFor="len"> {len} </label>

    </div>

    </div>



    <h1>
      Hii there's Pranav Sirsufale 
    </h1>
    </>
  )
}

export default App
