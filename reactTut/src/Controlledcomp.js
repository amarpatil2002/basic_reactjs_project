import { useState } from "react"

export default function()
{
    const [val , setVal] = useState("0000")

    function getData()
    {
        let data = val
        console.log(data);
    }
    return(
        <div>
            <h2>Controlled Component in Reactjs</h2>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <button onClick={getData}>GetData</button>
            <h2>Value is :{val} </h2>
        </div>
    )
}