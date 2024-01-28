import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usersdata, setUsers] = useState([])

  useEffect(() =>{
    axios.get("/api/users").then((res) =>{
      console.log(res.data.email);
      setUsers(res.data)
    }).catch((err) => {
      console.log(err);
    })
  } , [])

  return (
    <div>
       <table border={1} cellPadding={10} >
         <thead>
           <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
           </tr>
         </thead>
         <tbody>
           {
              usersdata.map((items , index) => {
                const {name , email , age , city} = items
                   return(
                    <tr key={index} >
                    <td>{index+1}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{age}</td>
                    <td>{city}</td>
                   </tr>
                   )
              })
            }
         </tbody>
       </table>
    </div>
  )
}

export default App
