import { useState} from "react"
export default function Ifelse()
{
    // const [loggedIn , setLoggedIn] = useState(2) 
    let loggedIn = 2
    return(
        <div>
            <h1>Conditional renderning in reactjs using Ternery oper</h1>
            {loggedIn == 1?<h1>Login user1</h1>:loggedIn == 2?<h1>Login user2</h1>:<h1>Login user3</h1>}
        </div>
    )
}