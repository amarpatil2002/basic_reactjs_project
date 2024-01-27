import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [count , setCounter] = useState(0)

  const addCount = () => {
    if(count < 24)
    {
      setCounter(count + 1)
    }
    
  }

  const removeCount = () => {
    if(count > 0)
    {
      setCounter(count - 1)
    }
  }
 
  return (
    <>
     <h2>My first react project</h2>
     <h3>count : {count} </h3>
     <button onClick={addCount}>Increament</button>
     <button onClick={removeCount}>Decreament</button>
    </>
  )
}

export default App
