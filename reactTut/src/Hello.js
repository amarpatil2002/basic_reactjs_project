import {useState} from 'react'


export default function Button()
{
    let [name , setData] = useState(0)
    function Update()
    {
        setData(name + 1)
    }
    return(
      
        <div>
            <h1>{name}</h1>
            <button onClick={Update}>Click Me</button>
        </div>
    )

    }
