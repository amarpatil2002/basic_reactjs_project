import React from 'react'
export default function Hookchild(props)
{
    React.useEffect(() => {
        alert("count is " + props.count)
    } , [props.count , props.data])

    return(
        <div>
            <h2>Useffect with props and states</h2>
            <h1>Hooks in Reactjs{props.count}</h1>
            <h1>Hooks in Reactjs{props.data}</h1>
        </div>
    )
}