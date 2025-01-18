import React, { useState } from 'react'

const Buttons = ({fun}) => {
    

    const [colors, setColors ] = useState([
        'white',
        'green',
        'red',
        'yellow',
        'black',
        'pink'
    ])


  return (
    <div>
        <p 
        className='p-5 m-10'
        >
        {
            colors.map((color)=>(
                <button key={color}

                className={`px-2 mx-2 `}

                onClick={()=> fun(color)}
                >
                    {
                        color
                    }
                </button>
            ))
        }
        </p>
    </div>
  )
}

export default Buttons