import React, { useEffect, useState } from 'react'
import Hookchild from './UseEffectHookchild'

// export default function Hooks()
// {
//     const [count , setCount] = React.useState(0)

//     React.useEffect(() => {
//         alert("Use Effect");
//     })
//     return (
//         <div>
//             <h3>Hooks in Reactjs{count}</h3>
//             <button onClick={() => {setCount(count + 1)}} >Hooks</button>
//         </div>
//     )
// }

export default function Useffect()
{

    const [count , setCount] = useState(10)
    const [data , setData] = useState(20)

    return (
        <div>
            <Hookchild count={count} data={data} ></Hookchild>
            <button onClick={() => {setCount(count+1)}}>Update Count</button>
            <button onClick={() => {setData(data+1)}}>Update data</button>
        </div>
    )
}
