import React,{useMemo, useState} from 'react'

export default function UseMemoHook()
{
    const [count , setCount] = useState(0);
    const [data , setData] = useState(10);

    const UpdateCount = useMemo(() => {
        console.warn("UpdateCount called");
        return count*5;  
    } , [count])

   return(
    <div>
        <h4>Usememo hook used for stop the rerenderning</h4>
        <h2>conut :{count}</h2>
        <h2>data :{data}</h2>
        <h2>{UpdateCount}</h2>
        <button onClick={() => setCount(count + 1)}>Update count</button>
        <button onClick={() => setData(data * 2)}>Update data</button>
    </div>
   )
}