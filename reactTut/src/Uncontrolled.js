import { useState } from "react";

export default function Uncontrolled()
{
    
    function getData()
    {
        let val = document.getElementById('fname').value
        console.warn(val);
    }
   return (
    <div>
        <h2>Uncontrolled component in Reactjs</h2>
        <form onSubmit={getData}>
            <input type="text" id="fname"/><br></br>
            <input type="text" id="lname" /><br></br>
            <button>GetData</button>
        </form>
    </div>
   )
}