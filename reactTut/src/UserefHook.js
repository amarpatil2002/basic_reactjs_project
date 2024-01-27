import React,{useRef} from 'react'
export default function UserefHooks()
{
    let inputRef = useRef(null)

    function inputFun()
    {
        console.log("Hello world!");
        inputRef.current.value = "18"
        inputRef.current.focus();
        inputRef.current.style.color = "black"
        inputRef.current.style.backgroundColor = "aqua"
    }
    return(
        <div>
            <h2>useRef hook used for manipulate the DOM</h2>
            <input type="text" ref={inputRef} />
            <button onClick={() => inputFun()}>useRef Hook</button>
        </div>
    )
}