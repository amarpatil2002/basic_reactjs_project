import './App.css';
import React from 'react'
import Hello from './Hello';
import Getdata from './Getdata';
import Toggle from './Toggle';
import Form from './Getformdata'
import Conditionrendernong from './Conditionalrenderning'
import Child from './Child';
import Render from './Render';
import Lifecyclemethod from './Lifecycle';
import Hooks from './UseEffectHooks'
import Arraydata from './List'
import Resusecomponrt from './Resusecomponent'
import Senddatachildtoparent from './Sendchildtoparent'
import PureComp from './Purecomponent';
import UseMemoHook from './Usememohook'
import UserefHook from './UserefHook'
import Controlledcomp from './Controlledcomp'
import Uncontrolled from './Uncontrolled'
function App() {

  function getData()
  {
    alert("Hello!");
  }

  const [name , setName] = React.useState("Amarjit")

  const user = [
    {name:"amarjit" , email:"amarjit@gmail.com"},
    {name:"mahesh" , email:"mahesh@gmail.com"},
    {name:"sanket" , email:"sanket@gmail.com"},
    {name:"abhijit" , email:"amarjit@gmail.com"}
  ]

  let data = "Amarjit Patil"
  function getdatafromChild(childData)
  {
    alert(childData.msg)
  }

  return (
   <div className="App">
    <h3>This is Reactjs Tutorial</h3>  
    {/* <Hello />  */}
    {/* <Getdata /> */}
    {/* <Toggle /> */}
    {/* <Conditionrendernong /> */}
    {/* <Child data={getData} /> */}
    {/* <Render  /> */}
    {/* <Render name={name} /> */}
    {/* <button onClick={() => setName("Patil")}>Update Data</button> */}
    {/* <Lifecyclemethod /> */}
    {/* <Hooks /> */}
    {/* <Arraydata></Arraydata> */}

    {/* {
      user.map((data) => 
     <>
      <Resusecomponrt user={data}  />
      <button onClick={()=>alert(data.name)}>{data.name}</button><br/><br/></>
      )
    } */}

    {/* <Senddatachildtoparent data={data} alerFun={getdatafromChild} /> */}

    {/* <PureComp/> */}
    {/* <UseMemoHook /> */}
    {/* <UserefHook/> */}
    <Controlledcomp/>
    {/* <Uncontrolled /> */}
   </div>
  )
}

export default App;
