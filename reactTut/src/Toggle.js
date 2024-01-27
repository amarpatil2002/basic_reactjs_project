import {useState} from 'react'

export default function Toggle()
{
    const [state , setState] = useState(false)
    
    return( 
        <div>
            {
                state?<h1>Hello world</h1>:null
            }
            {/* <button onClick={() => setState(false)}>Hide</button>
            <button onClick={() => setState(true)}>Show</button> */}
            <button onClick={() => setState(!state)}>Toggle</button>
        </div>
    )
}