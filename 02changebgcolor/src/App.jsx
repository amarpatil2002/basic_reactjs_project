import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black");
  

  return (
      <div className='vw-100 vh-100 btns' style={{backgroundColor:color}}>
        <div style={{ borderRadius:'10px', padding:'5px'}}>
        <button style={{backgroundColor:'green' , border:'1px solid black'}} onClick={() => setColor('green')}>Green</button>
        <button style={{backgroundColor:'red' , border:'1px solid black'}} onClick={() => setColor('red')}>Red</button>
        <button style={{backgroundColor:'blue' , border:'1px solid blue'}} onClick={() => setColor('Blue')}>Blue</button>
        <button style={{backgroundColor:'orange' , border:'1px solid black'}} onClick={() => setColor('orange')}>Orange</button>
        <button style={{backgroundColor:'purple' , border:'1px solid black'}} onClick={() => setColor('purple')}>Purple</button>
        <button style={{backgroundColor:'white' , color:'black' , border:'1px solid black'}} onClick={() => setColor('white')}>White</button>
        <button style={{backgroundColor:'aqua' , border:'1px solid black'}} onClick={() => setColor('aqua')}>Aqua</button>
        </div>
      </div>
  )
}

export default App
