import {useState} from 'react';

export default function Getdata()
{

    const [name , setName] = useState("")
    const [cars , setCars] = useState("")
    const [tac , setTac] = useState(false)

    function getData(e)
    {
       e.preventDefault();
       console.log(name , cars , tac);
    }
    return(
        <div>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/><br/><br/>
                <select onChange={(e) => setCars(e.target.value)}>
                    <option>BMW</option>
                    <option>Fortuner</option>
                    <option>Maruti</option>
                    <option>Tata</option>
                </select><br/><br/>
                <input type="checkbox" onChange={(e) => setTac(e.target.checked)}/><span>Check The all Conditions</span><br/><br/>

                <button onClick={getData}>Get Data</button>
            </form>
        </div>
    )
}