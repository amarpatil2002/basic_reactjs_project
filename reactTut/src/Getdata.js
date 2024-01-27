import {useState} from 'react'

function Getdata()
{
    const [data , setData] = useState(null)
    const [print , setPrint] = useState(false)
    function get(val)
    {
        setData(val.target.value)
        console.log(val.target.value);
    }
    return(
        <div>
            <h1>Get data from input box and display on screen</h1>
            <input type="text" onChange={get}/>
            <button onClick={() => setPrint(true)}>Print</button>
            {print? data : null}
        </div>
    )
}

export default Getdata;