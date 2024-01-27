import React from 'react'

export default class Render extends React.Component 
{
    constructor() 
    {
        super()
        this.state={
            email:"amarpatil@gmail.com"
        }

    }

   render()
   {
    console.warn("Rendering..." , this.state.email)
     return(
        <>
         <h2>Render Method in Reactjs {this.state.email}</h2>
         <button onClick={() => this.setState({email:"patil@gmail.com"})} >Update Email</button>
        </>
     )
   }
}